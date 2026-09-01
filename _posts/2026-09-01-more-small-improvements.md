---
layout: post
title: more small improvements
subtitle: another round of prints, a battery swap, and parts for what comes next
tags:
- '2026'
- 3d printer
- organization
- repair
- raspberry pi
- esp32
cover-img: /assets/posts/2026-09-01-more-small-improvements/03/01.jpg
thumbnail-img: /assets/posts/2026-09-01-more-small-improvements/03/01.jpg
share-img: /assets/posts/2026-09-01-more-small-improvements/03/01.jpg
---

Following on from the [last batch of small fixes](/2026-08-17-weekend-of-small-fixes/), another couple of weeks of little things. Mostly prints that give something a fixed place to live, plus a battery swap and the first hardware for a project that has been waiting on parts.

## a place for the label maker

The [Brother P-touch H100LB](https://store.brother.co.uk/devices/label-printer/p-touch/pt/pth100lb) had been rattling around loose in a drawer. This [gridfinity holder](https://makerworld.com/en/models/1771940-brother-p-touch-h100) gives it a slot of its own, with a cutout that lets you lift it straight out rather than fishing for an edge.

{% include image-gallery.html folder="/assets/posts/2026-09-01-more-small-improvements/01" %}

## tape measure

Same idea for the HOTO tape measure, using this [gridfinity organizer](https://makerworld.com/en/models/1546063-hoto-tape-measure-gridfinity-organizer). A single plate, and the measure drops into it the same way every time.

{% include image-gallery.html folder="/assets/posts/2026-09-01-more-small-improvements/02" %}

## heat-set inserts, finally sorted

The one that was overdue. Heat-set inserts and their tips had been living in bags, which meant digging through every size to find the one I wanted.

Three prints cover the whole set:

* a [1x3x3 heat-set insert tool organizer](https://makerworld.com/en/models/2133694-gridfinity-1x3x3-heat-set-insert-tool-organizer) for the inserts themselves, labelled by size
* a [1x1 heat insert tool holder](https://makerworld.com/en/models/1846087-gridfinity-heat-insert-tool-holder-1x1) for the M2 to M8 tips
* a [heat insert solder tip holder](https://makerworld.com/en/models/2459485-gridfinity-heat-insert-solder-tip-holder) for the spares

Having the sizes printed next to each recess is what makes the difference — picking the right insert is now a glance instead of a trial fit.

{% include image-gallery.html folder="/assets/posts/2026-09-01-more-small-improvements/03" %}

## holding up the kallax

Last time I dealt with the [wobble between the Kallax and its base](/2026-08-17-weekend-of-small-fixes/) using shims. The remaining problem was different: with the unit lifted, the middle of the span had nothing under it and with enough weight the shelf can start to bow.

These [adjustable cabinet and furniture legs](https://makerworld.com/en/models/2204001-adjustable-cabinet-and-furniture-legs) solve it — I printed plate 2. The threaded design is the useful part, since the floor and the underside of the unit are never quite the distance you expect. Screw it out until it takes the weight.

{% include image-gallery.html folder="/assets/posts/2026-09-01-more-small-improvements/04" %}

## charging cables under the desk

The electronics area had the usual problem — a multi-port charger somewhere on the desk and five cables falling behind it whenever they weren't plugged into something.

Two prints fixed it. An [ORICO 5-port charger holder](https://makerworld.com/en/models/1244955-orico-5-port-smart-desktop-charger-holder) takes the charger off the desk entirely and screws to the underside, and a [desk cable holder](https://makerworld.com/en/models/2001262-desk-cable-holder-cable-organizer-with-clamp) parks the tips upright — 2x USB-C, Lightning and 2x micro-USB, each one visible and none of them on the floor.

{% include image-gallery.html folder="/assets/posts/2026-09-01-more-small-improvements/05" %}

## wera bits on the wall

A holder for the [Wera Bit-Check 30 Metal 1](https://www.wera.de/en/tools/bit-check-30-metal-1), remixed from [this HSW holder](https://www.printables.com/model/949634-hsw-holder-for-wera-bit-check-30) with a multiboard back so it fits what I already use. I may post the remix later.

{% include image-gallery.html folder="/assets/posts/2026-09-01-more-small-improvements/06" %}

## the usb copier takes shape

The [offline usb copier](/2026-08-17-weekend-of-small-fixes/) I mentioned last time is past the parts-on-a-desk stage. It's the counterpart to the [offline usb eraser](/2025-09-03-offline-usb-eraser/) — duplicating drives without either one touching a networked machine.

The hardware is one Raspberry Pi Zero, a [Waveshare USB HUB HAT (B)](https://www.waveshare.com/usb-hub-hat-b.htm) for the four ports the job needs, and a [1.3" OLED HAT](https://www.amazon.es/-/en/dp/B077YKP196) ([wiki](https://www.waveshare.com/wiki/1.3inch_OLED_HAT)) for the interface — 128x64, with a joystick and three buttons, which is plenty to pick a source and confirm a destination.

Worth knowing about the HUB HAT (B): it connects to the Zero through pogo pins rather than the GPIO header, which leaves the header free for the display.

Everything is on standoffs over an acrylic base now. That was the point of this stage — get the hardware fixed in place so the software has something stable to run on.

{% include image-gallery.html folder="/assets/posts/2026-09-01-more-small-improvements/07" %}

## a dualshock 3 that holds a charge

Same job as the [Move Navigation Controllers](/2026-04-11-ps3-navigation-controller-battery-replacement/) earlier this year, this time a DualShock 3. Worked fine on the cable, dead the moment it came off it.

Two screws, disconnect the old pack, plug in a [replacement](https://www.amazon.es/-/en/dp/B09PV569MV), reassemble. No surprises on this one — unlike the Navigation Controllers, where the first batch of cells didn't physically fit.

{% include image-gallery.html folder="/assets/posts/2026-09-01-more-small-improvements/08" %}

## new hardware to play with

Some ESP32-C5 boards, which are the interesting ones right now because of the dual-band radio — 2.4GHz *and* 5GHz, which the older ESP32s never did.

The [Waveshare ESP32-C5-Zero](https://www.amazon.es/-/en/dp/B0H2DKSF3Q) ([docs](https://www.waveshare.com/esp32-c5-zero.htm)) is the tiny one, with an IPEX connector for an external antenna. The plan had been to run [Biscuit](https://codehedge.github.io/Biscuit-Wiki/devices/diy.html) on it, but that needs 8MB of flash plus 8MB PSRAM and the C5-Zero only carries 4MB with no PSRAM. So that's out — I'll use it as a node with other firmware instead.

The two [LILYGO T-Dongle C5](https://wiki.lilygo.cc/products/t-dongle-series/t-dongle-c5/) are the opposite story: 16MB flash and 8MB PSRAM in a USB-A housing, with a small LCD and a TF card slot. Comfortably above the bar the C5-Zero missed. Love them and have been playing with them everyday

{% include image-gallery.html folder="/assets/posts/2026-09-01-more-small-improvements/09" %}
