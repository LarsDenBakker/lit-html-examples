import { LitElement, html } from '@polymer/lit-element';

class QueryDomNodes extends LitElement {

  static get properties() {
    return {
      users: { type: Array },
    }
  }

  constructor() {
    super();

    this.users = ['steve'];
  }

  // To access dom nodes imperatively, you can use regular query selectors on the element instance.
  // LitElement uses shadow dom, so the selector should be done on the shadowroot of the element.
  // Because of shadow dom, the selectors are scoped to only this element instance's dom.
  //
  // Be aware that the first render of the element happens async, so the requested dom nodes might
  // not be available when running this function.
  //
  // See the first-updated and updated examples for ways to access dom nodes more safely
  get usernameInput() {
    return this.shadowRoot.getElementById('usernameInput');
  }

  get username() {
    // Use the input getter, and get the value property from the input element
    return this.usernameInput.value;
  }

  render() {
    return html`
      <input id="usernameInput" name="username">
      <button @click="${() => this._addUsername()}">Add user</button>

      <ul>
        ${this.users.map(user => html`<li>${user}</li>`)}
      </ul>
    `;
  }

  _addUsername() {
    this.users = [...this.users, this.username];
    
    // Use the input getter and clear the value
    this.usernameInput.value = '';
  }
}

customElements.define('x-query-dom-nodes', QueryDomNodes);