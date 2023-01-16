//
//  RudderAdjustIntegration.m
//  FBSnapshotTestCase
//
//  Created by Arnab Pal on 29/10/19.
//

#import "RudderFirebaseIntegration.h"
#import "RudderUtils.h"

@implementation RudderFirebaseIntegration

#pragma mark - Initialization

- (instancetype)initWithConfig:(NSDictionary *)config withAnalytics:(nonnull RSClient *)client  withRudderConfig:(nonnull RSConfig *)rudderConfig {
    self = [super init];
    if (self) {
        dispatch_sync(dispatch_get_main_queue(), ^{
            if ([FIRApp defaultApp] == nil){
                [FIRApp configure];
                [RSLogger  logDebug:@"Rudder-Firebase is initialized"];
            } else {
                [RSLogger  logDebug:@"Firebase core already initialized - skipping on Rudder-Firebase"];
            }
        });
    }
    return self;
}

- (void)dump:(RSMessage *)message {
    if (message != nil) {
        [self processRudderEvent:message];
    }
}

- (void) processRudderEvent: (nonnull RSMessage *) message {
    NSString *type = message.type;
    if (type != nil) {
        NSDictionary *properties;
        NSMutableDictionary *params;
        if ([type  isEqualToString: @"identify"]) {
            NSString *userId = message.userId;
            if (![RudderUtils isEmpty:userId]) {
                [RSLogger logDebug:@"Setting userId to firebase"];
                [FIRAnalytics setUserID:userId];
            }
            NSDictionary *traits = message.context.traits;
            if (traits != nil) {
                for (NSString *key in [traits keyEnumerator]) {
                    if([key isEqualToString:@"userId"]) continue;
                    NSString* firebaseKey = [RudderUtils getTrimKey:key];
                    if (![IDENTIFY_RESERVED_KEYWORDS containsObject:firebaseKey]) {
                        [RSLogger logDebug:[NSString stringWithFormat:@"Setting userProperty to Firebase: %@", firebaseKey]];
                        [FIRAnalytics setUserPropertyString:traits[key] forName:firebaseKey];
                    }
                }
            }
        } else if ([type isEqualToString:@"screen"]) {
            NSString *screenName = message.event;
            if ([RudderUtils isEmpty:screenName]) {
                return;
            }
            params = [[NSMutableDictionary alloc] init];
            properties = message.properties;
            [params setValue:screenName forKey:kFIRParameterScreenName];
            [self attachAllCustomProperties:params properties:properties];
            [FIRAnalytics logEventWithName:kFIREventScreenView parameters:params];
        } else if ([type isEqualToString:@"track"]) {
            NSString *eventName = message.event;
            if (![RudderUtils isEmpty:eventName]) {
                NSString *firebaseEvent;
                properties = message.properties;
                params = [[NSMutableDictionary alloc] init];
                if ([eventName isEqualToString:@"Application Opened"]) {
                    firebaseEvent = kFIREventAppOpen;
                }
                // Handle E-Commerce event
                else if (ECOMMERCE_EVENTS_MAPPING[eventName]){
                    firebaseEvent = ECOMMERCE_EVENTS_MAPPING[eventName];
                    if (![RudderUtils isEmpty:properties]) {
                        if ([firebaseEvent isEqualToString:kFIREventShare]) {
                            if (![RudderUtils isEmpty:properties[@"cart_id"]]) {
                                [params setValue:properties[@"cart_id"] forKey:kFIRParameterItemID];
                            } else if (![RudderUtils isEmpty:properties[@"product_id"]]) {
                                [params setValue:properties[@"product_id"] forKey:kFIRParameterItemID];
                            }
                        }
                        if ([firebaseEvent isEqualToString:kFIREventViewPromotion] || [firebaseEvent isEqualToString:kFIREventSelectPromotion]) {
                            if (![RudderUtils isEmpty:properties[@"name"]]) {
                                [params setValue:properties[@"name"] forKey:kFIRParameterPromotionName];
                            }
                        }
                        if ([eventName isEqualToString:ECommProductShared]) {
                            [params setValue:@"product" forKey:kFIRParameterContentType];
                        }
                        if ([firebaseEvent isEqualToString:kFIREventSelectContent]) {
                            if (![RudderUtils isEmpty:properties[@"product_id"]]) {
                                [params setValue:properties[@"product_id"] forKey:kFIRParameterItemID];
                            }
                            [params setValue:@"product" forKey:kFIRParameterContentType];
                        }
                        if ([eventName isEqualToString:ECommCartShared]) {
                            [params setValue:@"cart" forKey:kFIRParameterContentType];
                        }
                        [self handleECommerce:params properties:properties firebaseEvent:firebaseEvent];
                    }
                }
                // Custom track event
                else {
                    firebaseEvent = [RudderUtils getTrimKey:eventName];
                }
                if (![RudderUtils isEmpty:firebaseEvent]) {
                    [self attachAllCustomProperties:params properties:properties];
                    [RSLogger logDebug:[NSString stringWithFormat:@"Logged \"%@\" to Firebase", firebaseEvent]];
                    [FIRAnalytics logEventWithName:firebaseEvent parameters:params];
                }
            }
        } else {
            [RSLogger logWarn:@"Message type is not recognized"];
        }
    }
}

