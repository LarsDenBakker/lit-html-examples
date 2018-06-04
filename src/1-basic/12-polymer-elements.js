import { LitElement, html } from '@polymer/lit-element';
import '@polymer/paper-button/paper-button';

class PolymerElements extends LitElement {

  static get properties() {
    return {
      count: Number,
    };
  }

  constructor() {
    super();

    this.count = 0;
  }

  _render({ count }) {
    return html`
      <div>
        Current count: [${count}]
        <!--
          You can also use Polymer elements just like any other element.
          In this case, we replaced the button (from the handle-events example) with the Polymer 3 paper-button.
        -->
        <paper-button on-click="${() => this.count += 1}">+</paper-button>
        <paper-button on-click="${this._onDecrement.bind(this)}">-</paper-button>
      </div>
    `;
  }

  _onDecrement() {
    this.count -= 1;
  }

}

customElements.define('x-polymer-elements', PolymerElements);