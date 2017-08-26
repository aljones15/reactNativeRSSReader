//
//  RssParser.swift
//  RNParser
//
//  Created by Andrew Jones on 8/5/17.
//  Copyright © 2017 None. All rights reserved.
//

import Foundation

@objc(RssParser)
class RssParser : NSObject {
    @objc(url:)
    func getFeed(url: String) -> String{
        return "{'test': 'test'}";
    }
}
