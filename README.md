# Chess Website

## Introduction

The aim of this project is to create a chrome extension that automatically saves your work when you're in the middle of writing a comment on reddit, in case you accidentally close the window or otherwise lose your progress on writing that comment. When the user returns to write that comment, they can reload what they've already written and continue working. This works in the background and does not require user input until they come back to the comment, at which point they will be able to reload their work if they have a comment unfinished.

## User Interface

![Comment interface](https://i.imgur.com/Qkp5C7X.png)

The user interface is quite simple. The only new thing here on top of the old Reddit function is the Reload button. If you've previously written an unfinished comment and exited out of the window without posting, the extension will save your work. The next time you go to write a comment on the same post, a "Reload" button will appear which will reload your unfinished comment, allowing you to finish writing.


## Schedule

* Week 1: Figure out how to write a chrome extension and write it up, shouldn't take long.