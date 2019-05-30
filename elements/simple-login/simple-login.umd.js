!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("@polymer/polymer/polymer-element.js"),require("@polymer/polymer/lib/utils/render-status.js"),require("@polymer/paper-button/paper-button.js"),require("@polymer/paper-input/paper-input.js"),require("@polymer/paper-progress/paper-progress.js"),require("@polymer/paper-styles/shadow.js"),require("@polymer/paper-styles/typography.js"),require("@polymer/paper-styles/color.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@polymer/polymer/lib/utils/render-status.js","@polymer/paper-button/paper-button.js","@polymer/paper-input/paper-input.js","@polymer/paper-progress/paper-progress.js","@polymer/paper-styles/shadow.js","@polymer/paper-styles/typography.js","@polymer/paper-styles/color.js"],n):n((e=e||self).SimpleLogin={},e.polymerElement_js,e.renderStatus_js)}(this,function(e,n,r){"use strict";function t(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function o(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,n){return(p=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,n,r){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,r){var t=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=i(e)););return e}(e,n);if(t){var o=Object.getOwnPropertyDescriptor(t,n);return o.get?o.get.call(r):o.value}})(e,n,r||e)}function a(){var e,n,r=(e=['\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n#loginform {\n    width: 450px;\n    height: 450px;\n    background: var(--login-form-background-color, white);\n    @apply --shadow-elevation-12dp;\n    @apply --login-form;\n}\n\n#loginformcontent {\n    padding: 48px;\n}\n\n#loginformcontent>* {\n    margin-top: 8px;\n    margin-bottom: 8px;\n}\n\n#loginbtn,\n#buttons ::slotted(paper-button) {\n    margin-top: 24px;\n    background-color: var(--login-btn-background-color, var(--paper-indigo-500));\n    color: var(--login-btn-text-color, white);\n    --paper-button-raised-keyboard-focus: {\n        background-color: var(--login-btn-raised-background-color, var(--paper-pink-a200)) !important;\n        color: var(--login-btn-text-color, white) !important;\n    };\n    @apply --login-btn;\n}\n\n#loginbtn[disabled] {\n    background-color: var(--login-btn-disabled-background-color, var(--paper-indigo-100));\n}\n\nh1 {\n    @apply --paper-font-display1;\n    margin: 0;\n    @apply --login-title;\n}\n\nh2 {\n    @apply --paper-font-title;\n    margin: 0;\n    @apply --login-subtitle;\n}\n\npaper-progress {\n    width: 100%;\n}\n\n#errormsg {\n    margin-top: 16px;\n    color: var(--login-error-label-color, var(--error-color));\n    @apply --paper-font-menu;\n}</style>\n<div id="loginform">\n  <paper-progress disabled="[[!loading]]" indeterminate></paper-progress>\n  <div id="loginformcontent">\n    <h1>[[title]]</h1>\n    <h2>[[subtitle]]</h2>\n    <div id="errormsg">[[errorMsg]]</div>\n    <slot></slot>\n    <paper-input id="userinput" value="{{username}}" disabled="[[loading]]" type="text" label="[[userInputLabel]]"\n      required error-message="[[userInputErrMsg]]"></paper-input>\n    <paper-input id="passinput" value="{{password}}" disabled="[[loading]]" type="password"\n      label="[[passwordInputLabel]]" required error-message="[[passwordInputErrMsg]]"></paper-input>\n    <paper-button on-click="_login" disabled="[[loading]]" id="loginbtn" raised class="indigo">[[loginBtnText]]\n    </paper-button>\n    <span id="buttons"><slot name="buttons"></slot></span>\n  </div>\n</div>'],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return a=function(){return r},r}var u=function(e){function t(){var e,n,o;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,e=!(o=i(t).call(this))||"object"!=typeof o&&"function"!=typeof o?l(n):o,r.afterNextRender(l(e),function(){this.shadowRoot.querySelector("#loginform").addEventListener("keypress",this._keyPressLogin.bind(this))}),e}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&p(e,n)}(t,n.PolymerElement),o(t,null,[{key:"template",get:function(){return n.html(a())}},{key:"properties",get:function(){return{title:String,subtitle:String,errorMsg:String,username:{type:String,notify:!0},password:{type:String,notify:!0},loading:{type:Boolean,value:!1},userInputLabel:{type:String,value:"Username"},userInputErrMsg:{type:String,value:"Username required"},passwordInputLabel:{type:String,value:"Password"},passwordInputErrMsg:{type:String,value:"Password required"},loginBtnText:{type:String,value:"Login"}}}},{key:"tag",get:function(){return"simple-login"}}]),o(t,[{key:"disconnectedCallback",value:function(){this.shadowRoot.querySelector("#loginform").removeEventListener("keypress",this._keyPressLogin.bind(this)),s(i(t.prototype),"disconnectedCallback",this).call(this)}},{key:"_keyPressLogin",value:function(e){if(13==e.keyCode)return this._login(),!1}},{key:"_login",value:function(){this.shadowRoot.querySelector("#userinput").validate()&&this.shadowRoot.querySelector("#passinput").validate()&&this.dispatchEvent(new CustomEvent("simple-login-login",{cancelable:!0,bubbles:!0,composed:!0,detail:{u:this.shadowRoot.querySelector("#userinput").value,p:this.shadowRoot.querySelector("#passinput").value}}))}}]),t}();window.customElements.define(u.tag,u),e.SimpleLogin=u,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=simple-login.umd.js.map