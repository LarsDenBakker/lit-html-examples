import { LitElement, html } from '@polymer/lit-element';

class FirstUpdated extends LitElement {

  render() {
    return html`
      <form id="form">
        Auto focused: <input id="amountInput" type="number" name="amount">
        <button>Submit button</button>
      </form>
    `;
  }

  // The firstUpdated method is called after the element's DOM has been updated the first time. This
  // can be used as a moment to handle work that should be done only once after the first update,
  // such as querying dom nodes or calling methods on elements.
  //
  // In general using pure functions and declarative templates through the render function
  // is preferred. Use this only if there is no other way.
  firstUpdated(changedProperties) {
    // Store a reference to the form element for easy access
    this._form = this.shadowRoot.getElementById('form');

    // Auto focus the amount input field on initial render
    this.shadowRoot.getElementById('amountInput').focus();
  }

  // We use the dom reference to expose a public submit method API.
  submitForm() {
    return this._form.submit();
  }

}

customElements.define('x-first-updated', FirstUpdated);