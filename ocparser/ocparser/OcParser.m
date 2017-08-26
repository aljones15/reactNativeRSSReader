//
//  ocparser.m
//  ocparser
//
//  Created by Andrew Jones on 8/20/17.
//  Copyright © 2017 None. All rights reserved.
//
#import "OcParser.h"
#import <React/RCTLog.h>
#import "MWFeedParser.h"

@implementation TestParser
- (id) init:(NSURL *)link
   Resolver:(RCTPromiseResolveBlock)_resolve
   Rejecter:(RCTPromiseRejectBlock)_reject
 {
    self = [super init];
    parsedItems = [[NSMutableArray alloc] init];
    resolve = _resolve;
    reject = _reject;
    feedParser = [[MWFeedParser alloc] initWithFeedURL:link];
    feedParser.delegate = self;
    feedParser.feedParseType = ParseTypeFull;
    feedParser.connectionType = ConnectionTypeSynchronously;
    [feedParser parse];
    return self;
}

#pragma mark -
#pragma mark MWFeedParserDelegate
- (void)feedParserDidStart:(MWFeedParser *)parser {
    RCTLogInfo(@"Started Parsing: %@", parser.url);
}

- (void)feedParser:(MWFeedParser *)parser didParseFeedInfo:(MWFeedInfo *)info {
    RCTLogInfo(@"Parsed Feed Info: “%@”", info.title);
    RCTLogInfo(@"%@", info.title);
}

- (void)feedParser:(MWFeedParser *)parser didParseFeedItem:(MWFeedItem *)item {
    RCTLogInfo(@"Parsed Feed Item: “%@”", item.title);
    if (item) [parsedItems addObject:item];
}

- (void)feedParserDidFinish:(MWFeedParser *)parser {
    RCTLogInfo(@"Finished Parsing%@", (parser.stopped ? @" (Stopped)" : @""));
    RCTLogInfo(@"%@", [NSString stringWithFormat:@"Count %lu", (unsigned long)parsedItems.count ]);
    resolve(parsedItems);
}

- (void)feedParser:(MWFeedParser *)parser didFailWithError:(NSError *)error {
    RCTLogInfo(@"Finished Parsing With Error: %@", error);
        RCTLogInfo(@"Failed"); // Show failed message in title
        // Failed but some items parsed, so show and inform of error
    reject(@"parse_failed", @"The parse failed", error);
    
    }

@end

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
        TestParser * parser = [[TestParser alloc] init:link Resolver: resolve Rejecter: reject];
    } else {
        reject(@"no_url", @"There was no url", NULL);
    }
    
}
@end
