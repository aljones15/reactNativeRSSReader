//
//  ocparser.m
//  ocparser
//
//  Created by Andrew Jones on 8/20/17.
//  Copyright © 2017 None. All rights reserved.
//
#import "OcParser.h"
#import <React/RCTLog.h>

@implementation OcParser

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *) name location:(NSString *) location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

RCT_EXPORT_METHOD(test:(RCTResponseSenderBlock)callback){
    callback(@[[NSNull null], @"test"]);
}

RCT_EXPORT_METHOD(getFeed:
                  (NSString *) text
                  Resolver: (RCTPromiseResolveBlock)resolve
                  Rejecter: (RCTPromiseRejectBlock)reject){
    if(text.length > 0){
     resolve(text);
    } else {
        reject(@"no_text", @"There was no text", NULL);
    }
    
}
@end
