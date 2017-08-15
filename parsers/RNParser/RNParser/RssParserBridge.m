//
//  RssParserBridge.m
//  RNParser
//
//  Created by Andrew Jones on 8/5/17.
//  Copyright © 2017 None. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(RssParser, NSObject)

RCT_EXTERN_METHOD(getFeed:(NSString *)url)

@end
