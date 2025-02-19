---
layout: post
title: anycubic delta plus
subtitle: night vision
date: '2018-05-28T06:53:45+01:00'
tags:
- '2018'
- 3d printer
- raspberry pi
tumblr_url: https://rdcgomes.tumblr.com/post/174326430529/some-more-improvements-on-my-anycubic-delta-plus
thumbnail-img: /assets/posts/2018-05-28-anycubic-delta-plus-night-vision/06.jpg
share-img: /assets/posts/2018-05-28-anycubic-delta-plus-night-vision/06.jpg
---

Some more improvements on my Anycubic Delta Plus, this time a I just finished my <b>Night Vision Mode</b>.
So in order to make this happen, I managed to find in aliexpress an IR Led Strip ( [https://www.aliexpress.com/item/SMD3528-IR-InfraRed-850nm-940nm-Flexible-LED-Strips-120-LEDs-per-meter-LED-Tape-with-Black/32483847826.html?spm=a2g0s.9042311.0.0.52b04c4dnWPhwQ](https://www.aliexpress.com/item/SMD3528-IR-InfraRed-850nm-940nm-Flexible-LED-Strips-120-LEDs-per-meter-LED-Tape-with-Black/32483847826.html?spm=a2g0s.9042311.0.0.52b04c4dnWPhwQ) ) from where I ordered 1 (1 meter is more than enough for this build) of the 850nm IP65 (for some protection and nicer finishing) in the time for 16,74€.As for the camera, I’m using one that I both on Pimoroni for 16,50€  ( [https://shop.pimoroni.de/products/raspberry-pi-zero-camera-module](https://shop.pimoroni.de/products/raspberry-pi-zero-camera-module) the one with NoIR filter).

The rest was basically cut the led strips to measure, solder the wires, add some heat shrink tube to cover the solder (metal frame, needs some protection), with some pain slide the wires in the aluminium rails and pass the cables via the holes in the plastic holdings, wire everything together (via the power on/off button) and to the 12v output of the TriGorilla. 
For newer models, since they came already with heat bed and a power supply, you can power everything from there, in this case (old model, no heat bed) I’m quite happy I’m able to connect everything directly to the TriGorilla board (RaspPi Zero W + camera module from the 5v, IR led strips and a fan for the steppers from the 12v) still using the original external power supply that came with the printer.

{% include image-gallery.html folder="/assets/posts/2018-05-28-anycubic-delta-plus-night-vision" %}
