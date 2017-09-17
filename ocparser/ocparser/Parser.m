//
//  Parser.m
//  ocparser
//
//  Created by Andrew Jones on 9/16/17.
//  Copyright © 2017 None. All rights reserved.
//
#import "Parser.h"
#import <Foundation/Foundation.h>
#import <React/RCTLog.h>
#import "MWFeedParser.h"
#import "DictExtn.h"

@implementation FeedParser
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
    if (item) [parsedItems addObject:item];
}

- (void)feedParserDidFinish:(MWFeedParser *)parser {
    RCTLogInfo(@"Finished Parsing%@", (parser.stopped ? @" (Stopped)" : @""));
    RCTLogInfo(@"%@", [NSString stringWithFormat:@"Count %lu", (unsigned long)parsedItems.count ]);
    NSMutableArray *titles = [[NSMutableArray alloc] init];
    int i;
    for (i = 0; i < [parsedItems count]; i++) {
        NSObject *obj = [parsedItems objectAtIndex:i];
        NSDictionary *feed = [NSDictionary dictionaryWithPropertiesOfObject:obj];
        [titles addObject:feed];
    }
    resolve(titles);
}

- (void)feedParser:(MWFeedParser *)parser didFailWithError:(NSError *)error {
    RCTLogInfo(@"Finished Parsing With Error: %@", error);
    RCTLogInfo(@"Failed"); // Show failed message in title
    // Failed but some items parsed, so show and inform of error
    reject(@"parse_failed", @"The parse failed", error);
    
}

@end
