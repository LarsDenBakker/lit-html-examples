import { LitElement, html } from '@polymer/lit-element';

class PropertyChanges extends LitElement {

  // Any changes to properties defined in the static properties will trigger a re-render
  // of the component.
  static get properties() {
    return {
      count: Number,
    };
  }

  constructor() {
    super();

    this.count = 0;

    // We mock updating the count property every 2sec, looping from 0 to 10.
    setInterval(() => {
      if (this.count < 10) {
        this.count += 1;
      } else {
        this.count = 0;
      }
    }, 2000);
  }

  // The _render callback is called each time any of the defined properties change.
  // lit-html is optimized for handling frequent updates and updating the DOM efficiently
  _render({ count }) {
    return html`
      <div>
        Count from 0 to 10: [${count}]
      </div>
    `;
  }

}

customElements.define('x-property-changes', PropertyChanges);