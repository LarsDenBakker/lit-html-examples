import { LitElement, html } from '@polymer/lit-element';

class ConditionalLogic extends LitElement {

  static get properties() {
    return {
      showMessage: Boolean,
      message: String,
    };
  }

  _render({ showMessage, message }) {
    return html`
      <div>
        <button on-click="${() => this.showMessage = !this.showMessage}">
          <!-- You can use ternary expressions for quick conditional logic -->
          Click to ${showMessage ? 'hide' : 'show'} message
        </button>

        <!-- Or to conditionally show/hide text -->
        ${showMessage
          ? html`The message is: ${message}`
          : ''}
      </div>
    `;
  }

}

customElements.define('x-conditional-logic', ConditionalLogic);