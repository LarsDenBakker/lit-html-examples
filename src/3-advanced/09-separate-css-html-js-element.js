/**
 * People often comment that they find it strange to write CSS, HTML and JS in a single file.
 * The HTML Imports standard was a way to solve the issue, but it did not get picked up by browsers
 * other than chrome. The Polymer team is now working on HTML modules, which will have better
 * integration with js modules and will solve this issue in the future.
 *
 * In the meantime, there are approaches where you can achieve writing .html, .css and .js files
 * and combine them into one element. But they all require some kind of compilation/build step.
 *
 * This examples shows you how you can do it without a build step, and it might be more flexible
 * than you'd think. There is a clear separation of concerns as styles, template and logic are split
 * across files. But because it's still in JS, you can do things like splitting up large templates
 * into smaller constants or functions.
 *
 * It gives you a uniform and browser compatible syntax for defining modules, importing and exporting
 * variables safely across files and across the three languages.
 */

import { LitElement, html } from '@polymer/lit-element';

// Import template and styles from our separate files
import { getTemplate } from './09-separate-css-html-js-template';
import { styles } from './09-separate-css-html-js-styles';


class SeparateCssHtmlJs extends LitElement {

  static get properties() {
    return {
      todoItems: { type: Array },
    }
  }

  constructor() {
    super();

    this.todoItems = [
      'Buy groceries',
      'Do the laundry',
      'Wash the dishes',
      'Mow the lawn'
    ]
  }

  render() {
    // Compute the template based on the current properties
    const template = getTemplate(this);

    return html`
      <!-- Apply the styles to our template -->
      ${styles}

      <!-- Apply the template of our element -->
      ${template}
    `;
  }

}

customElements.define('x-separate-css-html-js', SeparateCssHtmlJs);