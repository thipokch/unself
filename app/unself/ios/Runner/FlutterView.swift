//
//  FlutterView.swift
//  Runner
//
//  Created by Thipok Ch on 1/16/23.
//

import SwiftUI
import Flutter

struct FlutterView: UIViewControllerRepresentable {
    
    typealias UIViewControllerType = FlutterViewController
    
    @EnvironmentObject var appDelegate: AppDelegate
    
    func makeUIViewController(context: Context) -> FlutterViewController {
        let flutterEngine = appDelegate.flutterEngine
        return FlutterViewController(engine: flutterEngine, nibName: nil, bundle: nil)
    }
    
    func updateUIViewController(_ uiViewController: FlutterViewController, context: Context) { }
}
