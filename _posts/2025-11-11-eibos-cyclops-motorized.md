---
layout: post
title: motorizing the eibos cyclops
subtitle: adding a drive mechanism and smart control to the filament dryer
tags:
- '2025'
- 3d printer
- home automation
- shelly
cover-img: /assets/posts/2025-11-11-eibos-cyclops-motorized/01.jpg
thumbnail-img: /assets/posts/2025-11-11-eibos-cyclops-motorized/01.jpg
share-img: /assets/posts/2025-11-11-eibos-cyclops-motorized/01.jpg
---

The [Eibos Cyclops](https://eibos3d.com/pages/cyclopes-introduce) is a solid filament dryer, but it has a known issue — the stock design lacks a proper heat shield, and the spools don't rotate during drying. This means filament closest to the heating element gets more heat than the rest, leading to uneven drying and potential damage to the filament.

## motorized drive

The solution is a 3D printed drive mechanism that slowly rotates the spools, ensuring uniform heat exposure across all the filament. I used the [Eibos Cyclops drive mechanism](https://www.printables.com/model/336958-eibos-cyclops-drive-mechanism) design, along with the [fixed version](https://www.printables.com/model/798237-eibos-cyclops-motorized-fixed) that addresses some fitment issues from the original. Both parts were printed in ABS to handle the heat inside the dryer.

## other mods

A couple of other printed upgrades visible in the video — [filament exit plugs](https://makerworld.com/en/models/31168-eibos-cyclopes-filament-dryer-plugs) to seal the unused holes and keep moisture out, and a [top handle](https://makerworld.com/en/models/89665-top-handle-for-eibos-cyclopes-filament-dryer) to make it easier to move the dryer around.

## smart control with shelly

While I had the dryer open, I added a [Shelly 1PM Mini Gen3](https://www.shelly.com/products/shelly-1pm-mini-gen3) inside, wired with [Wago 221](https://www.wago.com/global/installation-terminal-blocks-and-connectors/compact-splicing-connector/p/221-412) connectors. This gives remote on/off control and power monitoring — useful for keeping the dryer running on a schedule or checking consumption without being in the room.

{% include image-gallery.html folder="/assets/posts/2025-11-11-eibos-cyclops-motorized" %}

<video width='100%' poster='/assets/posts/2025-11-11-eibos-cyclops-motorized/02_poster.jpg' controls>
    <source src="/assets/posts/2025-11-11-eibos-cyclops-motorized/02.mp4" type="video/mp4">
</video>
