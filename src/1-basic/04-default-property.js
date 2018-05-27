import { LitElement, html } from '@polymer/lit-element';

class DefaultProperty extends LitElement {

  static get properties() {
    return {
      score: Number,
    };
  }

  constructor() {
    super();

    // Default properties can be set from the element's constructor
    this.score = 20;
  }

  _render({ score }) {
    return html`
      <div>
        Score: ${score}
      </div>
    `;
  }

}

customElements.define('x-default-property', DefaultProperty);