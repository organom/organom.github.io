---
layout: post
title: filament dry box from an ikea lack table
subtitle: a sealed storage box with dehumidifier, led lighting, and smart control
tags:
- '2026'
- 3d printer
- home automation
- shelly
- ikea
cover-img: /assets/posts/2026-02-21-filament-dry-box/14.jpg
thumbnail-img: /assets/posts/2026-02-21-filament-dry-box/14.jpg
share-img: /assets/posts/2026-02-21-filament-dry-box/14.jpg
---

Silica gel works for small sealed containers, but they don't scale well when you have a growing collection of filament spools. On top of that, the beads saturate every couple of months and need to be baked in the oven/microwave to drive the moisture back out — a tedious cycle that gets old fast. The solution I came up with was to build a dry box using an old [IKEA Lack](https://www.ikea.com/us/en/p/lack-side-table-white-30449908/) as the frame, paired with an electrical dehumidifier to eliminate the maintenance entirely.

## the frame

The Lack table was raised using 3D printed [sturdy leg extenders](https://www.printables.com/model/296787-sturdy-lack-leg-extender), and I made a zero-height version of the same bracket for the opposite side to keep both ends consistent in appearance. Locking caster wheels were added underneath for easy mobility. The whole enclosure was sealed with silicone to keep moisture from creeping in through gaps.

## filament rails

The spools sit on stainless steel tubes acting as rails, held in place by 3D printed [spool holders](https://makerworld.com/en/models/239405-filament-spulen-ablage-regal-tisch). A second layer of rails above may be added in the future for additional capacity.

## dehumidifier and monitoring

Instead of relying on passive silica gel, the box uses a [Homtronics electric dehumidifier](https://www.amazon.es/-/pt/dp/B0FL1T981Y) that runs continuously. A small humidity and temperature sensor on the side wall gives a quick reading of conditions inside.

## the door

The front is closed off with a transparent plastic sheet attached with velcro strips along the edges. This keeps the seal tight while still letting you see inside and quickly access the spools when needed.

## power and lighting

An [IEC 320 C14](https://en.wikipedia.org/wiki/IEC_60320#C13/C14) inlet was cut into the back panel to bring mains power inside the box. LED strip lights were laid across the top in a serpentine pattern, providing visibility when picking spools. A [Shelly 1PM Gen3](https://shelly.pt/shelly-1pm-gen3/) wired with [Wago 221](https://www.wago.com/global/installation-terminal-blocks-and-connectors/compact-splicing-connector/p/221-412) connectors controls the LED lights remotely.

## results

The humidity has been sitting at a steady 36% for several days now. Whether that's the floor for this dehumidifier or the velcro door not sealing well enough is hard to say and will require some research — but either way, it's a significant improvement over silica gel since it requires zero maintenance and I'm able to get all spools in the same place.

{% include image-gallery.html folder="/assets/posts/2026-02-21-filament-dry-box" %}
