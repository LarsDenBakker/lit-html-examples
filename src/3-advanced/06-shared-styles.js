import { LitElement, html } from '@polymer/lit-element';

// Because styles tags are just html, they can be shared in the same way
// that regular templates are shared.

// This template could be defined in a separate file
const sharedStyles = html`
  <style>
    :host {
      display: block;
    }

    .box-wrapper {
      border: 5px solid red;
    }

    .box {
      width: 36px;
      height: 36px;
      background-color: blue;
    }
  </style>
`;

class SharedStylesA extends LitElement {

  render() {
    return html`
      <!-- Pull in shared styles -->
      ${sharedStyles}

      <!-- Styles are defined in shared style definition -->
      <div class="box-wrapper">
        <div class="box"><div>
      </div>
    `;
  }

}

customElements.define('x-shared-styles-a', SharedStylesA);

class SharedStylesB extends LitElement {

  render() {
    return html`
      <!-- Pull in shared styles -->
      ${sharedStyles}

      <style>
        /* You can override classes defined in shared styles */
        .box-wrapper {
          border: 5px dotted green;
        }
      </style>

      <!-- Styles are defined in shared style definition -->
      <div class="box-wrapper">
        <div class="box"><div>
      </div>
    `;
  }

}

customElements.define('x-shared-styles-b', SharedStylesB);



class SharedStyles extends LitElement {

  render() {
    return html`
      <style>
        x-shared-styles-a,
        x-shared-styles-b {
          display: inline-block;
          margin: 8px 0;
        }
      </style>

      <x-shared-styles-a></x-shared-styles-a>
      <x-shared-styles-b></x-shared-styles-b>
    `;
  }

}

customElements.define('x-shared-styles', SharedStyles);