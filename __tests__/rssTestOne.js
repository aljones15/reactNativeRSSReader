import 'react-native';
import React from 'react';
import Root from '../assets/components/root.js';
import { mockResponse } from 'jest-fetch-mock';
require("babel-polyfill");
const mockStorage = require('mock-async-storage');
import renderer from 'react-test-renderer';

const boingBoingresponse = {
 "query": {
   "count": 5,
   "created": "2017-01-09T01:42:54Z",
   "lang": "en-US",
   "diagnostics": {
      "publiclyCallable": "true",
      "url": {
          "execution-start-time": "1",
          "execution-stop-time": "267",
          "execution-time": "266",
          "content": "http://boingboing.net/feed"
         },
      "user-time": "269",
      "service-time": "266",
      "build-version": "2.0.84"
     },
   "results": {
      "item": [
          {
	       "title": "Pharma bro Martin Shkreli  suspended from Twitter after harassing reporter",
	       "link": "http://boingboing.net/2017/01/08/pharma-bro-martin-shkreli-sus.html",
	       "comments": [
	             "http://boingboing.net/2017/01/08/pharma-bro-martin-shkreli-sus.html#comments",
	             "6"
	            ],
	       "pubDate": "Sun, 08 Jan 2017 22:35:32 +0000",
	       "creator": "Rob Beschizza",
	       "category": [
	             "Post",
	             "christ what an asshole",
	             "creepy",
	             "Martin Shkreli",
	             "pharma bro",
	             "sexism"
	            ],
	       "guid": {
	             "isPermaLink": "false",
	             "content": "http://boingboing.net/?p=503850"
	            },
	       "description": "<p><img width=\"702\" height=\"476\" src=\"http://media.boingboing.net/wp-content/uploads/2017/01/shkreli-mad.jpg\" class=\"attachment-post-thumbnail size-post-thumbnail wp-post-image\" alt=\"\" srcset=\"https://i0.wp.com/media.boingboing.net/wp-content/uploads/2017/01/shkreli-mad.jpg?w=702 702w, https://i0.wp.com/media.boingboing.net/wp-content/uploads/2017/01/shkreli-mad.jpg?resize=300%2C203 300w, https://i0.wp.com/media.boingboing.net/wp-content/uploads/2017/01/shkreli-mad.jpg?resize=600%2C407 600w\" sizes=\"(max-width: 702px) 100vw, 702px\" /></p><p>Lauren Duca, a writer for <em>Teen Vogue</em>, recently penned <a href=\"http://www.teenvogue.com/story/donald-trump-is-gaslighting-america\">a popular opinion piece about president-elect Donald Trump's constant lying</a>. Martin Shkreli is a <a href=\"http://boingboing.net/tag/martin-shkreli\">disgraced pharmaceutical executive</a> who famously hiked the price of a lifesaving drug before being <a href=\"http://boingboing.net/2015/12/21/martin-shkreli-is-right-fraud.html\">charged with fraud</a>. A Trump fan, he started tweeting about wanting to date her, despite her clearly finding it unwelcome and ultimately harassing, then took his remarks to direct messages. When she finally, publicly told him to get lost, he downloaded a photo of her, photoshopped his own head onto that of her partner, and made it his Twitter background. Then Twitter itself <a href=\"http://www.theverge.com/2017/1/8/14205552/martin-shkreli-suspension-twitter-harassment-lauren-duca\">finally got sick of his shit and suspended him</a>.   <a href=\"http://boingboing.net/2017/01/08/pharma-bro-martin-shkreli-sus.html#more-503850\" class=\"more-link\"><span aria-label=\"Continue reading Pharma bro Martin Shkreli  suspended from Twitter after harassing reporter\">(more&hellip;)</span></a></p>",
	       "encoded": "<p><img width=\"702\" height=\"476\" src=\"http://media.boingboing.net/wp-content/uploads/2017/01/shkreli-mad.jpg\" class=\"attachment-post-thumbnail size-post-thumbnail wp-post-image\" alt=\"\" srcset=\"https://i0.wp.com/media.boingboing.net/wp-content/uploads/2017/01/shkreli-mad.jpg?w=702 702w, https://i0.wp.com/media.boingboing.net/wp-content/uploads/2017/01/shkreli-mad.jpg?resize=300%2C203 300w, https://i0.wp.com/media.boingboing.net/wp-content/uploads/2017/01/shkreli-mad.jpg?resize=600%2C407 600w\" sizes=\"(max-width: 702px) 100vw, 702px\" /></p><p>Lauren Duca, a writer for <em>Teen Vogue</em>, recently penned <a href=\"http://www.teenvogue.com/story/donald-trump-is-gaslighting-america\">a popular opinion piece about president-elect Donald Trump's constant lying</a>. Martin Shkreli is a <a href=\"http://boingboing.net/tag/martin-shkreli\">disgraced pharmaceutical executive</a> who famously hiked the price of a lifesaving drug before being <a href=\"http://boingboing.net/2015/12/21/martin-shkreli-is-right-fraud.html\">charged with fraud</a>. A Trump fan, he started tweeting about wanting to date her, despite her clearly finding it unwelcome and ultimately harassing, then took his remarks to direct messages. When she finally, publicly told him to get lost, he downloaded a photo of her, photoshopped his own head onto that of her partner, and made it his Twitter background. Then Twitter itself <a href=\"http://www.theverge.com/2017/1/8/14205552/martin-shkreli-suspension-twitter-harassment-lauren-duca\">finally got sick of his shit and suspended him</a>.   <a href=\"http://boingboing.net/2017/01/08/pharma-bro-martin-shkreli-sus.html#more-503850\" class=\"more-link\"><span aria-label=\"Continue reading Pharma bro Martin Shkreli  suspended from Twitter after harassing reporter\">(more&hellip;)</span></a></p>",
	       "commentRss": "http://boingboing.net/2017/01/08/pharma-bro-martin-shkreli-sus.html/feed",
	       "post-id": {
	             "xmlns": "com-wordpress:feed-additions:1",
	             "content": "503850"
	            }
	      },
	      {
	           "title": "Lovely cast aluminum and brass science fiction sculptures",
	           "link": "http://boingboing.net/2017/01/08/lovely-cast-aluminum-and-brass.html",
	           "comments": [
		         "http://boingboing.net/2017/01/08/lovely-cast-aluminum-and-brass.html#comments",
		         "1"
		        ],
	           "pubDate": "Sun, 08 Jan 2017 21:19:44 +0000",
	           "creator": "Cory Doctorow",
	           "category": [
		         "Post",
		         "art",
		         "brasstronauts",
		         "dieselpunk",
		         "Gadgets",
		         "gift guide",
		         "happy mutants",
		         "housewares",
		         "science fiction",
		         "sculpture",
		         "Steampunk",
		         "wisconsin"
		        ],
	           "guid": {
		         "isPermaLink": "false",
		         "content": "http://boingboing.net/?p=503832"
		        },
	           "description": "<p><img width=\"1200\" height=\"976\" src=\"http://media.boingboing.net/wp-content/uploads/2017/01/il_fullxfull.766003546_jf1k-1.jpg\" class=\"attachment-post-thumbnail size-post-thumbnail wp-post-image\" alt=\"\" srcset=\"https://i2.wp.com/media.boingboing.net/wp-content/uploads/2017/01/il_fullxfull.766003546_jf1k-1.jpg?w=1200 1200w, https://i2.wp.com/media.boingboing.net/wp-content/uploads/2017/01/il_fullxfull.766003546_jf1k-1.jpg?resize=300%2C244 300w, https://i2.wp.com/media.boingboing.net/wp-content/uploads/2017/01/il_fullxfull.766003546_jf1k-1.jpg?resize=600%2C488 600w, https://i2.wp.com/media.boingboing.net/wp-content/uploads/2017/01/il_fullxfull.766003546_jf1k-1.jpg?resize=768%2C625 768w, https://i2.wp.com/media.boingboing.net/wp-content/uploads/2017/01/il_fullxfull.766003546_jf1k-1.jpg?resize=930%2C756 930w\" sizes=\"(max-width: 1200px) 100vw, 1200px\" /></p><p>\n<a href=\"http://tidd.ly/a1c05351\">Scott Nelles</a> is a Wisconsin sculptor who works in cast brass and aluminum, making beautiful, whimsical pieces with a strong science fictional flare tinged with strealined dieselpunk.\n <a href=\"http://boingboing.net/2017/01/08/lovely-cast-aluminum-and-brass.html#more-503832\" class=\"more-link\"><span aria-label=\"Continue reading Lovely cast aluminum and brass science fiction sculptures\">(more&hellip;)</span></a></p>",
	           "encoded": "<p><img width=\"1200\" height=\"976\" src=\"http://media.boingboing.net/wp-content/uploads/2017/01/il_fullxfull.766003546_jf1k-1.jpg\" class=\"attachment-post-thumbnail size-post-thumbnail wp-post-image\" alt=\"\" srcset=\"https://i2.wp.com/media.boingboing.net/wp-content/uploads/2017/01/il_fullxfull.766003546_jf1k-1.jpg?w=1200 1200w, https://i2.wp.com/media.boingboing.net/wp-content/uploads/2017/01/il_fullxfull.766003546_jf1k-1.jpg?resize=300%2C244 300w, https://i2.wp.com/media.boingboing.net/wp-content/uploads/2017/01/il_fullxfull.766003546_jf1k-1.jpg?resize=600%2C488 600w, https://i2.wp.com/media.boingboing.net/wp-content/uploads/2017/01/il_fullxfull.766003546_jf1k-1.jpg?resize=768%2C625 768w, https://i2.wp.com/media.boingboing.net/wp-content/uploads/2017/01/il_fullxfull.766003546_jf1k-1.jpg?resize=930%2C756 930w\" sizes=\"(max-width: 1200px) 100vw, 1200px\" /></p><p>\n<a href=\"http://tidd.ly/a1c05351\">Scott Nelles</a> is a Wisconsin sculptor who works in cast brass and aluminum, making beautiful, whimsical pieces with a strong science fictional flare tinged with strealined dieselpunk.\n <a href=\"http://boingboing.net/2017/01/08/lovely-cast-aluminum-and-brass.html#more-503832\" class=\"more-link\"><span aria-label=\"Continue reading Lovely cast aluminum and brass science fiction sculptures\">(more&hellip;)</span></a></p>",
	           "commentRss": "http://boingboing.net/2017/01/08/lovely-cast-aluminum-and-brass.html/feed",
	           "post-id": {
		         "xmlns": "com-wordpress:feed-additions:1",
		         "content": "503832"
		        }
	          },
	          {
		       "title": "How to think critically about news quotes from unnamed \"government sources\" under trumpism",
		       "link": "http://boingboing.net/2017/01/08/how-to-think-critically-about.html",
		       "comments": [
		             "http://boingboing.net/2017/01/08/how-to-think-critically-about.html#comments",
		             "31"
		            ],
		       "pubDate": "Sun, 08 Jan 2017 15:11:01 +0000",
		       "creator": "Cory Doctorow",
		       "category": [
		             "Post",
		             "anodyne anonymity",
		             "fake news",
		             "kremlinology",
		             "post-truth",
		             "reality-based community",
		             "trumpism"
		            ],
		       "guid": {
		             "isPermaLink": "false",
		             "content": "http://boingboing.net/?p=503807"
		            },
		       "description": "<p><img width=\"448\" height=\"336\" src=\"http://media.boingboing.net/wp-content/uploads/2017/01/animation-4.gif\" class=\"attachment-post-thumbnail size-post-thumbnail wp-post-image\" alt=\"\" /></p><p>\nAs the Trump administration continues its twin trademarks of \"not having press conferences\" and \"being at the center of gnarly scandals involving spycraft and hacking,\" much of the reporting on what's actually happening in the most powerful country on Earth is based on quotes attributed to anonymous government sources -- people with something to say but who won't let their names be associated with it.\n <a href=\"http://boingboing.net/2017/01/08/how-to-think-critically-about.html#more-503807\" class=\"more-link\"><span aria-label=\"Continue reading How to think critically about news quotes from unnamed &quot;government sources&quot; under trumpism\">(more&hellip;)</span></a></p>",
		       "encoded": "<p><img width=\"448\" height=\"336\" src=\"http://media.boingboing.net/wp-content/uploads/2017/01/animation-4.gif\" class=\"attachment-post-thumbnail size-post-thumbnail wp-post-image\" alt=\"\" /></p><p>\nAs the Trump administration continues its twin trademarks of \"not having press conferences\" and \"being at the center of gnarly scandals involving spycraft and hacking,\" much of the reporting on what's actually happening in the most powerful country on Earth is based on quotes attributed to anonymous government sources -- people with something to say but who won't let their names be associated with it.\n <a href=\"http://boingboing.net/2017/01/08/how-to-think-critically-about.html#more-503807\" class=\"more-link\"><span aria-label=\"Continue reading How to think critically about news quotes from unnamed &quot;government sources&quot; under trumpism\">(more&hellip;)</span></a></p>",
		       "commentRss": "http://boingboing.net/2017/01/08/how-to-think-critically-about.html/feed",
		       "post-id": {
		             "xmlns": "com-wordpress:feed-additions:1",
		             "content": "503807"
		            }
		      },
		      {
		           "title": "For sale: one 19th century Quebec village, slightly fake, $2.8M",
		           "link": "http://boingboing.net/2017/01/08/for-sale-one-19th-century-que.html",
		           "comments": [
			         "http://boingboing.net/2017/01/08/for-sale-one-19th-century-que.html#comments",
			         "8"
			        ],
		           "pubDate": "Sun, 08 Jan 2017 14:45:21 +0000",
		           "creator": "Cory Doctorow",
		           "category": [
			         "Post",
			         "canada",
			         "History",
			         "potemkin eh?",
			         "real estate"
			        ],
		           "guid": {
			         "isPermaLink": "false",
			         "content": "http://boingboing.net/?p=503803"
			        },
		           "description": "<p><img width=\"620\" height=\"349\" src=\"http://media.boingboing.net/wp-content/uploads/2017/01/canadiana-village.jpg\" class=\"attachment-post-thumbnail size-post-thumbnail wp-post-image\" alt=\"\" srcset=\"https://i0.wp.com/media.boingboing.net/wp-content/uploads/2017/01/canadiana-village.jpg?w=620 620w, https://i0.wp.com/media.boingboing.net/wp-content/uploads/2017/01/canadiana-village.jpg?resize=300%2C169 300w, https://i0.wp.com/media.boingboing.net/wp-content/uploads/2017/01/canadiana-village.jpg?resize=600%2C338 600w\" sizes=\"(max-width: 620px) 100vw, 620px\" /></p><p>\nCanadiana Village is an hour north of Montreal and sports 45 buildings that are intended to recreate rural Quebec life in the 19th century (though only one is habitable); and once served as a destination for school groups and film-crews. Now it's for sale for CAD$2.8M.\n <a href=\"http://boingboing.net/2017/01/08/for-sale-one-19th-century-que.html#more-503803\" class=\"more-link\"><span aria-label=\"Continue reading For sale: one 19th century Quebec village, slightly fake, $2.8M\">(more&hellip;)</span></a></p>",
		           "encoded": "<p><img width=\"620\" height=\"349\" src=\"http://media.boingboing.net/wp-content/uploads/2017/01/canadiana-village.jpg\" class=\"attachment-post-thumbnail size-post-thumbnail wp-post-image\" alt=\"\" srcset=\"https://i0.wp.com/media.boingboing.net/wp-content/uploads/2017/01/canadiana-village.jpg?w=620 620w, https://i0.wp.com/media.boingboing.net/wp-content/uploads/2017/01/canadiana-village.jpg?resize=300%2C169 300w, https://i0.wp.com/media.boingboing.net/wp-content/uploads/2017/01/canadiana-village.jpg?resize=600%2C338 600w\" sizes=\"(max-width: 620px) 100vw, 620px\" /></p><p>\nCanadiana Village is an hour north of Montreal and sports 45 buildings that are intended to recreate rural Quebec life in the 19th century (though only one is habitable); and once served as a destination for school groups and film-crews. Now it's for sale for CAD$2.8M.\n <a href=\"http://boingboing.net/2017/01/08/for-sale-one-19th-century-que.html#more-503803\" class=\"more-link\"><span aria-label=\"Continue reading For sale: one 19th century Quebec village, slightly fake, $2.8M\">(more&hellip;)</span></a></p>",
		           "commentRss": "http://boingboing.net/2017/01/08/for-sale-one-19th-century-que.html/feed",
		           "post-id": {
			         "xmlns": "com-wordpress:feed-additions:1",
			         "content": "503803"
			        }
		          },
		          {
			       "title": "24 hours of the BBC's Radio Four, in four minutes",
			       "link": "http://boingboing.net/2017/01/08/24-hours-of-the-bbcs-radio-f.html",
			       "comments": [
			             "http://boingboing.net/2017/01/08/24-hours-of-the-bbcs-radio-f.html#comments",
			             "2"
			            ],
			       "pubDate": "Sun, 08 Jan 2017 14:38:05 +0000",
			       "creator": "Cory Doctorow",
			       "category": [
			             "Video",
			             "comedy",
			             "Funny",
			             "media theory",
			             "tldr",
			             "uk",
			             "videos",
			             "youtube"
			            ],
			       "guid": {
			             "isPermaLink": "false",
			             "content": "http://boingboing.net/?p=503796"
			            },
			       "description": "<img width=\"600\" height=\"326\" src=\"https://i1.wp.com/media.boingboing.net/wp-content/uploads/2017/01/050-056c026d-1c66-4d42-9fae-a8e96df290c5-1020x1346-1.jpg?fit=600%2C326\" class=\"attachment-medium size-medium wp-post-image\" alt=\"\" srcset=\"https://i1.wp.com/media.boingboing.net/wp-content/uploads/2017/01/050-056c026d-1c66-4d42-9fae-a8e96df290c5-1020x1346-1.jpg?w=1081 1081w, https://i1.wp.com/media.boingboing.net/wp-content/uploads/2017/01/050-056c026d-1c66-4d42-9fae-a8e96df290c5-1020x1346-1.jpg?resize=300%2C163 300w, https://i1.wp.com/media.boingboing.net/wp-content/uploads/2017/01/050-056c026d-1c66-4d42-9fae-a8e96df290c5-1020x1346-1.jpg?resize=600%2C326 600w, https://i1.wp.com/media.boingboing.net/wp-content/uploads/2017/01/050-056c026d-1c66-4d42-9fae-a8e96df290c5-1020x1346-1.jpg?resize=768%2C417 768w, https://i1.wp.com/media.boingboing.net/wp-content/uploads/2017/01/050-056c026d-1c66-4d42-9fae-a8e96df290c5-1020x1346-1.jpg?resize=930%2C505 930w\" sizes=\"(max-width: 600px) 100vw, 600px\" /> <p> https://www.youtube.com/watch?v=VdOr5FpLKR8\n<p>\n<a href=\"http://jakeyapp.co.uk/home\">Jake Yapp</a> is a British comedian who specialises in doing <a href=\"http://jakeyapp.co.uk/audio\">high-speed summaries</a> of pop culture phenomena, like this Radio Four in 4 Minutes sketch, which is a work of genuine genius, especially the radio drama bits.\n\n",
			       "encoded": "<img width=\"600\" height=\"326\" src=\"https://i1.wp.com/media.boingboing.net/wp-content/uploads/2017/01/050-056c026d-1c66-4d42-9fae-a8e96df290c5-1020x1346-1.jpg?fit=600%2C326\" class=\"attachment-medium size-medium wp-post-image\" alt=\"\" srcset=\"https://i1.wp.com/media.boingboing.net/wp-content/uploads/2017/01/050-056c026d-1c66-4d42-9fae-a8e96df290c5-1020x1346-1.jpg?w=1081 1081w, https://i1.wp.com/media.boingboing.net/wp-content/uploads/2017/01/050-056c026d-1c66-4d42-9fae-a8e96df290c5-1020x1346-1.jpg?resize=300%2C163 300w, https://i1.wp.com/media.boingboing.net/wp-content/uploads/2017/01/050-056c026d-1c66-4d42-9fae-a8e96df290c5-1020x1346-1.jpg?resize=600%2C326 600w, https://i1.wp.com/media.boingboing.net/wp-content/uploads/2017/01/050-056c026d-1c66-4d42-9fae-a8e96df290c5-1020x1346-1.jpg?resize=768%2C417 768w, https://i1.wp.com/media.boingboing.net/wp-content/uploads/2017/01/050-056c026d-1c66-4d42-9fae-a8e96df290c5-1020x1346-1.jpg?resize=930%2C505 930w\" sizes=\"(max-width: 600px) 100vw, 600px\" /> <p> https://www.youtube.com/watch?v=VdOr5FpLKR8\n<p>\n<a href=\"http://jakeyapp.co.uk/home\">Jake Yapp</a> is a British comedian who specialises in doing <a href=\"http://jakeyapp.co.uk/audio\">high-speed summaries</a> of pop culture phenomena, like this Radio Four in 4 Minutes sketch, which is a work of genuine genius, especially the radio drama bits.\n\n",
			       "commentRss": "http://boingboing.net/2017/01/08/24-hours-of-the-bbcs-radio-f.html/feed",
			       "post-id": {
			             "xmlns": "com-wordpress:feed-additions:1",
			             "content": "503796"
			            }
			      }
         ]
     }
  }
}


it('renders boing boing correctly', () => {
  mockStorage.mock();
  mockResponse(JSON.stringify(boingBoingresponse));
  const tree = renderer.create(
    <Root />
  );

});
