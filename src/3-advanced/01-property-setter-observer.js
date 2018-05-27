import { LitElement, html } from '@polymer/lit-element';

class PropertySetterObserver extends LitElement {

  static get properties() {
    return {
      _focused: Boolean
    }
  }

  constructor() {
    super();

    this.focused = false;
  }

  get focused() {
    return this._focused;
  }

  // To observe property changes, you can write your own getters and setters
  // and create side effects when they are set. When the properties are set by
  // other components during rendering, the setter will be called.
  set focused(focused) {
    // If besides side effects, you also need the value for rendering you can set
    // the property under a different name.
    this._focused = focused;

    if (focused) {
      this.shadowRoot.getElementById('amountInput').focus();
    }
  }

  _render({ _focused }) {
    return html`
      <form id="form">
        <input id="amountInput" type="number" name="amount" on-blur="${() => this.focused = false}">
        Focused: ${_focused}
        <button on-click="${() => this.focused = true}">Focus input</button>
      </form>
    `;
  }

}

customElements.define('x-property-setter-observer', PropertySetterObserver);