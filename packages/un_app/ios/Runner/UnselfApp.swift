//
//  UnselfApp.swift
//  Runner
//
//  Created by Thipok Ch on 1/16/23.
//

import SwiftUI

// AppDelegate is now @main
struct UnselfApp: App {
    @UIApplicationDelegateAdaptor(AppDelegate.self) var appDelegate
    
    var body: some Scene {
        WindowGroup {
            FlutterView()
                .ignoresSafeArea()
                .environmentObject(self.appDelegate)
        }
    }
}

