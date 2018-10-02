import { LitElement, html } from '@polymer/lit-element';

// Templates can be defined anywhere in js. It's cleaner to keep constant values outside of the class definition
const nestedTemplate = html`<div>A static nested template.</div>`;

class NestingTemplates extends LitElement {

  render() {
    return html`
      <span>
        <!--
          You can nest templates by using template expressions. To prevent XSS attacks
          (https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)), HTML strings passed
          in template expressions are not evaluated. To next templates, values passed in
          expressions must be created through html template tags as well.
        -->
        ${nestedTemplate}
      </span>
    `;
  }

}

customElements.define('x-nesting-templates', NestingTemplates);