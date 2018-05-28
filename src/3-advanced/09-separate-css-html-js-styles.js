import { html } from '@polymer/lit-element';

// In this file we define our css inside a style tag and export it.
export const styles = html`
  <style>
    /* Regular css syntax */
    :host {
      display: block;
    }

    .todo-heading {
      font-weight: 18px;
      margin: 0;
    }

    .todo-list {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .todo-list input {
      cursor: pointer;
    }
  </style>
`;