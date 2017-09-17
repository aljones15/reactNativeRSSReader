//
//  ocparser.m
//  ocparser
//
//  Created by Andrew Jones on 8/20/17.
//  Copyright © 2017 None. All rights reserved.
//
#import "OcParser.h"
#import <React/RCTLog.h>
#import "Parser.m"

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
                  (NSURL *) link
                  Resolver: (RCTPromiseResolveBlock)resolve
                  Rejecter: (RCTPromiseRejectBlock)reject){
    if(link.absoluteString.length > 0){
        NSURLComponents *components = [NSURLComponents new];
        components.scheme = @"https";
        components.host = link.host;
        components.path = link.path;
        link = [components URL];
        FeedParser * parser = [[FeedParser alloc] init:link Resolver: resolve Rejecter: reject];
    } else {
        reject(@"no_url", @"There was no url", NULL);
    }
    
}
@end
