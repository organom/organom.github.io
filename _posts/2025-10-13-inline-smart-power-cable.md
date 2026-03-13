---
layout: post
title: Inline Smart Power Cable
subtitle: Non-intrusive smart power control for 3D printers
tags:
- '2025'
- 3d printer
- home automation
- electronics
cover-img: /assets/posts/2025-10-13-inline-smart-power-cable/04.jpg
thumbnail-img: /assets/posts/2025-10-13-inline-smart-power-cable/04.jpg
share-img: /assets/posts/2025-10-13-inline-smart-power-cable/04.jpg
---

I wanted to remotely turn my Bambu Lab P1S printers on and off via Wi-Fi and track energy usage — without opening or modifying the printers. The solution: a [Shelly 1PM Gen3](https://www.shelly.com/products/shelly-1pm-gen3) wired inline into a standard IEC C14/C13 power cable, housed in a [3D printed enclosure](https://www.thingiverse.com/thing:6876809).

Since it uses the same connector found on PCs, monitors, and most electronics, it can be repurposed for any device.

---

### Parts List

- **[Shelly 1PM Gen3](https://www.shelly.com/products/shelly-1pm-gen3)** — 16A Wi-Fi relay with power metering
- **[3D Printed Enclosure](https://www.thingiverse.com/thing:6876809)** — Fits Shelly 1/1PM Gen2-Gen3, holds 3 WAGO clamps. A [Mini series version](https://makerworld.com/en/models/1017438-housing-for-the-shelly-mini-series) is also available.
- **[WAGO 221 Lever-Nuts](https://www.wago.com/us/lp-221)** — 3x connectors (Live, Neutral, Earth)
- **IEC C14 to C13 extension cable** — 10A 250V rated
- **Heat-set brass inserts + M3 screws**
- **Labels** for identification

---

### The Build

Cut a standard IEC C14-to-C13 cable in half, route both ends through the enclosure, and wire through the Shelly using WAGO connectors. Live goes through the Shelly's **L** and **O** terminals; Neutral and Earth pass straight through via WAGO connectors.

{% include image-gallery.html folder="/assets/posts/2025-10-13-inline-smart-power-cable" %}

Each unit is labeled with the printer name and rated capacity (10A 250V). I built two — one for each P1S. The Shelly connects to Wi-Fi and gives you remote on/off control, real-time energy monitoring, and integration with Home Assistant, MQTT, or the Shelly app.

Completely non-intrusive — no printer modifications, no voided warranty. Swap back to a regular cable anytime.
