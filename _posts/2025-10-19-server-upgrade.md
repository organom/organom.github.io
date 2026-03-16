---
layout: post
title: server upgrade
subtitle: new guts for the home server — ready for vms
tags:
- '2025'
- home lab
- server
cover-img: /assets/posts/2025-10-19-server-upgrade/08.jpg
thumbnail-img: /assets/posts/2025-10-19-server-upgrade/08.jpg
share-img: /assets/posts/2025-10-19-server-upgrade/08.jpg
---

My home [Unraid](https://unraid.net/) server was getting cramped and slow, mainly because of all the containers I had been using and the amount of new workflows I'm pushing to it.
With even more coming up and the need to start using VMs alongside the docker containers, the old hardware just wasn't up to it.
Time for a full platform swap — new motherboard, CPU, RAM, and PSU.

### new hardware

- [Intel Core Ultra 7 265K](https://www.amazon.es/-/pt/dp/B0DFK2MH2D) — 20 cores (8P + 12E), up to 5.5 GHz
- [ASUS Prime Z890M-Plus WiFi](https://www.amazon.es/-/pt/dp/B0DJDFDYSN) — mATX, DDR5, PCIe 5.0, WiFi 7
- [Corsair Vengeance DDR5 64GB](https://www.amazon.es/-/pt/dp/B0BTNW9XFZ) (2x32GB) 6400MHz C32
- [MSI MAG A750GL PCIE5](https://www.amazon.es/-/pt/dp/B0C3M86HCB) — 750W, 80 Plus Gold, fully modular, ATX 3.0
- [Noctua NH-D9L](https://www.amazon.es/-/pt/dp/B00PIPCFX2) — compact dual-tower cooler, perfect for a rack case with limited clearance
- [Arctic MX-6](https://www.amazon.es/-/pt/dp/B09VDL3CW6) thermal paste

### reused hardware

- [Inter-Tech 3U rack case](https://www.amazon.es/-/pt/dp/B00O20I9ES)
- [MZHOU 6-Port PCIe SATA 3.0 Expansion Card](https://www.amazon.es/-/pt/dp/B097RBLM9G) (ASM1166, 6 Gbps)
- 2x [Noctua NF-A6x25 PWM](https://www.amazon.es/-/pt/dp/B00VXTANZ4)
- 2x Arctic P12 fans
- Multiple 4TB sata disks + SSD disks
- Sata cables, power cables

## the build

Despite the documentation on the Inter-Tech 3U rack case claiming mATX support, the ASUS Z890M board didn't actually fit out of the box — there's a maximum size constraint that isn't obvious :(

Rather than swapping the case or returning hardware, I put my 3D printers to work — redesigned most of the front section, printing custom front panels with fan support and a compact [disk rack](https://www.tinkercad.com/things/beFZofmClfG-server-disk-rack) to make everything fit in the tight space.

The Noctua NH-D9L is one of the few good tower coolers that stays under the 3U height limit, silent and perfect, no surprises there.
Cable management in a rack case is always a challenge, but the MSI PSU's flat modular cables helped a lot.

In the end all ended up working well and the Core Ultra 7 265K with 20 cores and 64GB of DDR5 gives plenty of headroom to run multiple VMs and dozens of containers without breaking a sweat.

{% include image-gallery.html folder="/assets/posts/2025-10-19-server-upgrade" %}
