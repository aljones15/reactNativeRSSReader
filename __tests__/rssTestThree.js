import 'react-native';
import React from 'react';
import Root from '../assets/components/root.js';
import { mockResponse } from 'jest-fetch-mock';
require("babel-polyfill");
const mockStorage = require('mock-async-storage');
import renderer from 'react-test-renderer';

const response = {
 "query": {
   "count": 5,
   "created": "2017-01-09T13:53:35Z",
   "lang": "en-US",
   "diagnostics": {
      "publiclyCallable": "true",
      "url": {
          "execution-start-time": "1",
          "execution-stop-time": "9",
          "execution-time": "8",
          "content": "http://rss.nytimes.com/services/xml/rss/nyt/World.xml"
         },
      "user-time": "10",
      "service-time": "8",
      "build-version": "2.0.84"
     },
   "results": {
      "item": [
          {
	       "title": "Airstrikes by Russia Buttress Turkey in Battle vs. ISIS",
	       "link": [
	             "http://www.nytimes.com/2017/01/08/us/politics/russia-turkey-syria-airstrikes-isis.html?partner=rss&emc=rss",
	             {
		            "href": "http://www.nytimes.com/2017/01/08/us/politics/russia-turkey-syria-airstrikes-isis.html?partner=rss&emc=rss",
		            "rel": "standout"
		           }
	            ],
	       "guid": {
	             "isPermaLink": "true",
	             "content": "http://www.nytimes.com/2017/01/08/us/politics/russia-turkey-syria-airstrikes-isis.html"
	            },
	       "content": {
	             "height": "151",
	             "medium": "image",
	             "url": "https://static01.nyt.com/images/2017/01/09/world/JP-MILITARY/JP-MILITARY-moth.jpg",
	             "width": "151"
	            },
	       "description": [
	             "President Recep Tayyip Erdogan of Turkey and President Vladimir V. Putin of Russia at the World Energy Congress in Istanbul in October.",
	             "The deepening partnership between Russia and Turkey could marginalize the United States in the struggle to shape Syria’s future."
	            ],
	       "credit": "Emrah Gurel/Associated Press",
	       "creator": "MICHAEL R. GORDON and ERIC SCHMITT",
	       "pubDate": "Mon, 09 Jan 2017 02:28:42 GMT",
	       "category": [
	             {
		            "domain": "http://www.nytimes.com/namespaces/keywords/nyt_geo",
		            "content": "Russia"
		           },
	             {
		            "domain": "http://www.nytimes.com/namespaces/keywords/nyt_geo",
		            "content": "Turkey"
		           },
	             {
		            "domain": "http://www.nytimes.com/namespaces/keywords/nyt_geo",
		            "content": "Syria"
		           },
	             {
		            "domain": "http://www.nytimes.com/namespaces/keywords/des",
		            "content": "Defense and Military Forces"
		           },
	             {
		            "domain": "http://www.nytimes.com/namespaces/keywords/nyt_per",
		            "content": "Erdogan, Recep Tayyip"
		           },
		           {
			          "domain": "http://www.nytimes.com/namespaces/keywords/nyt_per",
			          "content": "Putin, Vladimir V"
			         },
			         {
				        "domain": "http://www.nytimes.com/namespaces/keywords/nyt_org_all",
				        "content": "Islamic State in Iraq and Syria (ISIS)"
				       },
				       {
				              "domain": "http://www.nytimes.com/namespaces/keywords/nyt_per",
				              "content": "Assad, Bashar al-"
				             }
		         ]
	      },
	      {
	           "title": "Ayatollah Ali Akbar Hashemi Rafsanjani, Ex-President of Iran, Dies at 82",
	           "link": [
		         "http://www.nytimes.com/2017/01/08/world/middleeast/ayatollah-rafsanjani-dead.html?partner=rss&emc=rss",
		         {
			        "href": "http://www.nytimes.com/2017/01/08/world/middleeast/ayatollah-rafsanjani-dead.html?partner=rss&emc=rss",
			        "rel": "standout"
			       }
		        ],
	           "guid": {
		         "isPermaLink": "true",
		         "content": "http://www.nytimes.com/2017/01/08/world/middleeast/ayatollah-rafsanjani-dead.html"
		        },
	           "content": {
		         "height": "151",
		         "medium": "image",
		         "url": "https://static01.nyt.com/images/2017/01/08/obituaries/09RAFSANJANI-hp/09RAFSANJANI-hp-moth.jpg",
		         "width": "151"
		        },
	           "description": [
		         "Ayatollah Ali Akbar Hashemi Rafsanjani in Tehran in 2005.",
		         "Mr. Rafsanjani, a founder of the Iranian Islamic Republic, navigated his country’s theocracy as one of its most enduring, wiliest and wealthiest leaders."
		        ],
	           "credit": "James Hill for The New York Times",
	           "creator": "ALAN COWELL",
	           "pubDate": "Sun, 08 Jan 2017 18:44:25 GMT",
	           "category": [
		         {
			        "domain": "http://www.nytimes.com/namespaces/keywords/mdes",
			        "content": "Deaths (Obituaries)"
			       },
		         {
			        "domain": "http://www.nytimes.com/namespaces/keywords/nyt_per",
			        "content": "Rafsanjani, Ali Akbar Hashemi"
			       },
		         {
			        "domain": "http://www.nytimes.com/namespaces/keywords/nyt_geo",
			        "content": "Iran"
			       }
		        ]
	          },
	          {
		       "title": "Death of Iran’s Rafsanjani Removes Influential Voice Against Hard-Liners",
		       "link": [
		             "http://www.nytimes.com/2017/01/08/world/middleeast/iran-ali-akbar-hashemi-rafsanjani-dies.html?partner=rss&emc=rss",
		             {
			            "href": "http://www.nytimes.com/2017/01/08/world/middleeast/iran-ali-akbar-hashemi-rafsanjani-dies.html?partner=rss&emc=rss",
			            "rel": "standout"
			           }
		            ],
		       "guid": {
		             "isPermaLink": "true",
		             "content": "http://www.nytimes.com/2017/01/08/world/middleeast/iran-ali-akbar-hashemi-rafsanjani-dies.html"
		            },
		       "content": {
		             "height": "151",
		             "medium": "image",
		             "url": "https://static01.nyt.com/images/2017/01/09/world/09IRAN-1483893926816/09IRAN-1483893926816-moth.jpg",
		             "width": "151"
		            },
		       "description": [
		             "Ali Akbar Hashemi Rafsanjani, a former president of Iran, in Tehran in 2015.",
		             "Mr. Rafsanjani, 82, was a main voice in Iran calling for outreach to the West. His death is also a reminder of a looming generational leadership change."
		            ],
		       "credit": "Ebrahim Noroozi/Associated Press",
		       "creator": "THOMAS ERDBRINK",
		       "pubDate": "Mon, 09 Jan 2017 02:01:31 GMT",
		       "category": [
		             {
			            "domain": "http://www.nytimes.com/namespaces/keywords/nyt_per",
			            "content": "Rafsanjani, Ali Akbar Hashemi"
			           },
		             {
			            "domain": "http://www.nytimes.com/namespaces/keywords/des",
			            "content": "Deaths (Obituaries)"
			           },
		             {
			            "domain": "http://www.nytimes.com/namespaces/keywords/nyt_geo",
			            "content": "Iran"
			           },
		             {
			            "domain": "http://www.nytimes.com/namespaces/keywords/des",
			            "content": "Muslims and Islam"
			           },
		             {
			            "domain": "http://www.nytimes.com/namespaces/keywords/des",
			            "content": "Politics and Government"
			           }
			         ]
		      },
		      {
		           "title": "The Interpreter: Russian Hackers Find Ready Bullhorns in the Media",
		           "link": [
			         "http://www.nytimes.com/2017/01/08/world/europe/russian-hackers-find-ready-bullhorns-in-the-media.html?partner=rss&emc=rss",
			         {
				        "href": "http://www.nytimes.com/2017/01/08/world/europe/russian-hackers-find-ready-bullhorns-in-the-media.html?partner=rss&emc=rss",
				        "rel": "standout"
				       }
			        ],
		           "guid": {
			         "isPermaLink": "true",
			         "content": "http://www.nytimes.com/2017/01/08/world/europe/russian-hackers-find-ready-bullhorns-in-the-media.html"
			        },
		           "content": {
			         "height": "151",
			         "medium": "image",
			         "url": "https://static01.nyt.com/images/2017/01/09/world/09int-russia/09int-russia-moth.jpg",
			         "width": "151"
			        },
		           "description": [
			         "Julian Assange, founder of WikiLeaks, which was accused of helping Russia interfere with the United States presidential election by leaking hacked documents. Two web presences believed to be Russian fronts, Guccifer 2.0 and DCLeaks, mimicked Mr. Assange’s pose as activist-hacker.",
			         "Journalists seek to serve the public interest, but sometimes find themselves unwilling — or unwitting — accomplices to a source’s agenda."
			        ],
		           "credit": "Ben Stansall/Agence France-Presse — Getty Images",
		           "creator": "MAX FISHER",
		           "pubDate": "Sun, 08 Jan 2017 18:52:38 GMT",
		           "category": [
			         {
				        "domain": "http://www.nytimes.com/namespaces/keywords/des",
				        "content": "Cyberwarfare and Defense"
				       },
			         {
				        "domain": "http://www.nytimes.com/namespaces/keywords/mdes",
				        "content": "News and News Media"
				       },
			         {
				        "domain": "http://www.nytimes.com/namespaces/keywords/nyt_geo",
				        "content": "Russia"
				       },
			         {
				        "domain": "http://www.nytimes.com/namespaces/keywords/mdes",
				        "content": "Presidential Election of 2016"
				       },
			         {
				        "domain": "http://www.nytimes.com/namespaces/keywords/mdes",
				        "content": "News Sources, Confidential Status of"
				       },
				       {
				              "domain": "http://www.nytimes.com/namespaces/keywords/mdes",
				              "content": "Social Media"
				             },
				             {
					            "domain": "http://www.nytimes.com/namespaces/keywords/mdes",
					            "content": "Computer Security"
					           },
					           {
						          "domain": "http://www.nytimes.com/namespaces/keywords/des",
						          "content": "Cyberattacks and Hackers"
						         }
				     ]
		          },
		          {
			       "title": "17 Arrested in Kim Kardashian West Robbery Inquiry in France",
			       "link": [
			             "http://www.nytimes.com/2017/01/09/world/europe/kim-kardashian-west-robbery-paris.html?partner=rss&emc=rss",
			             {
				            "href": "http://www.nytimes.com/2017/01/09/world/europe/kim-kardashian-west-robbery-paris.html?partner=rss&emc=rss",
				            "rel": "standout"
				           }
			            ],
			       "guid": {
			             "isPermaLink": "true",
			             "content": "http://www.nytimes.com/2017/01/09/world/europe/kim-kardashian-west-robbery-paris.html"
			            },
			       "content": {
			             "height": "151",
			             "medium": "image",
			             "url": "https://static01.nyt.com/images/2017/01/10/world/10Kardashian2/10Kardashian2-moth.jpg",
			             "width": "151"
			            },
			       "description": [
			             "Kim Kardashian West last year. In October, men burst into the Paris apartment where she was staying, tied her up and robbed her of jewelry worth at least $9 million.",
			             "The eldest of those detained was 72, and others were in their 40s, 50s and 60s, prosecutors said."
			            ],
			       "credit": "Landon Nordeman for The New York Times",
			       "creator": "AURELIEN BREEDEN",
			       "pubDate": "Mon, 09 Jan 2017 13:11:29 GMT",
			       "category": [
			             {
				            "domain": "http://www.nytimes.com/namespaces/keywords/des",
				            "content": "Robberies and Thefts"
				           },
			             {
				            "domain": "http://www.nytimes.com/namespaces/keywords/nyt_per",
				            "content": "Kardashian, Kim"
				           },
			             {
				            "domain": "http://www.nytimes.com/namespaces/keywords/nyt_geo",
				            "content": "Paris (France)"
				           }
			            ]
			      }
         ]
     }
  }
} 


it('renders new yort times correctly', () => {
  mockStorage.mock();
  mockResponse(JSON.stringify(response));
  const tree = renderer.create(
    <Root />
  );

});
