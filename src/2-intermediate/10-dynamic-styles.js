import { LitElement, html } from '@polymer/lit-element';

class DynamicStyles extends LitElement {

  static get properties() {
    return {
      bold: { type: Boolean },
      textColor: { type: String },
    };
  }

  constructor() {
    super();

    this.bold = true;
    this.textColor = 'blue';
  }

  render() {
    return html`
      <style>
        :host {
          display: block;
        }

        .bold {
          font-weight: bold;
        }

        .text {
          color: var(--text-color);
        }
      </style>

      <!-- You can set classes dynamically based on properties -->
      <div class="${this.bold ? 'bold' : ''}">

        <!--
          To update css variables, you can use inline styles. For regular css properties this is an
          anti-pattern because of css specificity. For css vars this is not an issue, because the
          specificity is handled where the variables are applied.
        -->
        <div class="text" .style="${`--text-color: ${this.textColor}`};">
          Hello world!
        </div>
      </div>

      <div>
        <input id="colorInput" value="${this.textColor}">
        <button id="colorButton" @click="${() => this._updateColor()}">
          Set color
        </button>
      </div>

      <div>
        <button id="boldButton" @click="${() => this._updateBold()}">Toggle bold</button>
      </div>
    `;
  }

  _updateColor() {
    this.textColor = this.shadowRoot.getElementById('colorInput').value;
  }

  _updateBold() {
    this.bold = !this.bold;
  }

}

customElements.define('x-dynamic-styles', DynamicStyles);