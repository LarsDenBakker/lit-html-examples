import { LitElement, html } from '@polymer/lit-element';

class UpdateArrayProperties extends LitElement {

  static get properties() {
    return {
      messages: Object
    }
  }

  constructor() {
    super();

    this.messages = ['hello', 'world'];
  }

  _render({ messages }) {
    return html`
      Messages: [${messages.join(', ')}]
      <input id="messageInput" placeholder="message">
      <button on-click="${() => this._onMessageSubmitA()}">Add message</button>
    `;
  }

  _getInput() {
    const input = this.shadowRoot.getElementById('messageInput');
    const value = input.value;
    input.value = '';
    return value;
  }

  // Updating arrays works the same as updating objects. See object example for more info

  // You can use the mutable approach, where you mutate the existing array and request a render
  _onMessageSubmitA() {
    const message = this._getInput();
    if (message && message.length) {
      this.messages.push(message);
      this._requestRender();
    }
  }

  // Or you can use the immutable approach, where a new array is created and the change is picked up
  _onUsernameSubmitB() {
    const message = this._getInput();
    if (message && message.length) {
      this.messages = [...this.messages, message];
    }
  }

}

customElements.define('x-update-array-properties', UpdateArrayProperties);