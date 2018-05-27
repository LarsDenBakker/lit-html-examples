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
        In this case the <a> element has a href attribute which we want to set.

        See set-properties example on how to set properties.
      -->
      <a href$="${href}">
        ${label}
      </a>
    `;
  }

}

customElements.define('x-set-attributes', SetAttributes);