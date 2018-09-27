import { LitElement, html } from '@polymer/lit-element';

class DefaultProperty extends LitElement {

  static get properties() {
    return {
      score: { type: Number },
    };
  }

  constructor() {
    super();

    // Default properties can be set from the element's constructor
    this.score = 20;
  }

  render() {
    return html`
      <div>
        Score: ${this.score}
      </div>
    `;
  }

}

customElements.define('x-default-property', DefaultProperty);