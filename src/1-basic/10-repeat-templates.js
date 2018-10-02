import { LitElement, html } from '@polymer/lit-element';

class RepeatTemplates extends LitElement {

  static get properties() {
    return {
      messages: { type: Array },
    };
  }

  constructor() {
    super();

    this.messages = ['hello', 'world', 'foo', 'bar'];
  }

  render() {
    return html`
      <div>
        <!--
          To repeat a template, you can simply use a map function of arrays.
          In this case, it maps the array of messages to an array of templates.
          Lit-html will read the array and render the templates inside it.
        -->
        List 1:
        <ul>
          ${this.messages.map((message, i) => html`<li>Message ${i}: ${message}</li>`)}
        </ul>

        <!--
          Building up templates inline can quickly get messy,
          you can split it up into separate functions.
        -->
        List 2:
        <ul>
          ${getMessagesTemplate(this.messages)}
        </ul>
      </div>
    `;
  }

}

// Using a map function is nice to keep functions pure and functional. But you can
// use loops as well to build up the templates imperatively.
//
// Since this function does not use any instance variables, we can take out of the class
// and write it as a standalone function.
function getMessagesTemplate(messages) {
  const templates = [];

  for (let i = 0; i < messages.length; i++) {
    templates.push(html`<li>Message ${i}: ${messages[i]}</li>`);
  }

  return templates;
}

customElements.define('x-repeat-templates', RepeatTemplates);