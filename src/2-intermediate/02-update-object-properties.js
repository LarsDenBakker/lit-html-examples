import { LitElement, html } from '@polymer/lit-element';

class UpdateObjectProperties extends LitElement {

  static get properties() {
    return {
      user: { type: Object },
    }
  }

  constructor() {
    super();

    this.user = { id: 1, username: 'Steve' };
  }

  render() {
    return html`
      Id: [${this.user.id}] Username: [${this.user.username}]
      <input id="usernameInput" value="${this.user.username}" placeholder="username">
      <button @click="${() => this._onUsernameSubmitA()}">Set value</button>
    `;
  }

  // Mutating properties on an object requires some extra steps. This can be done in
  // two different ways. Both have pros and cons, pick what suits your case.

  // Option A is to mutate the user object and request a render manually
  _onUsernameSubmitA() {
    // Update the username to reflect the new value
    const username = this.shadowRoot.getElementById('usernameInput').value;
    this.user.username = username;

    // Because the actual user object itself did not change, LitElement will not pick
    // up the change so we need to request an update manually.
    this.requestUpdate();

    // If you want to do follow up actions, such as firing an event, it can be useful to
    // wait for the requested render to complete. Because this is async, you can use the
    // updateComplete promise to wait for the update.
    this.updateComplete.then(() => {
      this.dispatchEvent(new CustomEvent('username-updated', { detail: username }));
    });
  }

  // Option B is to use immutable data patterns, it avoids mutating existing objects
  async _onUsernameSubmitB() {
    // Update the username to reflect the new value
    const username = this.shadowRoot.getElementById('usernameInput').value;
    // Because we are creating a new object with the updated values, LitElement will
    // pick the changes automatically
    this.user = { ...this.user, username };

    // Like option A, we are wait for render to complete before firing an event.
    // Because renderComplete is a promise, you can also use async await for this.
    await this.renderComplete;
    this.dispatchEvent(new CustomEvent('username-updated', { detail: username }));
  }

}

customElements.define('x-update-object-properties', UpdateObjectProperties);