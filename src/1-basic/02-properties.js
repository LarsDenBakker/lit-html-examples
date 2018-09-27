import { LitElement, html } from '@polymer/lit-element';

class Properties extends LitElement {

  // Properties are defined through a static getter. When defined, LitElement will reflect any
  // html attributes set on this component as properties which can be used from javascript.

  // Keys should be the property name, value the property type.
  // The type is used to deserialize html attribute string into a javascript property.
  // The supported types are String, Number, Boolean and Object. You can override the
  // deserialization method to add custom types.
  static get properties() {
    return {
      message: { type: String },
    };
  }

  render() {
    return html`
      <div>
        <!--
          Dynamic parts of your template are set through template string expressions.
          It's plain javascript, so you can use any valid javascript expression. lit-html handles
          updating the dom efficiently.
        -->

        <!-- Render a string directly -->
        The message is: ${this.message}

        <!-- Call a function and render the return value -->
        The reversed message is: ${this.reverseMessage(this.message)}
      </div>
    `;
  }

  reverseMessage(message) {
    return message.split('').reverse().join('');
  }

}

customElements.define('x-properties', Properties);