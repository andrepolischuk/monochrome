#!/usr/bin/env bash

dist=dist/monochrome.safariextension
rm -rf $dist
mkdir -p $dist

cp assets/icon-16.png $dist/Icon-16.png
cp assets/icon-64.png $dist/Icon.png
cp *.css $dist/
cp *.js $dist/
cp *.html $dist/
cp Info.plist $dist/
cp Settings.plist $dist/

echo "Use Safari's Extension Builder to create the signed extension package"
