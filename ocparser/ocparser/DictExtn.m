//
//  DictExtn.m
//  ocparser
//
//  Created by Andrew Jones on 9/17/17.
//  Copyright © 2017 None. All rights reserved.
//
// https://stackoverflow.com/questions/19079862/converting-nsobject-to-nsdictionary

#import <Foundation/Foundation.h>
#import <objc/runtime.h>

@implementation NSDictionary(dictionaryWithObject)

+(NSDictionary *) dictionaryWithPropertiesOfObject:(id)obj
{
    NSMutableDictionary *dict = [NSMutableDictionary dictionary];

    unsigned count;
    objc_property_t *properties = class_copyPropertyList([obj class], &count);

    for (int i = 0; i < count; i++) {
        NSString *key = [NSString stringWithUTF8String:property_getName(properties[i])];
        
        NSObject *value = [obj valueForKey:key];
        if (value == nil){
            value = @"";
        }
        BOOL isDate = [value isKindOfClass:[NSDate class]];
        if (isDate){
            NSDate *day = (NSDate*) value;
            NSTimeInterval span = [day timeIntervalSince1970];
            value = [NSString stringWithFormat:@"%.0f", span];
        }
        [dict setObject: value forKey:key];
    }

    free(properties);

    return [NSDictionary dictionaryWithDictionary:dict];
}

@end
