//
//  RudderAdjustFactory.h
//  FBSnapshotTestCase
//
//  Created by Arnab Pal on 29/10/19.
//

#import <Foundation/Foundation.h>
#import <Rudder/RSIntegrationFactory.h>

NS_ASSUME_NONNULL_BEGIN

@interface RudderFirebaseFactory : NSObject<RSIntegrationFactory>

+ (instancetype) instance;

@end

NS_ASSUME_NONNULL_END
