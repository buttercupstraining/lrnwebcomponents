!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("@lrnwebcomponents/haxcms-elements/lib/ui-components/active-item/site-git-corner.js"),require("@lrnwebcomponents/haxcms-elements/lib/ui-components/active-item/site-active-title.js"),require("@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-title.js"),require("@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-print-button.js"),require("@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-menu-button.js"),require("@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-menu.js"),require("@polymer/app-layout/app-drawer-layout/app-drawer-layout.js"),require("@polymer/app-layout/app-drawer/app-drawer.js"),require("lit-element/lit-element.js"),require("@lrnwebcomponents/haxcms-elements/lib/core/HAXCMSLitElementTheme.js"),require("@lrnwebcomponents/simple-colors/simple-colors.js"),require("@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js"),require("mobx"),require("@polymer/polymer/lib/elements/custom-style.js")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/haxcms-elements/lib/ui-components/active-item/site-git-corner.js","@lrnwebcomponents/haxcms-elements/lib/ui-components/active-item/site-active-title.js","@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-title.js","@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-print-button.js","@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-menu-button.js","@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-menu.js","@polymer/app-layout/app-drawer-layout/app-drawer-layout.js","@polymer/app-layout/app-drawer/app-drawer.js","lit-element/lit-element.js","@lrnwebcomponents/haxcms-elements/lib/core/HAXCMSLitElementTheme.js","@lrnwebcomponents/simple-colors/simple-colors.js","@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js","mobx","@polymer/polymer/lib/elements/custom-style.js"],n):n((e=e||self).OutlinePlayer={},null,null,null,null,null,null,null,null,e.litElement_js,e.HAXCMSLitElementTheme_js,e.simpleColors_js,e.haxcmsSiteStore_js,e.mobx)}(this,function(e,n,t,o,r,i,l,a,s,c,p,u,d,m){"use strict";function f(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(e,n,t){return n&&f(e.prototype,n),t&&f(e,t),e}function b(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,o)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(Object(t),!0).forEach(function(n){b(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,n){return(v=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function x(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function j(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var t,o=w(e);if(n){var r=w(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return x(this,t)}}function O(e,n,t){return(O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var o=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=w(e)););return e}(e,n);if(o){var r=Object.getOwnPropertyDescriptor(o,n);return r.get?r.get.call(t):r.value}})(e,n,t||e)}function k(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function _(e){return function(e){if(Array.isArray(e))return S(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return S(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return S(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}function P(){var e=k(['\n      <custom-style>\n        <style>\n          app-drawer {\n            box-shadow: 0 0 6px -3px var(--outline-player-dark);\n            overflow: hidden;\n            --app-drawer-scrim-background: rgba(80, 80, 80, 0.8);\n            --app-drawer-content-container: {\n              overflow: hidden;\n            }\n          }\n          site-menu {\n            height: calc(100vh - 64px);\n            color: #000000;\n            padding: 0;\n            background-color: #ffffff;\n            --site-menu-active-color: rgba(0, 0, 0, 0.1);\n            --site-menu-scrolltrack-bg-color: rgba(0, 0, 0, 0.3);\n            --site-menu-bg-shadow: rgba(0, 0, 0, 0.3);\n            --site-menu-bg-color: #fafafa;\n            --site-menu-padding: 0;\n            --site-menu-background-color: #ffffff;\n            --site-menu-color: #000000;\n\n            --site-menu-container-padding: 0;\n            --site-menu-container-background-color: #ffffff;\n            --site-menu-container-color: #000000;\n\n            --site-menu-item-active-item-color: #000000;\n          }\n          site-menu-button {\n            --site-menu-button-button-hover-background-color: rgba(\n              0,\n              0,\n              0,\n              0.2\n            );\n            --site-menu-button-button: {\n              border-radius: 50%;\n              background-color: rgba(0, 0, 0, 0.1);\n              height: 40px;\n              width: 40px;\n            }\n          }\n        </style>\n      </custom-style>\n      <app-drawer-layout\n        .narrow="','"\n        @narrow-changed="','"\n      >\n        <app-drawer\n          id="drawer"\n          swipe-open=""\n          slot="drawer"\n          .opened="','"\n          @opened-changed="','"\n        >\n          <div id="menubuttoncontainer">\n            <site-print-button></site-print-button>\n            <site-menu-button\n              type="prev"\n              position="bottom"\n              raised\n            ></site-menu-button>\n            <site-menu-button\n              type="next"\n              position="bottom"\n              raised\n            ></site-menu-button>\n          </div>\n          <site-menu></site-menu>\n        </app-drawer>\n        <div id="content">\n          <site-git-corner></site-git-corner>\n          <paper-icon-button\n            icon="menu"\n            id="menutoggle"\n            @click="','"\n          ></paper-icon-button>\n          <site-active-title></site-active-title>\n          <div><slot name="title"></slot></div>\n          <div id="contentcontainer">\n            <div id="slot"><slot></slot></div>\n          </div>\n        </div>\n      </app-drawer-layout>\n    ']);return P=function(){return e},e}function q(){var e=k(["\n        :host {\n          display: block;\n          font-family: libre baskerville;\n          position: relative;\n          overflow: hidden;\n          --outline-player-min-height: 100vh;\n          --app-drawer-width: 300px;\n          --outline-player-dark: #222222;\n          --outline-player-light: #f8f8f8;\n          background-color: var(--outline-player-light);\n        }\n\n        :host([closed]) {\n          --app-drawer-width: 0px;\n        }\n\n        :host,\n        :host * ::slotted(*) {\n          line-height: 1.8;\n        }\n        :host ul,\n        :host * ::slotted(ul),\n        :host ol,\n        :host * ::slotted(ol) {\n          padding-left: 20px;\n          margin-left: 20px;\n        }\n        :host ul,\n        :host * ::slotted(ul) {\n          list-style-type: disc;\n        }\n        :host li,\n        :host * ::slotted(li) {\n          margin-bottom: 6px;\n        }\n\n        h1 {\n          font-size: 48px;\n          line-height: 16px;\n        }\n\n        h2 {\n          font-size: 32px;\n        }\n\n        h3 {\n          font-size: 28px;\n        }\n\n        p {\n          line-height: 26px;\n          min-height: 26px;\n        }\n\n        a,\n        a:visited,\n        a:active {\n          color: #000;\n        }\n\n        a:hover {\n          color: #2196f3;\n        }\n\n        ul li {\n          padding-bottom: 24px;\n          line-height: 1.5;\n          color: #424242;\n          max-width: 448px;\n        }\n\n        ul li:last-child {\n          padding-bottom: 16px;\n        }\n\n        app-drawer-layout {\n          min-height: 100vh;\n          min-height: -moz-available; /* WebKit-based browsers will ignore this. */\n          min-height: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */\n          min-height: fill-available;\n          /* if the user has set a specific value then override the defaults */\n          min-height: var(--outline-player-min-height);\n        }\n\n        outline-player-navigation {\n          --outline-player-dark: var(--outline-player-dark);\n        }\n\n        div[main-title] {\n          margin-left: 8px;\n          font-size: 16px;\n          line-height: 22px;\n          overflow-wrap: break-word;\n          text-overflow: ellipsis;\n          display: inline-block;\n          word-break: break-word;\n        }\n        app-drawer-layout[narrow] #contentcontainer {\n          padding-top: 64px;\n        }\n        #content {\n          padding: 8px 8px 8px 64px;\n        }\n        #menutoggle {\n          display: block;\n          float: left;\n          margin-right: 16px;\n        }\n\n        /* Required for HAX */\n        :host([edit-mode]) #slot {\n          display: none !important;\n        }\n        :host([edit-mode]) #contentcontainer {\n          padding: 32px 8px 8px 8px;\n        }\n        :host([is-logged-in]) app-drawer,\n        :host([is-logged-in]) app-drawer-layout[narrow] {\n          left: 48px;\n        }\n        #contentcontainer {\n          max-width: 840px;\n          display: block;\n          margin: 0;\n          padding: 0 16px 16px 16px;\n          flex: none;\n          transition: 0.5s opacity ease-in-out;\n        }\n        #contentcontainer h-a-x {\n          margin: 0;\n        }\n        #menubuttoncontainer {\n          display: flex;\n          justify-content: center;\n          padding: 8px 0 0 0;\n        }\n        site-menu-button {\n          display: inline-flex;\n        }\n        site-print-button {\n          display: inline-flex;\n          margin-right: 20px;\n        }\n        site-active-title {\n          --site-active-title-margin: 0px;\n          --site-active-title-padding: 0px;\n          margin: 10px;\n          padding: 10px;\n          display: block;\n        }\n        @media screen and (max-width: 800px) {\n          :host([edit-mode][is-logged-in]) app-drawer,\n          :host([edit-mode][is-logged-in]) app-drawer-layout[narrow] {\n            left: 0;\n          }\n        }\n        @media screen and (max-width: 640px) {\n          #content {\n            padding: 8px 8px 8px 8px;\n          }\n        }\n      "]);return q=function(){return e},e}var C=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&v(e,n)}(t,u.SimpleColorsSuper(p.HAXCMSLitElementTheme));var n=j(t);function t(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),(e=n.call(this)).__disposer=[],e.closed=!1,e}return h(t,null,[{key:"styles",get:function(){return[].concat(_(O(w(t),"styles",this)),[c.css(q())])}},{key:"tag",get:function(){return"outline-player"}}]),h(t,[{key:"render",value:function(){return c.html(P(),this.narrow,this._narrowChanged,this.opened,this._openedChanged,this._toggleMenu)}},{key:"_narrowChanged",value:function(e){this.narrow=e.detail.value}},{key:"_openedChanged",value:function(e){this.opened=e.detail.value}},{key:"updated",value:function(e){var n=this;O(w(t.prototype),"updated",this)&&O(w(t.prototype),"updated",this).call(this,e),e.forEach(function(e,t){"activeId"==t&&n._activeIdChanged(n[t],e),"closed"==t&&n.dispatchEvent(new CustomEvent("closed-changed",{detail:{value:n[t]}}))})}},{key:"_toggleMenu",value:function(e){this.shadowRoot.querySelector("#drawer").toggle(),this.closed=!this.shadowRoot.querySelector("#drawer").opened,window.dispatchEvent(new Event("resize"))}},{key:"_activeIdChanged",value:function(e,n){this.opened&&this.narrow&&this.shadowRoot.querySelector("#drawer").toggle(),window.scrollTo({top:0,left:0,behavior:"smooth"})}},{key:"firstUpdated",value:function(e){var n=this;O(w(t.prototype),"firstUpdated",this)&&O(w(t.prototype),"firstUpdated",this).call(this,e),m.autorun(function(e){n.activeId=m.toJS(d.store.activeId),n.__disposer.push(e)})}},{key:"disconnectedCallback",value:function(){for(var e in this.__disposer)this.__disposer[e].dispose();O(w(t.prototype),"disconnectedCallback",this).call(this)}}],[{key:"properties",get:function(){return g(g({},O(w(t),"properties",this)),{},{opened:{type:Boolean,reflect:!0},closed:{type:Boolean,reflect:!0},activeId:{type:String},narrow:{type:Boolean,reflect:!0}})}}]),t}();window.customElements.define(C.tag,C),e.OutlinePlayer=C,Object.defineProperty(e,"__esModule",{value:!0})});
