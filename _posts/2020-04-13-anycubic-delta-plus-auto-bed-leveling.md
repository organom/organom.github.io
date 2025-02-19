---
layout: post
title: anycubic delta plus
subtitle: auto bed leveling
date: '2020-04-13T12:55:30+01:00'
tags:
- '2020'
- 3d printer
tumblr_url: https://rdcgomes.tumblr.com/post/615278529469399040/this-weekend-i-decided-to-finally-install-my
thumbnail-img: /assets/posts/2020-04-13-anycubic-delta-plus-auto-bed-leveling/01.jpg
share-img: /assets/posts/2020-04-13-anycubic-delta-plus-auto-bed-leveling/01.jpg
---

This weekend I decided to finally install my Anycubic auto bed leveling update that i bought some months ago. In the way I also updated to the latest Marlin 1.1.9.1 and finally got that first layer working nicely. I mainly followed the great video from [https://www.youtube.com/watch?v=5G8GdNywsUQ&amp;t=237s](https://www.youtube.com/watch?v=5G8GdNywsUQ&amp;t=237s)
Along the way, I had a weird issue that sometimes the probe would fail and printer would start to go up until it hits the endstops. I later realized that this was caused by the cabling that in some head positions was shorting the cables.
Another issue I had, was that the autoleveled seemed to be setting the head way to close to the bottom, making it not able to extrude the first layer. Followed the [https://www.youtube.com/watch?v=GF6ZGKOuzhY&amp;t=279s](https://www.youtube.com/watch?v=GF6ZGKOuzhY&amp;t=279s) and checked for the real Delta_Height, then added it to the firmware.
Added a fork of the marlin software with my configuration here [https://github.com/organom/Marlin-1.1.x](https://github.com/organom/Marlin-1.1.x) :)

{% include image-gallery.html folder="/assets/posts/2020-04-13-anycubic-delta-plus-auto-bed-leveling" %}
