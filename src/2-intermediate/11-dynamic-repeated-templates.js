import { LitElement, html } from '@polymer/lit-element';
import { repeat } from 'lit-html/directives/repeat';

class DynamicRepeatedTemplates extends LitElement {

  static get properties() {
    return {
      items: { type: Array },
    };
  }

  constructor() {
    super();

    this.items = [
      { id: 0, message: 'hello' },
      { id: 1, message: 'world' },
      { id: 2, message: 'foo' },
      { id: 3, message: 'bar' },
    ];
  }

  render() {
    return html`
      <div>
        <button @click="${() => this.reorder()}">Re-order items (random)</button>
        <!--
          For dynamic lists that are re-ordered frequently, you can use the repeat directive.
          This directive handles efficient re-ordering of dom-nodes without unnecessarily recreating them.

          For this to work, items in the list should be unique. An identify function is passed to
          tell the directive how to identify individual items.
        -->
        ${repeat(
          this.items, // the array of items
          item => item.id, // the identify function
          (item, i) => html`<div>[${i}] Message ${item.id}: ${item.message}</div>` // the template for each item
        )}
      </div>
    `;
  }

  /* re-orders items randomly */
  reorder() {
    this.items = [...this.items.sort(() => Math.floor(Math.random() * 3) + -1)];
  }

}

customElements.define('x-dynamic-repeated-templates', DynamicRepeatedTemplates);