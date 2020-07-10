# Custom Marker Guide for AR.js
---
## Marker Guidelines
* Asymmetrical design
* Square shape
* Contrast between border and marker background color. Default is black border + light colored marker.
* Keep Pattern Ratio over .5 (personal tests worked as low as .3). All values above tracked equally well.

## Creating Custom .patt File
1) Visit https://jeromeetienne.github.io/AR.js/three.js/examples/marker-training/examples/generator.html \
2) Upload custom image. There is no "best" size, although as an empiric rule, the marker has to be recognizable by human eye, without error, looking through the camera

*This is the image I used:*\
![](https://user-images.githubusercontent.com/42782122/86048103-f24a6080-ba1d-11ea-9bab-28c72be1715b.png)

3) If you change the pattern ratio from 0.50, you must add **\<a-scene embedded arjs='patternRatio: 0.7'>** to the scene parameters.
4) When uploaded, download both the marker (.patt file) and the image file.

## Adding To Code
1) Upload the .patt to github. Click raw text link button on github file shown below:

![](https://user-images.githubusercontent.com/42782122/86049476-39d1ec00-ba20-11ea-8bea-5e9f32a68aba.JPG)

Link should look like mine below:

>     https://raw.githubusercontent.com/carolina-ar-vr/Franklin-AR/erevis-branch/pattern-CARVR_MARKER.patt?token=AKGM3KU65YFZRXDNC4BLILK7AN7FS

2) Add custom marker to code and include .patt URL using the following line:
>      <a-marker type='pattern' url='INSERT URL'> </a-marker>

3) The AR Object goes inside of the marker created.

Here was my final code:
>     <a-marker type='pattern' url='https://raw.githubusercontent.com/carolina-ar-vr/Franklin-AR/erevis-branch/pattern-> CARVR_MARKER.patt?token=AKGM3KSNGH3FE7OC5DHVX4S67U5U2'>
>        <a-box position='0 0.5 0' material='opacity: 0.5; side: double;color:red;'>
>          <a-torus-knot radius='0.26' radius-tubular='0.05'
>          animation="property: rotation; to:360 0 0; dur: 5000; easing: linear; loop: true">
>          </a-torus-knot>
>        </a-box>
>      </a-marker>

## Test Marker
* NOTE: For best results, print out the image file downloaded from the website earlier rather than testing on a screen.