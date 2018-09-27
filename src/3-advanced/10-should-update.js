import { LitElement, html } from '@polymer/lit-element';

class ShouldUpdate extends LitElement {

  static get properties() {
    return {
      active: { type: Boolean },
      count: { type: Number },
    };
  }

  constructor() {
    super();

    this.active = true;
    this.count = 0;

    // Increment a counter each second. Note that even when render is prevented, javascript will
    // continue to run. When rendering is turned on again at a later time, the values of the
    // properties at that moment are picked up again.
    setInterval(() => {
      this.count += 1;
    }, 1000);
  }

  render() {
    return html`
      Current count: ${this.count}

      <button @click="${() => this.active = !this.active}">
        Toggle active
      </button>
    `;
  }

  // The shouldUpdate function receives a map with keys for the changed properties
  // pointing to their previous values.
  // Based on this, you can decide whether the component should re-render on not. This
  // is useful to for example block re-rendering of the component while it is not active
  // or in view.
  shouldUpdate(changedProperties) {
    return this.active;
  }

}

customElements.define('x-should-update', ShouldUpdate);