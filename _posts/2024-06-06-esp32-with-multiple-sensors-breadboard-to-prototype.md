---
layout: post
title: esp32 with multiple sensors
subtitle: breadboard to prototype
tags:
- '2024'
- esp32
- sensors
cover-img: /assets/posts/2024-06-06-esp32-with-multiple-sensors-breadboard-to-prototype/03.jpg
thumbnail-img: /assets/posts/2024-06-06-esp32-with-multiple-sensors-breadboard-to-prototype/04.jpg
share-img: /assets/posts/2024-06-06-esp32-with-multiple-sensors-breadboard-to-prototype/04.jpg
---

I've been experimenting with an **ESP32 C6** ([Waveshare ESP32-C6-WROOM-1-N8](https://www.waveshare.com/esp32-c6-dev-kit-n8.htm)), testing various off-the-shelf sensors and exploring different integration methods.

## Sensors & Modules Tested
Throughout the process, I evaluated several sensors and modules:
* DHT11 - replaced by the BME280
* BMP180 - also replaced by the BME280
* SEN0211 - switched by direct reading with ADS1115
* DS1302 RTC - switched to internal esp32c6 clock + ntp sync
* ZMPT101B
* ACS712
* [YHDC SCT013 20A / 1V](https://www.amazon.es/dp/B01EFUBE8C) - current transformer sensor
* [ADS1115](https://www.amazon.es/dp/B0C2Q3C781/) - 16-bit ADC for precise analog readings
* [BME280](https://wiki.seeedstudio.com/Grove-Barometer_Sensor-BME280/) - Temperature, humidity, and pressure sensor
* [TECNOIOT 1pc DC 5V G1 / 4 pression sensor](https://www.amazon.es/dp/B098R8VRRY) – fluid pressure measurement

## Challenges & Lessons Learned
Working with the current transformer (CT) sensor was particularly challenging, but the entire project has been an incredibly educational and rewarding experience.

It also gave me the perfect excuse to upgrade my tools:
* Oscilloscope – Rigol DHO804 → compact, solid build quality, four channel inputs, and runs Android! (I’ve already added Wi-Fi to it 😃)
* Multimeter – Uni-T UT890C → Great build quality, useful features, and an excellent price point


Finally getting an oscilloscope has opened up a whole new world of learning. Now, I’m diving into mastering it.

{% include image-gallery.html folder="/assets/posts/2024-06-06-esp32-with-multiple-sensors-breadboard-to-prototype" %}

