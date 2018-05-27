import { LitElement, html } from '@polymer/lit-element';

class RepeatTemplates extends LitElement {

  static get properties() {
    return {
      messages: Array,
    };
  }

  constructor() {
    super();

    this.messages = ['hello', 'world', 'foo', 'bar'];
  }

  _render({ messages }) {
    return html`
      <div>
        <!--
          To repeat a template, you can simply use a map function of arrays.
          In this case, it maps the array of messages to an array of templates.
          Lit-html will render the templates and handle updates.
        -->
        ${messages ? messages.map((message, i) => html`<div>Message ${i}: ${message}</div>`) : ''}
      </div>
    `;
  }

}

customElements.define('x-repeat-templates', RepeatTemplates);