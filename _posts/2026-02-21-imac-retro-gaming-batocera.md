---
layout: post
title: imac retro gaming station with batocera
subtitle: giving new life to a dusty imac as a retro gaming console
tags:
- '2026'
- retro gaming
- batocera
- apple
cover-img: /assets/posts/2026-02-21-imac-retro-gaming-batocera/01.jpg
thumbnail-img: /assets/posts/2026-02-21-imac-retro-gaming-batocera/01.jpg
share-img: /assets/posts/2026-02-21-imac-retro-gaming-batocera/01.jpg
---

A good friend has an [iMac 21.5" Late 2013](https://support.apple.com/en-us/111967) that we previously extended its useful lifetime by installing [OpenCore Legacy Patcher](https://dortania.github.io/OpenCore-Legacy-Patcher/), allowing it to run modern macOS versions well past Apple's official support. Some time ago he got an [M4 Mac Mini](https://www.apple.com/mac-mini/) and the iMac stayed laying around gathering dust. It has an awesome 21.5" screen, 1TB SSD, 16GB of RAM (we previously upgraded it), great form factor, integrated speakers, bluetooth, USB ports and a single power cord. It hurt my heart to see such a cool machine not being used, so I convinced him to let me try something with it.

## the conversion

I wiped macOS entirely and installed [Batocera](https://batocera.org/), a lightweight Linux distribution built specifically for retro gaming. It boots straight into a polished emulation frontend — no desktop, no setup, just plug in a controller and play.

I went with a preinstalled image called [All Guns Blazing](https://www.arcadepunks.com/batocera-v42-all-guns-blazing-ultimate-light-gun-build/) by the [Light Gun Lunatics](https://www.arcadepunks.com/batocera-v42-light-guns-lite-light-gun-lunatics-community-build/) community, since we want to explore light guns later on. Added some more ROMs and paired an old PS3 knock-off controller I had laying around.

The only thing that didn't work out of the box was Wi-Fi. Rather than spending time compiling and adding drivers, I grabbed a [TP-Link Archer T2U AC600](https://www.amazon.es/-/pt/dp/B00K11UIV4) USB adapter for about 10 bucks — plug and play under Batocera.

## why it works so well

The iMac is honestly a perfect retro gaming station. The all-in-one form factor means there's just a single power cable — no monitor, no external speakers, no mess. The 21.5" IPS display looks great for retro games, the built-in speakers are more than enough, and bluetooth handles wireless controllers without any dongles. With 16GB of RAM and a 1TB SSD, there's  plenty ofroom for a massive game library with fast load times.

{% include image-gallery.html folder="/assets/posts/2026-02-21-imac-retro-gaming-batocera" %}

<video width='100%' poster='/assets/posts/2026-02-21-imac-retro-gaming-batocera/03_poster.jpg' controls>
    <source src="/assets/posts/2026-02-21-imac-retro-gaming-batocera/03.mp4" type="video/mp4">
</video>
