---
layout: post
title: snes controller
subtitle: emulator station
date: '2017-06-15T11:23:01+01:00'
tags:
- '2017'
- electronics
- raspberry pi
- hardware
tumblr_url: https://rdcgomes.tumblr.com/post/161846935434/got-my-hands-into-a-raspberry-pi-zero-w-and
thumbnail-img: /assets/posts/2017-06-15-snes-controller-emulator-station/01.jpg
share-img: /assets/posts/2017-06-15-snes-controller-emulator-station/01.jpg
---

Got my hands into a raspberry pi zero w and decided to do a portable arcade machine with an snes controller. 
Why an snes controller? It barely provides enough space for everything, but it does have 4 buttons + 2 triggers and it’s still flat and small enough to carry in the pocket. A nes controller would provide more assembly space, but with less buttons and a square shape.
So basically I used a raspberry pi zero w, a micro sd card, a lithium battery charger, a lithium battery from my small syma x5c quadcopter (3.7V 500mAh - if buying one there are already more powerful ones with the same form/size), an snes controller (got one on amazon), a small power button, a mini hdmi to hdmi converter and some wires.
Then it’s just some patience wiring all together and testing it. Getting a retropie distro into the sd card, adding some roms on it and configuring the snes controller to work via the gpio’s.

I got inspired by this 2 tutorials: 
* [https://www.youtube.com/watch?v=j5dXx0NhLxg](https://www.youtube.com/watch?v=j5dXx0NhLxg)
* [http://blug00.blogspot.de/2016/03/how-i-got-the-gamecon-driver-to-work-on-retropie.html](http://blug00.blogspot.de/2016/03/how-i-got-the-gamecon-driver-to-work-on-retropie.html)

Don’t forget to configure the wifi and enable the ssh before closing the remote for further management/copying roms into the pi.

{% include image-gallery.html folder="/assets/posts/2017-06-15-snes-controller-emulator-station" %}
