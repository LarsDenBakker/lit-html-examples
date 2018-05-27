import { LitElement, html } from '@polymer/lit-element';

class HandleEvents extends LitElement {

  static get properties() {
    return {
      count: Number,
    };
  }

  constructor() {
    super();

    this.count = 0;
  }

  _render({ count }) {
    return html`
      <div>
        Current count: [${count}]
        <!-- Use on-[eventname] syntax to declaratively register event handlers -->
        <button on-click="${() => this.count += 1}">+</button>

        <!--
          You can also pass a function reference directly. Remember to use .bind(this), otherwise the function
          will not be bound to this element instance
        -->
        <button on-click="${this._onDecrement.bind(this)}">-</button>
      </div>
    `;
  }

  _onDecrement() {
    this.count -= 1;
  }

}

customElements.define('x-handle-events', HandleEvents);