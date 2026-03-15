---
layout: post
title: shelly modules on a din rail
subtitle: moving shellys out of power plugs and into the electrical panel
tags:
- '2025'
- 3d printer
- home automation
- shelly
cover-img: /assets/posts/2025-10-25-shelly-din-mount/01.jpg
thumbnail-img: /assets/posts/2025-10-25-shelly-din-mount/01.jpg
share-img: /assets/posts/2025-10-25-shelly-din-mount/01.jpg
---

I got tired of cramming [Shelly Plus 1PM](https://www.shelly.com/products/shelly-1pm-gen3) modules inside power plugs. They barely fit, they're a pain to service, and stuffing them in a sealed enclosure raises heat dissipation concerns — not ideal for something switching mains voltage.

The solution was moving them to the electrical panel using a 3D printed DIN rail mount. The [Shelly DIN mount with Wago 221 (slim)](https://www.printables.com/model/1251483-shelly-din-mount-wago-221-slim) takes up the width of a standard DIN module, uses [Wago 221](https://www.wago.com/global/installation-terminal-blocks-and-connectors/compact-splicing-connector/p/221-412) lever connectors for all wiring, and keeps the cables neatly routed. Installation and future maintenance become straightforward — pop the levers, swap the module, done.

Since this sits inside an electrical panel near mains wiring, printing in ABS or another temperature/flame-resistant filament is strongly recommended.

{% include image-gallery.html folder="/assets/posts/2025-10-25-shelly-din-mount" %}

The only downside is that the Wago adapter slots need to be drilled out to allow for the internal wire route to the shellt, but that's a small price for such a clean, slim design.