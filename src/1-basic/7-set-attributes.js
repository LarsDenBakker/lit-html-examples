import { LitElement, html } from '@polymer/lit-element';

class SetAttributes extends LitElement {

  static get properties() {
    return {
      href: String,
      label: String,
    }
  }

  _render({ href, label }) {
    return html`
      <!--
        LitElement sets javascript properties by default. To set html attributes, postfix the the attribute
        with a $. It depends on the element you're rendering whether attributes or properties should be used.

        See set-properties example for more.
      -->
      <a href$="${href}">
        ${label}
      </a>
    `;
  }

}

customElements.define('x-set-attributes', SetAttributes);