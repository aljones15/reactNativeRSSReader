//
//  ocparser.h
//  ocparser
//
//  Created by Andrew Jones on 8/20/17.
//  Copyright © 2017 None. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import "MWFeedParser.h"

@interface TestParser : NSObject <MWFeedParserDelegate>{
    // Parsing
    MWFeedParser *feedParser;
    NSMutableArray *parsedItems;
    RCTPromiseResolveBlock resolve;
    RCTPromiseRejectBlock reject;

}
@end

@interface OcParser : NSObject <RCTBridgeModule>

@end
