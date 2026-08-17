---
layout: post
title: a weekend of small fixes
subtitle: clearing the pile of projects that never justified their own weekend
tags:
- '2026'
- 3d printer
- repair
- fix
- organization
cover-img: /assets/posts/2026-08-17-weekend-of-small-fixes/04/01.jpg
thumbnail-img: /assets/posts/2026-08-17-weekend-of-small-fixes/04/01.jpg
share-img: /assets/posts/2026-08-17-weekend-of-small-fixes/04/01.jpg
---

Some projects are too small to ever be the reason you sit down at the bench. They just accumulate — a thing that stopped working, an annoyance you keep working around. This weekend I finally cleared a pile off them.

## the water dispenser that wouldn't charge

A USB rechargeable water bottle pump that had stopped taking a charge. Opening it up, the cause was mechanical rather than electrical — the USB port had come away from the board. Enough plug-and-unplug cycles and the pads give up before anything else does. Resoldered it back down, and the charge LED came on again.

{% include image-gallery.html folder="/assets/posts/2026-08-17-weekend-of-small-fixes/01" %}

## the bath toy

A kid's bath toy that had gone silent. Two halves, a small motor, a couple of resistors and a battery contact — and the usual culprit for anything that lives in water, corrosion on the contacts. Cleaned them up, resoldered a few of the connections to be sure the contact was solid, and that was it.

{% include image-gallery.html folder="/assets/posts/2026-08-17-weekend-of-small-fixes/02" %}

## labelling sd cards

The one that had bothered me the longest. A drawer of SD and microSD cards, none of them marked, every one a mystery until plugged in. Two prints fixed it: a [labelled SD/microSD card holder](https://makerworld.com/en/models/1186856) that takes a printed tag per card, and a [matching stand](https://makerworld.com/en/models/2351353) to keep them upright and readable.

Now `octopi`, `raspian`, `retropi` and a few honest `empty` labels are visible without touching a reader.

{% include image-gallery.html folder="/assets/posts/2026-08-17-weekend-of-small-fixes/03" %}

## reusing bambu lab rfid tags

Empty Bambu spools get thrown away with a perfectly good RFID tag inside. Cut it out, glue it into an [RFID clip for Bambu spools](https://makerworld.com/en/models/434740-rfid-clips-for-bambu-spools), and the AMS recognises third-party filament properly. I paired those with a [wall holder](https://makerworld.com/en/models/2489522) on the Multiboard, one hook per material — ABS, PETG, PLA — each labelled with the exact colour and code.

Worth knowing: only one tag per spool, placed on the side facing the AMS sensor. The sensors sit in the pillars between slots 1–2 and 3–4.

{% include image-gallery.html folder="/assets/posts/2026-08-17-weekend-of-small-fixes/04" %}

## kallax wobble

There's wobble between the Kallax and the leg/base accessory it sits on, and I wanted that gone. These [Kallax leg support shims](https://makerworld.com/en/models/2236822) take up the play. I printed a full batch in one go, since each support needs 4 of them.

With the slack gone from the base, the unit sits solid and the rocking stopped.

{% include image-gallery.html folder="/assets/posts/2026-08-17-weekend-of-small-fixes/05" %}

## a lab coat

Not a repair, but the fix to a recurring problem: I kept ruining clothes with solder, flux, glue and filament. A cheap lab coat solves that completely, and it was too plain to leave alone — so it got patches. Rockets, astronauts, UFOs, and a [Hackaday Prize 2014](https://hackaday.io/prize) patch that I got from MuMaLab that had been in a drawer for a decade waiting for something to be sewn onto.

{% include image-gallery.html folder="/assets/posts/2026-08-17-weekend-of-small-fixes/06" %}

---

## what's next

Two projects got their first steps this weekend,:

* **an offline pc for important files** — an air-gapped machine that holds the documents that should never sit on anything networked (still encrypted and removable on their)
* **an offline usb copier** — the natural counterpart to the [offline usb eraser](/2025-09-03-offline-usb-eraser/). Duplicate drives without either one touching a computer that's online.

More on both once they're past the parts-on-a-desk stage.
