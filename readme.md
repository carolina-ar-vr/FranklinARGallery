# UNC Franklin AR Everywhere

- [finished application](https://artonfranklin.com/)
- [release blog post](https://artseverywhere.unc.edu/art-walk-on-franklin/)
- [app info website](https://artonfranklin.netlify.app/)

This application is a collaboration between [UNC Arts Everywhere](https://artseverywhere.unc.edu/) and [Carolina AR/VR](https://carvr.org/) which aims to bring web AR experiences to participating Franklin Street businesses. To do this we make use of the open source libraries [AR.js](https://ar-js-org.github.io/AR.js-Docs/) and [A-Frame](https://aframe.io/)

This is the production repo used for hosting the web application. Changes made to the master branch will show up on the live website, exercise caution when committing.

## Installation
To set up the development environment, please see instructions from the testing repository here:
[https://github.com/carolina-ar-vr/Franklin-AR](https://github.com/carolina-ar-vr/Franklin-AR)

If you've done this before with the other demo app then you should only need to clone this repo, create a new self-signed certificate for localhost, and run relevant npm/node commands for setup.

## Contributing

If you need to create a new marker, see Evan Revis' instructions here:
[https://github.com/carolina-ar-vr/FranklinARGallery/blob/master/docs/createMarker.md](https://github.com/carolina-ar-vr/FranklinARGallery/blob/master/docs/createMarker.md)

Currently there are only two places where any AR.js development should be happening, and they are both inside of ```index.html```

There are two Javascript strings which are used to store two states the page can be in, marker mode and location mode. There is a main div in the HTML body whose contents gets replaced with one of these strings on page load and subsequently as the toggle button is pressed. 

~~At the moment there is duplicate code so if you need to make changes to the marker mode, you'll need to edit the default HTML as well as updating the Javascript string titled ```markerCode``` to match it so that your changes carry over as modes are toggled.~~ Update: I set up an initialization function and removed the duplicate HTML. Updates should only need to be made one time now regardless of which mode it is.

If you need to make updates to the marker tracking mode you will need to edit the Javascript string titled ```markerCode```

If you need to make updates to the location based mode you will need to edit the Javascript string titled ```locationCode```

Please make sure you understand how the Javascript is toggling these page contents before adding any new HTML.

Also, please make sure you're keeping any branches you make up to date with master; ending up multiple commits behind master is an easy way to create merge conflicts. 

Please upload any assets such as .patt, .gltf, or image files into the assets folder.

There is also a very basic web page set up in ```about.html``` which needs to be polished and filled in with details about the project and the team