-(void) handleECommerce:(NSMutableDictionary *) params properties: (NSDictionary *) properties firebaseEvent:(NSString *) firebaseEvent {
    if (![RudderUtils isEmpty:properties[@"revenue"]] && [RudderUtils isNumber:properties[@"revenue"]]) {
        [params setValue:[NSNumber numberWithDouble:[properties[@"revenue"] doubleValue]] forKey:kFIRParameterValue];
    } else if (![RudderUtils isEmpty:properties[@"value"]] && [RudderUtils isNumber:properties[@"value"]]) {
        [params setValue:[NSNumber numberWithDouble:[properties[@"value"] doubleValue]] forKey:kFIRParameterValue];
    } else if (![RudderUtils isEmpty:properties[@"total"]] && [RudderUtils isNumber:properties[@"total"]]) {
        [params setValue:[NSNumber numberWithDouble:[properties[@"total"] doubleValue]] forKey:kFIRParameterValue];
    }
    if ([EVENT_WITH_PRODUCTS_ARRAY containsObject:firebaseEvent] && ![RudderUtils isEmpty:properties[@"products"]]) {
        [self handleProducts:params properties:properties isProductsArray:YES];
    }
    if ([EVENT_WITH_PRODUCTS_AT_ROOT containsObject:firebaseEvent]) {
        [self handleProducts:params properties:properties isProductsArray:NO];
    }
    if (![RudderUtils isEmpty:properties[@"currency"]]) {
        [params setValue:[NSString stringWithFormat:@"%@", properties[@"currency"]] forKey:kFIRParameterCurrency];
    } else {
        [params setValue:@"USD" forKey:kFIRParameterCurrency];
    }
    for (NSString *propertyKey in properties) {
        if (ECOMMERCE_PROPERTY_MAPPING[propertyKey] && ![RudderUtils isEmpty:properties[propertyKey]]) {
            [params setValue:[NSString stringWithFormat:@"%@", properties[propertyKey]] forKey:ECOMMERCE_PROPERTY_MAPPING[propertyKey]];
        }
    }
    if (![RudderUtils isEmpty:properties[@"shipping"]] && [RudderUtils isNumber:properties[@"shipping"]]) {
        [params setValue:[NSNumber numberWithDouble:[properties[@"shipping"] doubleValue]] forKey:kFIRParameterShipping];
    }
    if (![RudderUtils isEmpty:properties[@"tax"]] && [RudderUtils isNumber:properties[@"tax"]]) {
        [params setValue:[NSNumber numberWithDouble:[properties[@"tax"] doubleValue]] forKey:kFIRParameterTax];
    }
    // order_id is being mapped to FirebaseAnalytics.Param.TRANSACTION_ID.
    if (![RudderUtils isEmpty:properties[@"order_id"]]) {
        [params setValue:[NSString stringWithFormat:@"%@", properties[@"order_id"]] forKey:kFIRParameterTransactionID];
        // As this change is made at version 2.0.6. So to have the backward compatibility, we're inserting order_id properties as well.
        [params setValue:[NSString stringWithFormat:@"%@", properties[@"order_id"]] forKey:@"order_id"];
    }
}

