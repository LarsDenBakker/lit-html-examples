import { LitElement, html } from '@polymer/lit-element';

class RenderStyles extends LitElement {

  render() {
    return html`
      <!--
        Style tags placed inside LitElement templates will place the styles inside
        the element's shadow root. It is not recommended to use js variables inside
        style tags, because changes to the style tag's content causes all styles
        to be re-parsed.
      -->
      <style>
        :host {
          display: block;
        }

        .message {
          color: blue;
        }
      </style>

      <div class="message">Hello world!</div>
    `;
  }

}

customElements.define('x-render-styles', RenderStyles);