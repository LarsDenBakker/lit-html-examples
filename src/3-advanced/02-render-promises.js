import { LitElement, html } from '@polymer/lit-element';

class RenderPromises extends LitElement {

  static get properties() {
    return {
      messageRequest: { type: String },
    };
  }

  constructor() {
    super();

    this.messageRequest = this._fakeFetchMessage();
  }

  render() {
    return html`
      <div>
        <!--
          lit-html supports rendering promises. When a promise is passed to a template,
          the result of the promise will get rendered when it resolves. Nothing is rendered
          while the promise is pending.

          lit-html handles race conditions, so only the last promises will be rendered
        -->
        The message will appear after 2sec: <em>${this.messageRequest}</em>
      </div>
    `;
  }

  // Fake fetching something from an API, returns after 2sec
  _fakeFetchMessage() {
    return new Promise((resolve) => {
      setTimeout(() => resolve('Hello world'), 2000);
    });
  }

}

customElements.define('x-render-promises', RenderPromises);