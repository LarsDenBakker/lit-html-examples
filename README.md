# Lit-html examples
Repository with examples and design patterns for building web components using the LitElement base class, and rendering templates using lit-html.

# Who is this for?
This repository is intended as a starting point for all people who want to write web components with LitElement. Some special sections are added for people migrating from PolymerElement.

# Frequently asked questions
People starting with LitElement, especially those coming from PolymerElement, often have these questions:
* How to set default properties:
  * https://github.com/LarsDenBakker/lit-html-examples/blob/master/src/1-basic/4-default-property.js
* How to handle conditional logic (dom-if from PolymerElement):
  * https://github.com/LarsDenBakker/lit-html-examples/blob/master/src/1-basic/8-conditional-logic.js
  * https://github.com/LarsDenBakker/lit-html-examples/blob/master/src/2-intermediate/7-conditional-templates.js
* How to repeat templates (dom-repeat from PolymerElement):
  * https://github.com/LarsDenBakker/lit-html-examples/blob/master/src/1-basic/10-repeat-templates.js
  * https://github.com/LarsDenBakker/lit-html-examples/blob/master/src/2-intermediate/10-dynamic-repeated-templates.js
* How to compute properties (computed properties from PolymerElement)
  * https://github.com/LarsDenBakker/lit-html-examples/blob/master/src/2-intermediate/1-computed-properties.js
* How to observe property changes (property observers from PolymerElement)
  * https://github.com/LarsDenBakker/lit-html-examples/blob/master/src/2-intermediate/6-did-render.js
  * https://github.com/LarsDenBakker/lit-html-examples/blob/master/src/3-advanced/custom-setter.js

# Documentation/videos
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
* until directive
* external templates / unsafeHTML
* shared styles
* shared templates
* template factories
* passing props/event handlers to template factories
* upwards data flow
* link to documentation on design choices (unidirectional data flow etc.)
