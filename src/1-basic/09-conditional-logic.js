import { LitElement, html } from '@polymer/lit-element';

class ConditionalLogic extends LitElement {

  static get properties() {
    return {
      showMessage: { type: Boolean },
      message: { type: String },
    };
  }

  render() {
    return html`
      <div>
        <button @click="${() => this.showMessage = !this.showMessage}">
          <!-- You can use ternary expressions for quick conditional logic -->
          Click to ${this.showMessage ? 'hide' : 'show'} message
        </button>

        <!-- Or to conditionally show/hide text -->
        ${this.showMessage
          ? html`The message is: ${this.message}`
          : ''}
      </div>
    `;
  }

}

customElements.define('x-conditional-logic', ConditionalLogic);