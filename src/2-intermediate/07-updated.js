import { LitElement, html } from '@polymer/lit-element';

class Updated extends LitElement {

  static get properties() {
    return {
      focused: { type: Boolean },
    };
  }

  constructor() {
    super();

    this.focused = false;
  }

  render() {
    return html`
      <input id="amountInput" type="number" name="amount" @blur="${() => this.focused = false}">
      Focused: ${this.focused}
      <button @click="${() => this.focused = true}">Focus input</button>
    `;
  }

  // The render function should remain pure without side effects. The updated callback is called
  // each time the element's DOM has been updated and rendered. Use this to observe and act upon property changes.
  updated(changedProperties) {
    if (changedProperties && changedProperties.get('focused') === false) {
      // Focus the amount input field, each time focused changes from false
      this.shadowRoot.getElementById('amountInput').focus();
    }
  }

}

customElements.define('x-updated', Updated);