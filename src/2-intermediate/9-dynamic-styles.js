import { LitElement, html } from '@polymer/lit-element';

class DynamicStyles extends LitElement {

  static get properties() {
    return {
      bold: Boolean,
      textColor: String,
    };
  }

  constructor() {
    super();

    this.bold = true;
    this.textColor = 'blue';
  }

  _render({ bold, textColor }) {
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
      <div class$="${bold ? 'bold' : ''}">

        <!--
          To update css variables, you can use inline styles. For regular css properties this is an
          anti-pattern because of css specificity. For css vars this is not an issue, becuase the
          specificity is handled where the variables are applied.
        -->
        <div class="text" style$="${`--text-color: ${textColor}`};">
          Hello world!
        </div>
      </div>

      <div>
        <input id="colorInput" value="${textColor}">
        <button id="colorButton" on-click="${() => this._updateColor()}">
          Set color
        </button>
      </div>

      <div>
        <button id="boldButton" on-click="${() => this._updateBold()}">Toggle bold</button>
      </div>
    `;
  }

  _updateColor() {
    this.textColor = this.shadowRoot.getElementById('colorInput').value;
  }

  _updateBold(e) {
    this.bold = !this.bold;
  }

}

customElements.define('x-dynamic-styles', DynamicStyles);