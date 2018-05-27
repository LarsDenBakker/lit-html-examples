import { LitElement, html } from '../../bower_components/ing-lit-html';

class RenderPromises extends LitElement {

  static get properties() {
    return {
      messageRequest: String,
    };
  }

  constructor() {
    super();

    this.messageRequest = this._fakeFetchMessage();
  }

  // Fake fetching something from an API, returns after 2sec
  _fakeFetchMessage() {
    return new Promise((resolve) => {
      setTimeout(() => resolve('Hello world'), 2000);
    });
  }

  _render({ messageRequest }) {
    return html`
      <div>
        <!--
          lit-html supports promises. When a promise is passed to a template,
          the result of the promise will get rendered when it resolves
        -->
        The message will appear after 2sec: <em>${messageRequest}</em>
      </div>
    `;
  }

}

customElements.define('x-render-promises', RenderPromises);