-(void) handleProducts:(NSMutableDictionary *) params properties: (NSDictionary *) properties isProductsArray:(BOOL) isProductsArray{
    NSMutableArray *mappedProduct;
    // If Products array is present
    if (isProductsArray){
        NSDictionary *products = [properties objectForKey:@"products"];
        if ([products isKindOfClass:[NSArray class]]) {
            mappedProduct = [[NSMutableArray alloc] init];
            for (NSDictionary *product  in products) {
                NSMutableDictionary *productBundle = [[NSMutableDictionary alloc] init];
                [self putProductValue:productBundle properties:product];
                if ([productBundle count]) {
                    [mappedProduct addObject:productBundle];
                }
            }
        }
    }
    // If product is present at the root level
    else {
        NSMutableDictionary *productBundle = [[NSMutableDictionary alloc] init];
        [self putProductValue:productBundle properties:properties];
        mappedProduct = [[NSMutableArray alloc] init];
        [mappedProduct addObject:productBundle];
    }
    if (![RudderUtils isEmpty:mappedProduct]) {
        [params setValue:mappedProduct forKey:kFIRParameterItems];
    }
}

-(void) putProductValue:(NSMutableDictionary *) params properties:(NSDictionary *) properties {
    for (NSString *key in PRODUCT_PROPERTIES_MAPPING) {
        if (![RudderUtils isEmpty:properties[key]]) {
            NSString *firebaseKey = PRODUCT_PROPERTIES_MAPPING[key];
            if ([firebaseKey isEqualToString:kFIRParameterItemID] || [firebaseKey isEqualToString:kFIRParameterItemName] || [firebaseKey isEqualToString:kFIRParameterItemCategory]) {
                [params setValue:[NSString stringWithFormat:@"%@", properties[key]] forKey:firebaseKey];
                continue;;
            }
            if ([RudderUtils isNumber:properties[key]]) {
                if ([firebaseKey isEqualToString:kFIRParameterQuantity]) {
                    [params setValue:[NSNumber numberWithInteger:[(NSNumber *)properties[key] intValue]] forKey:firebaseKey];
                    continue;;
                }
                if ([firebaseKey isEqualToString:kFIRParameterPrice]) {
                    [params setValue:[NSNumber numberWithDouble:[(NSNumber *)properties[key] doubleValue]] forKey:firebaseKey];
                }
            }
        }
    }
}

- (void) attachAllCustomProperties: (NSMutableDictionary *) params properties: (NSDictionary *) properties {
    if(![RudderUtils isEmpty:properties] && params != nil) {
        for (NSString *key in [properties keyEnumerator]) {
            NSString* firebaseKey = [RudderUtils getTrimKey:key];
            id value = properties[key];
            if ([TRACK_RESERVED_KEYWORDS containsObject:firebaseKey] || [RudderUtils isEmpty:value]) {
                continue;
            }
            if ([value isKindOfClass:[NSNumber class]]) {
                [params setValue:[NSNumber numberWithDouble:[value doubleValue]] forKey:firebaseKey];
            }
            else if([value isKindOfClass:[NSString class]]) {
                if ([value length] > 100) {
                    value = [value substringToIndex:[@100 unsignedIntegerValue]];
                }
                [params setValue:value forKey:firebaseKey];
            } else {
                NSString *convertedString = [NSString stringWithFormat:@"%@", value];
                // if length exceeds 100, don't send the property
                if ([convertedString length] <= 100) {
                    [params setValue:convertedString forKey:firebaseKey];
                }
            }
        }
    }
}

- (void)reset {
    [FIRAnalytics setUserID:nil];
    [RSLogger logDebug:@"Reset: FIRAnalytics setUserID:nil"];
}

- (void)flush {
    // Firebase doesn't support flush functionality
}


@end

