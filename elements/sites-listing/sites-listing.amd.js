define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js","./node_modules/@polymer/iron-ajax/iron-ajax.js","./node_modules/@polymer/iron-list/iron-list.js","./node_modules/@polymer/paper-button/paper-button.js","./node_modules/@lrnwebcomponents/elmsln-loading/elmsln-loading.js","./lib/site-card.js"],function(_exports,_polymerLegacy,_polymerDom,_ironAjax,_ironList,_paperButton,_elmslnLoading,_siteCard){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.SitesListing=void 0;function _templateObject_e3802aa02fe311e9a2ba81e1b02fb83d(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        height: 100vh;\n        display: flex;\n        flex-direction: column;\n      }\n      iron-list {\n        flex: 1 1 auto;\n      }\n      #loading {\n        width: 100%;\n        z-index: 1000;\n        opacity: 0.8;\n        padding: 16px;\n        text-align: center;\n        align-content: center;\n        justify-content: center;\n        height: 100vh;\n        position: absolute;\n        background-color: rgba(250, 250, 250, 0.8);\n        transition: all linear 0.8s;\n        visibility: visible;\n      }\n      #loading div {\n        font-size: 32px;\n        font-weight: bold;\n        padding: 16px;\n      }\n      #loading[data-loading] {\n        background-color: rgba(0, 0, 0, 0);\n        opacity: 0;\n        visibility: hidden;\n      }\n      site-card {\n        padding: 16px;\n        font-size: 16px;\n      }\n      paper-button.site-card-wrapper {\n        margin: 0;\n        padding: 0;\n      }\n    </style>\n    <iron-ajax\n      id=\"loaddata\"\n      auto=\"\"\n      loading=\"{{__loading}}\"\n      url=\"[[dataSource]]\"\n      handle-as=\"json\"\n      debounce-duration=\"250\"\n      last-response=\"{{sitesResponse}}\"\n    ></iron-ajax>\n    <div id=\"loading\" data-loading$=\"[[!__loading]]\">\n      <elmsln-loading size=\"large\"></elmsln-loading>\n      <div>Loading..</div>\n    </div>\n    <iron-list id=\"list\" items=\"[[sites]]\" as=\"site\" grid=\"\">\n      <template>\n        <paper-button\n          on-focusin=\"_mouseEnter\"\n          on-focusout=\"_mouseLeave\"\n          data-site-id$=\"[[site.id]]\"\n          class=\"site-card-wrapper\"\n          on-tap=\"_siteClicked\"\n        >\n          <site-card\n            data-site-id$=\"[[site.id]]\"\n            size=\"[[size]]\"\n            image=\"[[site.metadata.image]]\"\n            icon=\"[[site.metadata.icon]]\"\n            name=\"[[site.title]]\"\n            title=\"[[site.description]]\"\n            elevation=\"2\"\n          ></site-card>\n        </paper-button>\n      </template>\n    </iron-list>\n  "],["\n    <style>\n      :host {\n        height: 100vh;\n        display: flex;\n        flex-direction: column;\n      }\n      iron-list {\n        flex: 1 1 auto;\n      }\n      #loading {\n        width: 100%;\n        z-index: 1000;\n        opacity: 0.8;\n        padding: 16px;\n        text-align: center;\n        align-content: center;\n        justify-content: center;\n        height: 100vh;\n        position: absolute;\n        background-color: rgba(250, 250, 250, 0.8);\n        transition: all linear 0.8s;\n        visibility: visible;\n      }\n      #loading div {\n        font-size: 32px;\n        font-weight: bold;\n        padding: 16px;\n      }\n      #loading[data-loading] {\n        background-color: rgba(0, 0, 0, 0);\n        opacity: 0;\n        visibility: hidden;\n      }\n      site-card {\n        padding: 16px;\n        font-size: 16px;\n      }\n      paper-button.site-card-wrapper {\n        margin: 0;\n        padding: 0;\n      }\n    </style>\n    <iron-ajax\n      id=\"loaddata\"\n      auto=\"\"\n      loading=\"{{__loading}}\"\n      url=\"[[dataSource]]\"\n      handle-as=\"json\"\n      debounce-duration=\"250\"\n      last-response=\"{{sitesResponse}}\"\n    ></iron-ajax>\n    <div id=\"loading\" data-loading\\$=\"[[!__loading]]\">\n      <elmsln-loading size=\"large\"></elmsln-loading>\n      <div>Loading..</div>\n    </div>\n    <iron-list id=\"list\" items=\"[[sites]]\" as=\"site\" grid=\"\">\n      <template>\n        <paper-button\n          on-focusin=\"_mouseEnter\"\n          on-focusout=\"_mouseLeave\"\n          data-site-id\\$=\"[[site.id]]\"\n          class=\"site-card-wrapper\"\n          on-tap=\"_siteClicked\"\n        >\n          <site-card\n            data-site-id\\$=\"[[site.id]]\"\n            size=\"[[size]]\"\n            image=\"[[site.metadata.image]]\"\n            icon=\"[[site.metadata.icon]]\"\n            name=\"[[site.title]]\"\n            title=\"[[site.description]]\"\n            elevation=\"2\"\n          ></site-card>\n        </paper-button>\n      </template>\n    </iron-list>\n  "]);_templateObject_e3802aa02fe311e9a2ba81e1b02fb83d=function _templateObject_e3802aa02fe311e9a2ba81e1b02fb83d(){return data};return data}var SitesListing=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_e3802aa02fe311e9a2ba81e1b02fb83d()),is:"sites-listing",properties:{sitesResponse:{type:Object,notify:!0,observer:"_sitesResponseChanged"},sites:{type:Array,notify:!0},size:{type:String,value:"large"},dataSource:{type:String},loadLocation:{type:Boolean,value:!1}},attached:function attached(){window.addEventListener("sites-listing-refresh-data",this.refreshData.bind(this))},detached:function detached(){window.removeEventListener("sites-listing-refresh-data",this.refreshData.bind(this))},refreshData:function refreshData(e){this.$.loaddata.generateRequest()},_sitesResponseChanged:function _sitesResponseChanged(newValue,oldValue){if(newValue){if(babelHelpers.typeof(newValue.items)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){this.set("sites",[]);this.set("sites",newValue.items);this.notifyPath("sites.*")}}},_siteClicked:function _siteClicked(e){var normalizedEvent=(0,_polymerDom.dom)(e),local=normalizedEvent.localTarget,active=local.getAttribute("data-site-id"),findSite=this.sites.filter(function(site){if(site.id!==active){return!1}return!0});if(0<findSite.length){findSite=findSite.pop()}if(this.loadLocation&&babelHelpers.typeof(findSite.location)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){window.location.href=findSite.location}this.fire("sites-listing-item-selected",findSite)},_mouseEnter:function _mouseEnter(e){var card=(0,_polymerDom.dom)(e.target).querySelectorAll("site-card")[0];card.__oldElevation=card.elevation;if(5<card.elevation+2){card.elevation=5}else{card.elevation+=2}},_mouseLeave:function _mouseLeave(e){var card=(0,_polymerDom.dom)(e.target).querySelectorAll("site-card")[0];card.elevation=card.__oldElevation}});_exports.SitesListing=SitesListing});