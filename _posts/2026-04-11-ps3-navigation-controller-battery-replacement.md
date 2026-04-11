---
layout: post
title: ps3 move navigation controller battery replacement
subtitle: changing dead batteries to complete the sharp shooter setup
tags:
- '2026'
- ps3
- repair
- gaming
cover-img: /assets/posts/2026-04-11-ps3-navigation-controller-battery-replacement/09.jpg
thumbnail-img: /assets/posts/2026-04-11-ps3-navigation-controller-battery-replacement/09.jpg
share-img: /assets/posts/2026-04-11-ps3-navigation-controller-battery-replacement/09.jpg
---

To complete my PS3 Move dream setup, I picked up some cheap parts from a local second hand store [CEX](https://pt.webuy.com/):
* 2x [PlayStation Move Sharp Shooters](https://www.psdevwiki.com/ps3/Move_Sharp_Shooter) (CECHYA-ZRA1E) ([manual](https://www.playstation.com/content/dam/global_pdc/en/corporate/support/manuals/accessories/ps3-accessories/cechya-zra1e-sharpshoote/CECHYA-ZRA1E%20Sharpshoote_IM$en.pdf))
* 2x [Move Navigation Controllers](https://www.psdevwiki.com/ps3/Move_Navigation_Controller) (CECH-ZCS1E)

The Navigation Controllers paired and worked fine while on usb cable, but their batteries were dead — they wouldn't charge or hold any charge.

## the battery replacement

The Navigation Controller uses a **LIS1442** (Sony P/N 4-180-962-01) — a 3.7V 600mAh Li-ion cell. I ordered [these replacements from AliExpress](https://www.aliexpress.us/item/3256808664451023.html) that fit perfectly.

The controller opens with a single small Phillips screw at the bottom. The two halves clip apart, exposing the PCB and battery. Disconnect the old battery, swap in the new one, and reassemble. Assemble carefully — the cables and plastic fittings are not very strong.

{% include image-gallery.html folder="/assets/posts/2026-04-11-ps3-navigation-controller-battery-replacement" %}

Both controllers charged up and worked perfectly afterwards — the Sharp Shooter setup is finally complete.

## watch out for misfits

Before finding the right ones, I tried some replacements on Amazon with the same LIS1442 reference — they don't fit. The cells are slightly too large for the battery compartment, despite having the correct part number.

<img src="/assets/posts/2026-04-11-ps3-navigation-controller-battery-replacement/extra/Some_batteries_dont_fit-1.jpg" width="45%" style="margin-right:2%"> <img src="/assets/posts/2026-04-11-ps3-navigation-controller-battery-replacement/extra/Some_batteries_dont_fit-2.jpg" width="45%">
