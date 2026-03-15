---
layout: post
title: speeding up multi-color prints with the ams speeder
subtitle: shorter filament path, faster color swaps
tags:
- '2025'
- 3d printer
- 3d printing
- bambu lab
cover-img: /assets/posts/2025-10-14-ams-speeder/02.jpg
thumbnail-img: /assets/posts/2025-10-14-ams-speeder/02.jpg
share-img: /assets/posts/2025-10-14-ams-speeder/02.jpg
---

The default [AMS](https://bambulab.com/en/ams) setup on the Bambu Lab P1S routes the PTFE tubes from the AMS, around the back of the printer, and into the filament hub — a long path that adds up on every single filament swap. On multi-color prints with hundreds of color changes, those extra seconds per swap become significant.

The [AMS Speeder](https://makerworld.com/en/models/1443118-ams-speeder-reduce-filament-loading-time) solves this by drastically shortening the PTFE tube path between the AMS and the printer. It requires cutting new, shorter PTFE tubes  and updating the filament load/unload durations in Bambu Studio. No extra hardware needed — just the printed parts and optionally TPU inserts to prevent vibration.

To use the AMS Speeder, the AMS needs to sit on top of the printer. I use the [AMS Riser V2 by maCyo42](https://makerworld.com/en/models/133452-ams-riser-v2) — in my opinion the best riser out there, with LED lightstrip support and plenty of community remixes. And AMS Speeder has a profile for it :)

### complementary mods

A couple of other small prints complete the setup:

- [AMS buffer cover](https://makerworld.com/en/models/455977-p1-x1-series-ams-buffer-cover) — protects the buffer from dust and scratches
- [AMS buffer output guide and dust cover](https://makerworld.com/en/models/1413741-ams-buffer-output-guide-and-dust-cover) — keeps the filament output clean and guides it smoothly into the printer
- [4-in-1 PTFE adapter bracket](https://makerworld.com/en/models/859999-4-in-1-ptfe-adapter-bracket) — holds the PTFE 1-to-4 adapter in place
- [Low profile belt dust cover](https://makerworld.com/en/models/407543-p1-x1-series-low-profile-belt-dust-cover) — keeps dust off the belts
- [Dust cap for second 6-pin port](https://makerworld.com/en/models/12838-dust-cap-for-second-6pin-port-on-ams) — covers the unused 6-pin port on the AMS to keep dust and moisture out

{% include image-gallery.html folder="/assets/posts/2025-10-14-ams-speeder" %}

I installed this on both my P1S printers. Simple mod, noticeable impact on multi-color print times.
