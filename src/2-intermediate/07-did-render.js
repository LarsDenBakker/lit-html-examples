import { LitElement, html } from '@polymer/lit-element';

class DidRender extends LitElement {

  static get properties() {
    return {
      focused: Boolean,
    };
  }

  constructor() {
    super();

    this.focused = false;
  }

  _render({ focused }) {
    return html`
      <input id="amountInput" type="number" name="amount" on-blur="${() => this.focused = false}">
      Focused: ${focused}
      <button on-click="${() => this.focused = true}">Focus input</button>
    `;
  }

  // The _render function should remain pure without side effects. The _didRender callback is called
  // each time a render has taken place. Use this to observe and act upon property changes.
  _didRender(props, changedProps, prevProps) {
    if (changedProps && changedProps.focused) {
      // Focus the amount input field, each time focused becomes true
      this.shadowRoot.getElementById('amountInput').focus();
    }
  }

}

customElements.define('x-did-render', DidRender);