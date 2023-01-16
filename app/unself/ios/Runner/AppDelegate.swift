//
//  AppDelegate.swift
//  Runner
//
//  Created by Thipok Ch on 1/16/23.
//

import Flutter

@main
class AppDelegate: FlutterAppDelegate, ObservableObject {  // More on the FlutterAppDelegate.
    lazy var flutterEngine = FlutterEngine(name: "Global Flutter Engine")
    
    override func application(
        _ application: UIApplication,
        didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
    ) -> Bool {
        // Runs the default Dart entrypoint with a default Flutter route.
        flutterEngine.run()
        // Used to connect plugins (only if you have plugins with iOS platform code).
        GeneratedPluginRegistrant.register(with: self.flutterEngine)
        
        // START - Set rootViewController as FlutterViewController
        
        self.window = UIWindow.init(frame: UIScreen.main.bounds)
        
        self.window.rootViewController = FlutterViewController(
            engine: flutterEngine, nibName: nil, bundle: nil)
        
        guard let controller = self.window.rootViewController as? FlutterViewController else {
            fatalError("rootViewController is not type FlutterViewController")
        }
        
        self.window.makeKeyAndVisible()
        
        // END - Set rootViewController as FlutterViewController
        
        return super.application(application, didFinishLaunchingWithOptions: launchOptions)
    }
}
