---
layout: post
title: lts respooler
tags:
- '2025'
- 3d printer
cover-img: /assets/posts/2025-01-18-lts-respooler/01.jpg
thumbnail-img: /assets/posts/2025-01-18-lts-respooler/11.jpg
share-img: /assets/posts/2025-01-18-lts-respooler/11.jpg
---

## Building a DIY Spool Winder with Repurposed Electronics

I needed a spool winder to transfer filament between spools, so I searched for existing solutions and found the [LTS Respooler](https://makerworld.com/en/models/448008#profileId-354782). Inspired by the V-Spooler design, it offers a more compact form factor while having useful functionality.

My goal was to have a system that could run unattended while evenly distributing filament onto the new spool, and this project checked all the boxes.

While the LTS Respooler is well-designed, well-built, and well-documented, I ran into a major challenge: the required electronics were always out of stock.

Rather than waiting, I decided to adapt the project using components I already had. This meant redesigning the electronics enclosure to fit my available parts and rewriting the Arduino code accordingly.

## Components Used
To make it work, I repurposed the following electronics:
    * Arduino Pro Mini Clone
    * Nema 17HS5413 1.8' 1.3A Stepper Motor
    * DRV8825 Stepper Driver + capacitor
    * LEDs + resistors
    * Button
    * EndStop
    * 4mm sphere
    * MP1584EN Mini DC-DC Step Down (https://www.amazon.es/-/pt/dp/B0CGVMRQXB), since the LM2596S I had lying around were quite large and would not fit
    * connectors and wires

## Challenges & Lessons Learned

One of the biggest hurdles was understanding how to properly connect the stepper driver and control the motor using the Arduino. These resources were particularly helpful:
* connecting the Arduino Pro Mini to the computer: [https://www.instructables.com/Using-Arduino-Pro-Mini/](https://www.instructables.com/Using-Arduino-Pro-Mini/) 
* understanding the stepper driver: [https://www.youtube.com/watch?v=J-8_txDnS3w](https://www.youtube.com/watch?v=J-8_txDnS3w)
* coding using `AccelStepper` library: [https://www.diyengineers.com/2024/11/11/drv8825-stepper-motor-driver-complete-guide/](https://www.diyengineers.com/2024/11/11/drv8825-stepper-motor-driver-complete-guide/)

The `AccelStepper` library simplified motor control and made fine-tuning much easier. Despite the learning curve, seeing everything come together in the end was incredibly rewarding.

## The Frustrating Part…
Unfortunately, due to licensing restrictions on the original project, I can’t publicly share my modified version. It’s disappointing not to be able to contribute back to the community, but those are the rules. 😞


{% include image-gallery.html folder="/assets/posts/2025-01-18-lts-respooler" %}
