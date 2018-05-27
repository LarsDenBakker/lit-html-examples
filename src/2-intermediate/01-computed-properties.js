import { LitElement, html } from '@polymer/lit-element';

class ComputedProps extends LitElement {

  static get properties() {
    return {
      itemsA: Array,
      itemsB: Array,
      amountA: Number,
      amountB: Number,
    };
  }

  constructor() {
    super();

    this.itemsA = ['hello', 'world'];
    this.itemsB = ['foo', 'bar'];
    this.amountA = 1;
    this.amountB = 2;
  }

  // If you are exposing a public property that is computed based on two properties, you can
  // just create a getter that combines the two.
  get totalAmount() {
    return this.amountA + this.amountB;
  }

  _render({ itemsA, itemsB, amountA, amountB }) {
    // With Polymer template, we had to set up special bindings for properties that
    // combine to create new values so that the template system picks up the changes.
    //
    // With LitElement, we can just compute the combined properties inside the _render
    // callback.
    const items = this._computeItems(itemsA, itemsB);

    return html`
      <div>The computed messages are: [${items.join(', ')}]</div>

      <!-- For simple computed properties, you can just compute them inline -->
      <div>The computed amount is: [${amountA + amountB}]</div>
    `;
  }

  _computeItems(a, b) {
    return [...a, ...b];
  }

}

customElements.define('x-computed-properties', ComputedProps);