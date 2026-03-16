---
layout: post
title: offline usb eraser with a raspberry pi
subtitle: a standalone shredding station for usb drives and disks
tags:
- '2025'
- raspberry pi
- security
- linux
cover-img: /assets/posts/2025-09-03-offline-usb-eraser/01.jpg
thumbnail-img: /assets/posts/2025-09-03-offline-usb-eraser/01.jpg
share-img: /assets/posts/2025-09-03-offline-usb-eraser/01.jpg
---

Before lending a USB pen or returning an external disk, I want to be sure the data is properly wiped — not just deleted, but overwritten multiple times. Instead of plugging the drive into a computer and running commands manually, I built a dedicated offline eraser that handles everything on its own.

## the build

The core is a [Raspberry Pi 2 Model B](https://www.raspberrypi.com/products/raspberry-pi-2-model-b/) running headless, paired with a [3.5" TFT touchscreen with case](https://www.amazon.es/-/pt/dp/B0BM4FMTG9) that shows real-time wipe progress. It'll wipe any usb that gets connected to it, meaning external disks docking stations, or hubs holding even more usb pen drives will work just fine.

## the software

The software is based on [shreddy2](https://github.com/pentagridsec/shreddy2) by [Pentagrid](https://pentagrid.ch/en/blog/shreddy2-the-raspberry-pi-storage-scrub-station-for-usb-thumb-drives/), a project designed to turn a Raspberry Pi into a storage scrub station. It auto-detects connected USB devices and wipes them using a three-pass overwrite following NIST SP 800-88 guidelines.

I [forked shreddy2](https://github.com/organom/shreddy2/tree/feature/tft_display) to add support for the TFT display and fine tune it better to my usecase.

## why it's useful

I use it all the time. The main appeal is convenience — just plug in the drive and walk away, no need to sit at a computer. But more importantly, it gives me confidence that data is consistently wiped three times from any device, which matters especially for USB pens or disks that have been lent to friends or family. And since the Pi runs offline on an immutable installation, even if a drive is contaminated with malware it has no way to reach my network or permanently compromise the device — a reboot brings it right back to a clean state.

{% include image-gallery.html folder="/assets/posts/2025-09-03-offline-usb-eraser" %}
