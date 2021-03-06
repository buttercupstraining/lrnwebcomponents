/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, css } from "lit-element/lit-element.js";
import { RichTextEditorButtonBehaviors } from "./rich-text-editor-button.js";
import "@lrnwebcomponents/rich-text-editor/lib/singletons/rich-text-editor-selection.js";
import "@lrnwebcomponents/rich-text-editor/lib/singletons/rich-text-editor-prompt.js";

/**
 * RichTextEditorPromptButtonBehaviors
 *
 * @customElement
 * @class
 * @lit-html
 * @lit-element
 * @extends RichTextEditorButtonBehaviors
 */
const RichTextEditorPromptButtonBehaviors = function (SuperClass) {
  return class extends RichTextEditorButtonBehaviors(SuperClass) {
    /**
     * Store tag name to make it easier to obtain directly.
     */
    static get tag() {
      return "rich-text-editor-prompt-button";
    }

    // render function for template
    render() {
      return super.render();
    }

    // properties available to custom element for data binding
    static get properties() {
      return {
        ...super.properties,
        /**
         * fields for prompt popover.
         */
        fields: {
          type: Array,
        },
        /**
         * is element a custom inline widget element?
         */
        id: {
          name: "id",
          type: String,
          reflect: true,
          attribute: "id",
        },
        /**
         * prefilled value of prompt
         */
        value: {
          type: Object,
        },
        /**
         * prompt that pops up when button is pressed
         */
        prompt: {
          name: "prompt",
          type: Object,
        },
        /**
         * contents node inside selected range
         */
        __wrap: {
          name: "__wrap",
          type: Object,
        },
        /**
         * contents node inside selected range
         */
        __oldValue: {
          name: "__oldValue",
          type: Object,
        },
      };
    }
    constructor() {
      super();
      this.editableSelection = false;
      this.fields = [
        {
          property: "innerHTML",
          title: "Text",
          inputMethod: "textfield",
        },
      ];
      this.tagsList = "span";
      this.value = { innerHTML: undefined };
      this.prompt = window.RichTextEditorPrompt.requestAvailability();
    }

    firstUpdated(changedProperties) {
      super.firstUpdated(changedProperties);
    }

    /**
     * determines which command based on values passed from prompt
     * (can be overriden for custom prompt  commands)
     *
     * @readonly
     */
    get promptCommand() {
      return this.toggledCommand && !this.toggled
        ? this.toggledCommand
        : this.command;
    }

    /**
     * determines commandVal based on values passed from prompt
     * (can be overriden for custom prompt command values)
     */
    get promptCommandVal() {
      return this.commandVal;
    }
    /**
     * determines if prompt also sets innerHTML of range
     * (can be overriden for custom prompts)
     */
    get setsInnerHTML() {
      let innerHTML = (this.fields || []).filter(
        (field) => field.property === "innerHTML"
      );
      return innerHTML && innerHTML.length > 0;
    }
    /**
     * override this custom function to perform a
     * custom operation when an element that matches the tags list is clicked
     *
     * @param {event} e click event
     */
    tagClickCallback(e = {}) {
      if (e.detail) {
        this.selectNode(e.detail);
        this.open(e.detail);
      }
    }

    /**
     * closes without updates
     */
    cancel() {
      this.close();
    }
    /**
     * closes prompt
     * @event rich-text-editor-prompt-closed
     *
     */
    close() {
      this.dispatchEvent(
        new CustomEvent("rich-text-editor-prompt-closed", {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: this,
        })
      );
    }

    /**
     * updates insertion based on fields
     */
    confirm(val) {
      this.close();
      this.value = val;
      this.update();
      this.setToggled();
      this.promptCommandVal;
      this.updateSelection();
    }
    /**
     * expands selection to include this.tags
     *
     */
    expandSelection() {
      let element = this.rangeQuery();
      if (!!element) {
        this.highlightNode(element);
        this.selectedNode = element;
      }
    }
    /**
     * if selection is a node, gets node innerHTML
     *
     * @returns {string}
     */
    getInnerHTML() {
      let target =
          this.range && this.range.cloneContents
            ? this.range.cloneContents()
            : undefined,
        root = this.rangeElement() ? this.rangeElement() : undefined,
        temp,
        html;

      if (this.rangeIsElement()) {
        html = root ? root.innerHTML : undefined;
      } else {
        temp = document.createElement("span");
        if (target) temp.appendChild(target);
        html = temp.innerHTML;
        temp.remove();
      }
      return html;
    }

    /**
     * gets a field value (and trims it if it's a string)
     *
     * @param {string} prop field name
     * @returns {*}
     * @memberof RichTextEditorPrompt
     */
    getPropValue(prop) {
      let val = !!this.value ? this.value : false,
        rawVal =
          !val || !val[prop]
            ? false
            : val[prop].trim
            ? val[prop].trim()
            : val[prop];
      return rawVal && rawVal !== "" ? rawVal : false;
    }

    /**
     * gets value for prompt based on current selection
     * (can be overriden for custom prompt field values)
     */
    getValue(node) {
      return { innerHTML: this.getInnerHTML() || "" };
    }

    /**
     * Handles selecting text and opening prompt
     * @param {object} node optional node to select instead of range
     * @event rich-text-editor-prompt-open
     */
    open() {
      this.expandSelection();
      this.highlight();
      this.value = this.getValue();
      this.dispatchEvent(
        new CustomEvent("rich-text-editor-prompt-open", {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: this,
        })
      );
    }
    /**
     * sets inner HTML of selection
     *
     * @param {string} html
     */
    setInnerHTML(html) {
      let target = this.rangeElement();
      if (target && this.rangeIsElement()) {
        target.innerHTML = html;
      } else if (this.range) {
        this.sendCommand("insertHTML", html);
      }
    }
    /**
     * updates toggled based on values passed from prompt
     * (can be overriden for custom toggled state)
     */
    setToggled() {
      this.toggled = !this.value;
    }
    /**
     * updates selection based on values passed from prompt
     */
    updateSelection() {
      let parent = this.range.commonAncestorContainer;
      if (this.rangeIsElement()) {
        if (this.setsInnerHTML)
          this.setInnerHTML(this.getPropValue("innerHTML"));
        this.sendCommand(this.promptCommand, this.promptCommandVal);
      } else {
        this.sendCommand(this.promptCommand, this.promptCommandVal);
        if (this.setsInnerHTML)
          this.setInnerHTML(this.getPropValue("innerHTML"));
      }
      this.range.collapse();
      parent.normalize();
    }

    /**
     * Handles button tap
     * @param {event} e button tap event
     */
    _handleClick(e) {
      e.preventDefault();
      this.open();
    }

    /**
     * Handles range change
     * @param {event} e button tap event
     */
    _rangeChanged(newVal, oldVal) {
      this.value = this.getValue();
      this.setToggled();
    }
  };
};
/**
 * `rich-text-editor-prompt-button`
 * prompts for more information for rich text editor
 * (custom buttons can extend RichTextEditorPromptButtonBehaviors)
 *
 * @extends RichTextEditorPromptButtonBehaviors
 * @extends LitElement
 * @customElement
 * @lit-html
 * @lit-element
 * @element rich-text-editor-prompt-button
 * @demo ./demo/buttons.html
 */
class RichTextEditorPromptButton extends RichTextEditorPromptButtonBehaviors(
  LitElement
) {}
window.customElements.define(
  RichTextEditorPromptButton.tag,
  RichTextEditorPromptButton
);
export { RichTextEditorPromptButton, RichTextEditorPromptButtonBehaviors };
