import { LitElement, html } from '@polymer/lit-element';

class HandleEvents extends LitElement {

  static get properties() {
    return {
      count: { type: Number },
    };
  }

  constructor() {
    super();

    this.count = 0;
  }

  render() {
    return html`
      <div>
        Current count: [${this.count}]
        <!-- Use @[eventname] syntax to declaratively register inline event handlers -->
        <button @click="${() => this.count += 1}">+</button>

        <!--
          You can also pass a function reference directly. Remember to use .bind(this), otherwise the function
          will not be bound to this element instance
        -->
        <button @click="${this._onDecrement.bind(this)}">-</button>
      </div>
    `;
  }

  _onDecrement() {
    this.count -= 1;
  }

}

customElements.define('x-handle-events', HandleEvents);