// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
  });
  chrome.storage.sync.get(['color'], function(result){
	  console.log(result.color);
  });
  
  

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'developer.chrome.com'},
        }),
		new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'www.reddit.com'},
        }),
		new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'www.old.reddit.com'},
        }),
		new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'www.new.reddit.com'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
});
