#!/bin/bash

for i in ../assets/posts/*; do (echo "$i"; cd "$i" && exiftool -all= -overwrite_original *); done;
