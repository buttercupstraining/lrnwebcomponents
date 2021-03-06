import { LitElement, html, css } from "lit-element/lit-element.js";
import {
  SimpleFieldsBaseStyles,
  SimpleFieldsFieldsetStyles,
  SimpleFieldsDescriptionStyles,
} from "./simple-fields-ui.js";
/**
 *`simple-fields-fieldset` takes in a JSON schema of type fieldset and builds a form,
 * exposing a `value` property that represents an array described by the schema.
 *
 * @group simple-fields
 * @element simple-fields-fieldset
 */
class SimpleFieldsFieldset extends LitElement {
  static get tag() {
    return "simple-fields-fieldset";
  }
  static get styles() {
    return [
      ...SimpleFieldsBaseStyles,
      ...SimpleFieldsFieldsetStyles,
      ...SimpleFieldsDescriptionStyles,
      css`
        :host(:last-of-type) {
          margin-bottom: 0;
        }
      `,
    ];
  }
  render() {
    return html`
      <fieldset part="fieldset">
        ${this.legend} ${this.desc} ${this.fields}
      </fieldset>
    `;
  }
  get legend() {
    return html`
      <legend id="label" ?hidden="${!this.label}" part="legend">
        ${this.label}${this.error ? "*" : ""}
      </legend>
    `;
  }
  get desc() {
    return html`
      <div id="description" ?hidden="${!this.description}" part="description">
        ${this.description}
      </div>
    `;
  }
  get fields() {
    return html`
      <div id="item-fields" part="fields">
        <slot></slot>
      </div>
    `;
  }
  static get properties() {
    return {
      /**
       * whether the tabbed interface is disabled
       */
      disabled: {
        type: Boolean,
        reflect: true,
      },
      /**
       * whether fieldset has fields with errors
       */
      error: {
        type: Boolean,
        reflect: true,
      },
      /**
       * whether the tabbed interface is hidden
       */
      hidden: {
        type: Boolean,
        reflect: true,
      },
      /**
       * whether the tabbed interface is hidden
       */
      readonly: {
        type: Boolean,
        reflect: true,
      },
      /**
       * fieldset legend
       */
      label: {
        type: String,
        reflect: true,
      },
      /**
       * unique name
       */
      name: {
        type: String,
        reflect: true,
        attribute: "name",
      },
      /**
       * optional description
       */
      description: {
        type: String,
      },
    };
  }
}
window.customElements.define(SimpleFieldsFieldset.tag, SimpleFieldsFieldset);
export { SimpleFieldsFieldset };
