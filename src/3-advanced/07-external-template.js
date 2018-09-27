import { LitElement, html } from '@polymer/lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

// Lit-html has strict rules on what's allowed to be rendered in order to prevent
// XSS attacks (https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)).

// To render html, the values in template expressions must be created with the lit-html
// template literal tag (html`<div>foo</div>`). If you receive templates from other
// sources, such as a back-end API, this is a problem. To get around this lit-html offers
// the unsafeHTML directive. Be aware that this will open you up for XSS attacks, so make
// sure that you trust the source you are getting the html from.

// Some HTML defined as a string. This could come from any source.
const externalTemplate = `
  <div>Content rendered from an external source</div>
  <button>My button</button>
  <a href="#">My anchor</a>
`;

class ExternalTemplate extends LitElement {

  render() {
    return html`
      Content rendered in lit-html

      <!-- Render the external html inside a lit-html template -->
      ${unsafeHTML(externalTemplate)}
    `;
  }

}

customElements.define('x-external-template', ExternalTemplate);