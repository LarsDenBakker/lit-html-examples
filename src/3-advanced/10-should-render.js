import { LitElement, html } from '@polymer/lit-element';

class ShouldRender extends LitElement {

  static get properties() {
    return {
      active: Boolean,
      count: Number,
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

  _render({ count }) {
    return html`
      Current count: ${count}

      <button on-click="${() => this.active = !this.active}">
        Toggle active
      </button>
    `;
  }

  // The _shouldRender function receives the current, changes and previous properties.
  // Based on this, you can decide whether the component should re-render on not. This
  // is useful to for example block re-rendering of the component while it is not active
  // or in view.
  _shouldRender(props, changesProps, prevProps) {
    return props.active;
  }

}

customElements.define('x-should-render', ShouldRender);