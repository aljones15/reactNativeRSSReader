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
   "created": "2017-01-09T13:50:05Z",
   "lang": "en-US",
   "diagnostics": {
      "publiclyCallable": "true",
      "url": {
          "execution-start-time": "1",
          "execution-stop-time": "199",
          "execution-time": "198",
          "content": "http://rss.slashdot.org/Slashdot/slashdotMain"
         },
      "user-time": "201",
      "service-time": "198",
      "build-version": "2.0.84"
     },
   "results": {
      "item": [
          {
	       "about": "https://it.slashdot.org/story/17/01/09/056208/ask-slashdot-whats-the-best-job-for-this-recent-cs-grad?utm_source=rss1.0mainlinkanon&utm_medium=feed",
	       "title": "Ask Slashdot: What's The Best Job For This Recent CS Grad?",
	       "link": "https://it.slashdot.org/story/17/01/09/056208/ask-slashdot-whats-the-best-job-for-this-recent-cs-grad?utm_source=rss1.0mainlinkanon&utm_medium=feed",
	       "description": "One year away from graduating with a CS degree, an anonymous reader wants some insights from the Slashdot community:\n[My] curriculum is rather broad, ranging from systems programming on a Raspberry Pi to HTML, CSS, JavaScript, C, Java, JPA, Python, Go, Node.js, software design patterns, basic network stuff (mostly Cisco) and various database technologies... I'm working already part-time as a system administrator for two small companies, but don't want to stay there forever because it's basically a dead-end position. Enjoying the job, though... With these skills under my belt, what career path should I pursue?\n \nThere's different positions as well as different fields, and the submission explains simply that\n\"I'm looking for satisfying and rewarding work,\" adding that \"pay is not that important.\" So leave your suggestions in the comments. What's the best job for this recent CS grad?<p><div class=\"share_submission\" style=\"position:relative;\">\n<a class=\"slashpop\" href=\"http://twitter.com/home?status=Ask+Slashdot%3A+What's+The+Best+Job+For+This+Recent+CS+Grad%3F%3A+http%3A%2F%2Fbit.ly%2F2iZkVF2\"><img src=\"https://a.fsdn.com/sd/twitter_icon_large.png\"></a>\n<a class=\"slashpop\" href=\"http://www.facebook.com/sharer.php?u=https%3A%2F%2Fit.slashdot.org%2Fstory%2F17%2F01%2F09%2F056208%2Fask-slashdot-whats-the-best-job-for-this-recent-cs-grad%3Futm_source%3Dslashdot%26utm_medium%3Dfacebook\"><img src=\"https://a.fsdn.com/sd/facebook_icon_large.png\"></a>\n\n<a class=\"nobg\" href=\"http://plus.google.com/share?url=https://it.slashdot.org/story/17/01/09/056208/ask-slashdot-whats-the-best-job-for-this-recent-cs-grad?utm_source=slashdot&amp;utm_medium=googleplus\" onclick=\"javascript:window.open(this.href,', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;\"><img src=\"http://www.gstatic.com/images/icons/gplus-16.png\" alt=\"Share on Google+\"/></a>                                                                                                                                                                              \n\n\n\n</div></p><p><a href=\"https://it.slashdot.org/story/17/01/09/056208/ask-slashdot-whats-the-best-job-for-this-recent-cs-grad?utm_source=rss1.0moreanon&amp;utm_medium=feed\">Read more of this story</a> at Slashdot.</p><iframe src=\"https://slashdot.org/slashdot-it.pl?op=discuss&amp;id=10093907&amp;smallembed=1\" style=\"height: 300px; width: 100%; border: none;\"></iframe>",
	       "creator": "EditorDavid",
	       "date": "2017-01-09T12:34:00+00:00",
	       "subject": "education",
	       "department": "degree-in-debugging",
	       "section": "it",
	       "comments": "59",
	       "hit_parade": "59,57,26,19,4,3,2"
	      },
          {
	       "about": "https://tech.slashdot.org/story/17/01/09/0521217/browser-autofill-profiles-can-be-abused-for-phishing-attacks?utm_source=rss1.0mainlinkanon&utm_medium=feed",
	       "title": "Browser Autofill Profiles Can Be Abused For Phishing Attacks",
	       "link": "https://tech.slashdot.org/story/17/01/09/0521217/browser-autofill-profiles-can-be-abused-for-phishing-attacks?utm_source=rss1.0mainlinkanon&utm_medium=feed",
	       "description": "An anonymous reader quotes Bleeping Computer: Browser autofill profiles are a reliable phishing vector that allow attackers to collect information from users via hidden form fields, which the browser automatically fills with preset personal information and which the user unknowingly sends to the attacker when he submits a form... Finnish web developer Viljami Kuosmanen has published a demo on GitHub... A user looking at this page will only see a Name and Email input field, along with a Submit button. Unless the user looks at the page's source code, he won't know that the form also contains six more fields named Phone, Organization, Address, Postal Code, City, and Country. If the user has an autofill profile set up in his browser, if he decides to autofill the two visible fields, the six hidden fields will be filled in as well, since they're part of the same form, even if invisible to the user's eye.\n \nBrowsers that support autofill profiles are Google Chrome, Safari, and Opera. Browsers like Edge, Vivaldi, and Firefox don't support this feature, but Mozilla is currently working on a similar feature.<p><div class=\"share_submission\" style=\"position:relative;\">\n<a class=\"slashpop\" href=\"http://twitter.com/home?status=Browser+Autofill+Profiles+Can+Be+Abused+For+Phishing+Attacks%3A+http%3A%2F%2Fbit.ly%2F2iYAGMw\"><img src=\"https://a.fsdn.com/sd/twitter_icon_large.png\"></a>\n<a class=\"slashpop\" href=\"http://www.facebook.com/sharer.php?u=https%3A%2F%2Ftech.slashdot.org%2Fstory%2F17%2F01%2F09%2F0521217%2Fbrowser-autofill-profiles-can-be-abused-for-phishing-attacks%3Futm_source%3Dslashdot%26utm_medium%3Dfacebook\"><img src=\"https://a.fsdn.com/sd/facebook_icon_large.png\"></a>\n\n<a class=\"nobg\" href=\"http://plus.google.com/share?url=https://tech.slashdot.org/story/17/01/09/0521217/browser-autofill-profiles-can-be-abused-for-phishing-attacks?utm_source=slashdot&amp;utm_medium=googleplus\" onclick=\"javascript:window.open(this.href,', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;\"><img src=\"http://www.gstatic.com/images/icons/gplus-16.png\" alt=\"Share on Google+\"/></a>                                                                                                                                                                              \n\n\n\n</div></p><p><a href=\"https://tech.slashdot.org/story/17/01/09/0521217/browser-autofill-profiles-can-be-abused-for-phishing-attacks?utm_source=rss1.0moreanon&amp;utm_medium=feed\">Read more of this story</a> at Slashdot.</p><iframe src=\"https://slashdot.org/slashdot-it.pl?op=discuss&amp;id=10093983&amp;smallembed=1\" style=\"height: 300px; width: 100%; border: none;\"></iframe>",
	       "creator": "EditorDavid",
	       "date": "2017-01-09T08:34:00+00:00",
	       "subject": "mozilla",
	       "department": "I-know-what-you-typed-last-summer",
	       "section": "technology",
	       "comments": "55",
	       "hit_parade": "55,54,37,30,6,3,2"
	      },
	      {
	           "about": "https://tech.slashdot.org/story/17/01/09/0438228/google-abandons-their-google-hangouts-api?utm_source=rss1.0mainlinkanon&utm_medium=feed",
	           "title": "Google Abandons Their Google Hangouts API",
	           "link": "https://tech.slashdot.org/story/17/01/09/0438228/google-abandons-their-google-hangouts-api?utm_source=rss1.0mainlinkanon&utm_medium=feed",
	           "description": "\"Once again we're seeing the hazards of developing using a third party service API,\" writes Slashdot reader BarbaraHudson, reporting that Google \"will be discontinuing support for the Google Hangouts API going forward... Google Hangouts is now so insignificant that the cancellation didn't even rate an official blog post. As reported by TechCrunch, \"just an updated FAQ and email notification to developers active on the API, forwarded to us by one of these devs.\"\n\nTechCrunch writes:\nAs Google pushes Duo as its consumer video chat app and relegates Hangouts to the enterprise, it's dropping the flexibility to build these kinds of experiences. The email explains... \"We understand this will impact developers who have invested in our platform. We have carefully considered this change and believe that it allows us to give our users a more targeted Hangouts desktop video experience going forward.\" \nTechCrunch calls the move \"a casualty of Google's fragmented messaging app strategy and the neglect of Hangouts itself.\" While some apps will continue working -- for example, integration with Slack -- their API's FAQ now ends with a reminder that \"Users of apps will see a notice in the call letting them know that the app they're using will no longer work after April 25th.\"<p><div class=\"share_submission\" style=\"position:relative;\">\n<a class=\"slashpop\" href=\"http://twitter.com/home?status=Google+Abandons+Their+Google+Hangouts+API%3A+http%3A%2F%2Fbit.ly%2F2jjkkKR\"><img src=\"https://a.fsdn.com/sd/twitter_icon_large.png\"></a>\n<a class=\"slashpop\" href=\"http://www.facebook.com/sharer.php?u=https%3A%2F%2Ftech.slashdot.org%2Fstory%2F17%2F01%2F09%2F0438228%2Fgoogle-abandons-their-google-hangouts-api%3Futm_source%3Dslashdot%26utm_medium%3Dfacebook\"><img src=\"https://a.fsdn.com/sd/facebook_icon_large.png\"></a>\n\n<a class=\"nobg\" href=\"http://plus.google.com/share?url=https://tech.slashdot.org/story/17/01/09/0438228/google-abandons-their-google-hangouts-api?utm_source=slashdot&amp;utm_medium=googleplus\" onclick=\"javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;\"><img src=\"http://www.gstatic.com/images/icons/gplus-16.png\" alt=\"Share on Google+\"/></a>                                                                                                                                                                              \n\n\n\n</div></p><p><a href=\"https://tech.slashdot.org/story/17/01/09/0438228/google-abandons-their-google-hangouts-api?utm_source=rss1.0moreanon&amp;utm_medium=feed\">Read more of this story</a> at Slashdot.</p><iframe src=\"https://slashdot.org/slashdot-it.pl?op=discuss&amp;id=10093821&amp;smallembed=1\" style=\"height: 300px; width: 100%; border: none;\"></iframe>",
	           "creator": "EditorDavid",
	           "date": "2017-01-09T04:40:00+00:00",
	           "subject": "google",
	           "department": "bye-bye-API",
	           "section": "technology",
	           "comments": "77",
	           "hit_parade": "77,75,47,38,15,10,7"
	          },
	          {
		       "about": "https://it.slashdot.org/story/17/01/09/0222244/whats-happening-as-the-university-of-california-tries-to-outsource-it-jobs-to-india?utm_source=rss1.0mainlinkanon&utm_medium=feed",
		       "title": "What's Happening As The University of California Tries To Outsource IT Jobs To India",
		       "link": "https://it.slashdot.org/story/17/01/09/0222244/whats-happening-as-the-university-of-california-tries-to-outsource-it-jobs-to-india?utm_source=rss1.0mainlinkanon&utm_medium=feed",
		       "description": "Long-time Slashdot reader Nova Express shares an epic column by Pulitzer Prize-winning journalist Michael Hiltzik. It details what's happening now as the University of California tries to outsources dozens of IT jobs -- about 20% of their IT workforce -- by February 28th. Some of the highlights:\n\n The CEO of UCSF's Medical Center says he expects their security to be at least as good as it is now, but acknowledges \"there are no guarantees.\"Nine workers have filed a complaint with the state's Department of Fair Employment and Housing arguing they're facing discrimination.California Senator Feinstein is already complaining that the university is tapping $8.5 billion in federal funding \"to replace Californian IT workers with foreign workers or labor performed abroad.\"Representative Zoe Lofgren (from a district in Silicon Valley) is arguing that the university \"is training software engineers at the same time they're outsourcing their own software engineers. What message are they sending their own students?\"57-year-old Sys-admin Kurt Ho says his replacement spent just two days with him, then \"told me he would go back to India and train his team, and would be sending me emails with questions.\"The university's actions will ultimately lower their annual $5.83 billion budget by just 0.1%.<p><div class=\"share_submission\" style=\"position:relative;\">\n<a class=\"slashpop\" href=\"http://twitter.com/home?status=What's+Happening+As+The+University+of+California+Tries+To+Outsource+IT+Jobs+To+India%3A+http%3A%2F%2Fbit.ly%2F2iXZjsy\"><img src=\"https://a.fsdn.com/sd/twitter_icon_large.png\"></a>\n<a class=\"slashpop\" href=\"http://www.facebook.com/sharer.php?u=https%3A%2F%2Fit.slashdot.org%2Fstory%2F17%2F01%2F09%2F0222244%2Fwhats-happening-as-the-university-of-california-tries-to-outsource-it-jobs-to-india%3Futm_source%3Dslashdot%26utm_medium%3Dfacebook\"><img src=\"https://a.fsdn.com/sd/facebook_icon_large.png\"></a>\n\n<a class=\"nobg\" href=\"http://plus.google.com/share?url=https://it.slashdot.org/story/17/01/09/0222244/whats-happening-as-the-university-of-california-tries-to-outsource-it-jobs-to-india?utm_source=slashdot&amp;utm_medium=googleplus\" onclick=\"javascript:window.open(this.href,', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;\"><img src=\"http://www.gstatic.com/images/icons/gplus-16.png\" alt=\"Share on Google+\"/></a>                                                                                                                                                                              \n\n\n\n</div></p><p><a href=\"https://it.slashdot.org/story/17/01/09/0222244/whats-happening-as-the-university-of-california-tries-to-outsource-it-jobs-to-india?utm_source=rss1.0moreanon&amp;utm_medium=feed\">Read more of this story</a> at Slashdot.</p><iframe src=\"https://slashdot.org/slashdot-it.pl?op=discuss&amp;id=10093579&amp;smallembed=1\" style=\"height: 300px; width: 100%; border: none;\"></iframe>",
		       "creator": "EditorDavid",
		       "date": "2017-01-09T02:34:00+00:00",
		       "subject": "education",
		       "department": "school-of-hard-knocks",
		       "section": "it",
		       "comments": "246",
		       "hit_parade": "246,231,149,111,43,27,10"
		      },
		      {
		           "about": "https://linux.slashdot.org/story/17/01/07/0155208/interviews-ask-red-hat-ceo-jim-whitehurst-a-question?utm_source=rss1.0mainlinkanon&utm_medium=feed",
		           "title": "Interviews: Ask Red Hat CEO Jim Whitehurst A Question",
		           "link": "https://linux.slashdot.org/story/17/01/07/0155208/interviews-ask-red-hat-ceo-jim-whitehurst-a-question?utm_source=rss1.0mainlinkanon&utm_medium=feed",
		           "description": "Jim Whitehurst joined Red Hat in 2008, as its valuation rose past $10 billion and the company entered the S&amp;P 500. He believes that leaders should engage people, and then provide context for self-organizing, and in 2015 even published The Open Organization: Igniting Passion and Performance (donating all proceeds to the Electronic Frontier Foundation). The book describes a post-bureaucratic world of community-centric companies led with transparency and collaboration, with chapters on igniting passion, building engagement, and choosing meritocracy over democracy.\n Jim's argued that Red Hat exemplifies \"digital disruption,\" and recently predicted a world of open source infrastructure running proprietary business software. Fortune has already called Red Hat \"one of the geekiest firms in the business,\" and their open source cloud computing platform OpenStack now competes directly with Amazon Web Services. Red Hat also sponsors the Fedora Project and works with the One Laptop per Child initiative.\n \nSo leave your best questions in the comments. (Ask as many questions as you'd like, but please, one per comment.) We'll pick out the very best questions, and then forward them on for answers from Red Hat CEO Jim Whitehurst.<p><div class=\"share_submission\" style=\"position:relative;\">\n<a class=\"slashpop\" href=\"http://twitter.com/home?status=Interviews%3A+Ask+Red+Hat+CEO+Jim+Whitehurst+A+Question%3A+http%3A%2F%2Fbit.ly%2F2iXJUbX\"><img src=\"https://a.fsdn.com/sd/twitter_icon_large.png\"></a>\n<a class=\"slashpop\" href=\"http://www.facebook.com/sharer.php?u=https%3A%2F%2Flinux.slashdot.org%2Fstory%2F17%2F01%2F07%2F0155208%2Finterviews-ask-red-hat-ceo-jim-whitehurst-a-question%3Futm_source%3Dslashdot%26utm_medium%3Dfacebook\"><img src=\"https://a.fsdn.com/sd/facebook_icon_large.png\"></a>\n\n<a class=\"nobg\" href=\"http://plus.google.com/share?url=https://linux.slashdot.org/story/17/01/07/0155208/interviews-ask-red-hat-ceo-jim-whitehurst-a-question?utm_source=slashdot&amp;utm_medium=googleplus\" onclick=\"javascript:window.open(this.href,', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;\"><img src=\"http://www.gstatic.com/images/icons/gplus-16.png\" alt=\"Share on Google+\"/></a>                                                                                                                                                                              \n\n\n\n</div></p><p><a href=\"https://linux.slashdot.org/story/17/01/07/0155208/interviews-ask-red-hat-ceo-jim-whitehurst-a-question?utm_source=rss1.0moreanon&amp;utm_medium=feed\">Read more of this story</a> at Slashdot.</p><iframe src=\"https://slashdot.org/slashdot-it.pl?op=discuss&amp;id=10088851&amp;smallembed=1\" style=\"height: 300px; width: 100%; border: none;\"></iframe>",
		           "creator": "EditorDavid",
		           "date": "2017-01-09T00:34:00+00:00",
		           "subject": "redhat",
		           "department": "leveraging-Linux",
		           "section": "linux",
		           "comments": "94",
		           "hit_parade": "94,86,41,30,10,6,1"
		          }
         ]
     }
  }
}


it('renders boing boing correctly', () => {
  mockStorage.mock();
  mockResponse(JSON.stringify(response));
  const tree = renderer.create(
    <Root />
  );

});
