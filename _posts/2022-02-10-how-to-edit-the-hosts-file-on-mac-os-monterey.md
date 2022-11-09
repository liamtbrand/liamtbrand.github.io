---
layout: post
title:  "How to edit the hosts file on MacOS Monterey"
date:   2022-02-10 02:01:53 -0800
categories: blog
---

Note: Before making changes to your system I strongly encourage you to make a backup using Time Machine.

This short post serves as a reminder for how and where to edit the hosts file on MacOS Monterey. MacOS Monterey features System Integrity Protection - SIP which prevents modifying system files. This is generally a good idea and helps to protect the user against themselves. To bypass SIP you'll need to reboot the system into recovery mode and update the hosts file from there. Before booting to recovery, start by making a backup of your hosts file somewhere, eg: `cp /etc/hosts ~/hosts.backup`.

1. Reboot into recovery mode. Hold Command + R while booting.
2. Open terminal.

The path to the system hosts file is `/Volumes/Macintosh\ HD/etc/hosts`.

*WARNING* Do not modify the hosts file at `/etc/hosts`.

You may wish to copy a hosts file from your user data. In this case, open disk utility and mount `Macintosh HD - Data`. Once mounted you can return to terminal and copy the hosts file over eg: `cat /Volumes/Macintosh\ HD\ -\ Data/Users/liamtbrand/hosts.new > /Volumes/Macintosh\ HD/etc/hosts`

Once you've updated the hosts file, reboot your mac and verify the change has been correctly applied.
