# Lit-html examples
Repository with examples and design patterns for building web components using the LitElement base class, and rendering templates using lit-html.

# Who is this for?
This repository is intended as a starting point for all people who want to write web components with LitElement. Some special sections are added for people migrating from PolymerElement.

# How to use the examples
You can view the code of the examples by browsing through the src folder on github. The examples are divided into categories of complexity, and are ordered. Concepts are introduced one by one, so that you only see one new concept per example.

All the examples are working code, so you can clone the repository and run `npm install` + `npm start`.

# Frequently asked questions
People starting with LitElement, especially those coming from PolymerElement, often have these questions:
* How to set default properties:
  * https://github.com/LarsDenBakker/lit-html-examples/blob/master/src/1-basic/04-default-property.js
* How to handle conditional logic (dom-if from PolymerElement):
  * https://github.com/LarsDenBakker/lit-html-examples/blob/master/src/1-basic/09-conditional-logic.js
  * https://github.com/LarsDenBakker/lit-html-examples/blob/master/src/2-intermediate/08-conditional-templates.js
* How to repeat templates (dom-repeat from PolymerElement):
  * https://github.com/LarsDenBakker/lit-html-examples/blob/master/src/1-basic/10-repeat-templates.js
  * https://github.com/LarsDenBakker/lit-html-examples/blob/master/src/2-intermediate/11-dynamic-repeated-templates.js
* How to compute properties (computed properties from PolymerElement)
  * https://github.com/LarsDenBakker/lit-html-examples/blob/master/src/2-intermediate/01-computed-properties.js
* How to observe property changes (property observers from PolymerElement)
  * https://github.com/LarsDenBakker/lit-html-examples/blob/master/src/2-intermediate/07-did-render.js
  * https://github.com/LarsDenBakker/lit-html-examples/blob/master/src/3-advanced/01-property-setter-observer.js
* How to render templates from external sources, such as a back-end API or html files imported through webpack
  * https://github.com/LarsDenBakker/lit-html-examples/blob/master/src/3-advanced/07-external-template.js
* How to separate CSS, HTML and JS in different files:
  * https://github.com/LarsDenBakker/lit-html-examples/blob/master/src/3-advanced/09-separate-css-html-js-element.js

# Other documentation and videos
* https://github.com/Polymer/lit-element
* https://github.com/Polymer/lit-html
* https://polymer.github.io/lit-html/guide/index.html
* https://youtu.be/we3lLo-UFtk

# Note
This project is a community effort. The authors of this repository are not affiliated with Google or the Polymer team. Because LitElement and lit-html are still in early stages of development, best practices and examples will change and evolve over time.

# Contributing
Contributions are appreciated, feel free to submit issues and PRs.

# Examples to be implemented
* subclassing
* _shouldRender
* upwards data flow
* link to documentation on design choices (unidirectional data flow etc.)
* Implement other components (Polymer) in intermediate
