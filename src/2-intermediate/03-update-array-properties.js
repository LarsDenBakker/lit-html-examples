import { LitElement, html } from '@polymer/lit-element';

class UpdateArrayProperties extends LitElement {

  static get properties() {
    return {
      messages: { type: Array },
    }
  }

  constructor() {
    super();

    this.messages = ['hello', 'world'];
  }

  render() {
    return html`
      Messages: [${this.messages.join(', ')}]
      <input id="messageInput" placeholder="message">
      <button @click="${() => this._onMessageSubmitA()}">Add message</button>
    `;
  }

  _getInput() {
    const input = this.shadowRoot.getElementById('messageInput');
    const value = input.value;
    input.value = '';
    return value;
  }

  // Updating arrays works the same as updating objects. See object example for more info

  // You can use the mutable approach, where you mutate the existing array and request an update
  _onMessageSubmitA() {
    const message = this._getInput();
    if (message && message.length) {
      this.messages.push(message);
      this.requestUpdate();
    }
  }

  // Or you can use the immutable approach, where a new array is created and the change is picked up
  _onMessageSubmitB() {
    const message = this._getInput();
    if (message && message.length) {
      this.messages = [...this.messages, message];
    }
  }

}

customElements.define('x-update-array-properties', UpdateArrayProperties);