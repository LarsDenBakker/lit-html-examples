import { html } from '@polymer/lit-element';

// In this file we define the template of our element. We export a function
// which receives the current properties and build up the template from there.
export const getTemplate = (props) => html`
  <h2 class="todo-heading">Todo's</h2>

  <ul class="todo-list">
    ${props.todoItems.map(item => todoItemTemplate(item))}
  </ul>
`;

// Because it's just javascript, you can split up the template into separate parts which makes it much easier
// to manage large templates.
const todoItemTemplate = (item) => html`
  <li class="todo-item">
    <input type="checkbox">
    ${item}
  </li>
`;