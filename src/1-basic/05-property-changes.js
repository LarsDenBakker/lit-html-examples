import { LitElement, html } from '@polymer/lit-element';

class PropertyChanges extends LitElement {

  // Any changes to properties defined in the static properties will trigger a re-render
  // of the component.
  static get properties() {
    return {
      count: { type: Number },
    };
  }

  constructor() {
    super();

    this.count = 0;

    // We mock updating the count property every 2sec, looping from 0 to 10.
    setInterval(() => this.count = this.count < 10 ? this.count + 1 : 0, 2000);
  }

  // The _render callback is called each time any of the defined properties change.
  // lit-html is optimized for handling frequent updates and updating the DOM efficiently
  render() {
    return html`
      <div>
        Count from 0 to 10: [${this.count}]
      </div>
    `;
  }

}

customElements.define('x-property-changes', PropertyChanges);