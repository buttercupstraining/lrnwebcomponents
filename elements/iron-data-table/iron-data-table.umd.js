!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-legacy.js"),require("@polymer/polymer/lib/legacy/polymer.dom.js"),require("@polymer/polymer/lib/utils/async.js"),require("@polymer/polymer/lib/utils/flattened-nodes-observer.js"),require("@polymer/iron-resizable-behavior/iron-resizable-behavior.js"),require("@polymer/polymer/lib/legacy/templatizer-behavior.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-legacy.js","@polymer/polymer/lib/legacy/polymer.dom.js","@polymer/polymer/lib/utils/async.js","@polymer/polymer/lib/utils/flattened-nodes-observer.js","@polymer/iron-resizable-behavior/iron-resizable-behavior.js","@polymer/polymer/lib/legacy/templatizer-behavior.js"],t):t((e=e||self).IronDataTable={},e.polymerLegacy_js,e.polymer_dom_js,e.async,e.flattenedNodesObserver_js,e.ironResizableBehavior_js,e.templatizerBehavior_js)}(this,function(e,t,n,i,a,o,s){"use strict";function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var d=document.createElement("div");function c(){var e=r(['\n    <template id="header">\n      <data-table-column-filter\n        label="[[column.name]]"\n        value="{{column.filterValue}}"\n        hidden$="[[!column.filterBy]]"\n      ></data-table-column-filter>\n      <div hidden$="[[column.filterBy]]">[[column.name]]</div>\n    </template>\n  '],['\n    <template id="header">\n      <data-table-column-filter\n        label="[[column.name]]"\n        value="{{column.filterValue}}"\n        hidden\\$="[[!column.filterBy]]"\n      ></data-table-column-filter>\n      <div hidden\\$="[[column.filterBy]]">[[column.name]]</div>\n    </template>\n  ']);return c=function(){return e},e}d.setAttribute("style","display: none;"),d.innerHTML='<dom-module id="data-table-column-filter">\n  <style is="custom-style">\n    :host([hidden]) {\n      display: none;\n    }\n\n    paper-input {\n      --paper-input-container: {\n        margin-bottom: 20px;\n      };\n      --paper-input-container-label: {\n        font-size: inherit;\n      }\n    }\n  </style>\n\n  <template>\n    <paper-input label="[[label]]" value="[[value]]" on-value-changed="_valueChanged"></paper-input>\n  </template>\n  \n</dom-module>',document.head.appendChild(d),t.Polymer({is:"data-table-column-filter",properties:{label:String,value:{type:String,notify:!0},hidden:Boolean},_valueChanged:function(e){var t=e.detail.value;this.debounce("value",function(){this.value=t}.bind(this),250)}}),t.Polymer({_template:t.html(c()),is:"data-table-column",properties:{alignRight:{type:Boolean,value:!1},name:{type:String,value:""},filterBy:String,filterValue:String,width:{type:String,value:"100px"},flex:{type:Number,value:1},hidden:{type:Boolean,value:!1},order:{type:Number,notify:!0},sortBy:{type:String},table:Object,headerTemplate:{type:Object,readOnly:!0,value:function(){var e=n.dom(this).querySelector("template[is=header]");if(e&&e.parentElement){var t=e.parentElement;return e._rootDataHost=t.dataHost._rootDataHost||t.dataHost,e}return n.dom(this.root).querySelector("#header")}},template:{type:Object,readOnly:!0,value:function(){var e=n.dom(this).querySelector("template:not([is=header])");if(e)return this.dataHost&&(e._rootDataHost=this.dataHost._rootDataHost||this.dataHost),e}}},observers:["_alignRightChanged(table, alignRight)","_filterValueChanged(table, filterValue, filterBy)","_filterByChanged(table, filterBy)","_flexChanged(table, flex)","_headerTemplateChanged(table, headerTemplate)","_hiddenChanged(table, hidden)","_nameChanged(table, name)","_orderChanged(table, order)","_sortByChanged(table, sortBy)","_templateChanged(table, template)","_widthChanged(table, width)"],_notifyTable:function(e,t,n){if(e.columns){var i=e.columns.indexOf(this);e.notifyPath("columns."+i+"."+t,n)}},_alignRightChanged:function(e,t){this._notifyTable(e,"alignRight",t)},_nameChanged:function(e,t){this._notifyTable(e,"name",t)},_sortByChanged:function(e,t){this._notifyTable(e,"sortBy",t)},_flexChanged:function(e,t){this._notifyTable(e,"flex",t)},_headerTemplateChanged:function(e,t){this._notifyTable(e,"headerTemplate",t)},_hiddenChanged:function(e,t){this._notifyTable(e,"hidden",t)},_orderChanged:function(e,t){this._notifyTable(e,"order",t)},_templateChanged:function(e,t){this._notifyTable(e,"template",t)},_widthChanged:function(e,t){this._notifyTable(e,"width",t)},_filterByChanged:function(e,t){this._notifyTable(e,"filterBy",t)},_filterValueChanged:function(e,t,n){this._notifyTable(e,"filterValue",t),this.fire("column-filter-changed",{value:t,filterBy:n})}});var h=document.createElement("div");function m(){var e=r(['\n    <style>\n      :host {\n        display: block;\n        margin: 4px;\n      }\n\n      :host([hidden]) {\n        display: none;\n      }\n\n      paper-icon-button {\n        position: relative;\n        opacity: 0.84;\n        transition: all 0.2s;\n      }\n\n      paper-icon-button:hover,\n      paper-icon-button[focused] {\n        color: var(--default-primary-color);\n      }\n\n      paper-icon-button:not([direction]) {\n        opacity: 0.16;\n      }\n\n      paper-icon-button[direction="desc"] {\n        transform: rotate(-180deg);\n      }\n\n      paper-icon-button[hidden] {\n        display: none;\n      }\n\n      .order {\n        font-size: 9px;\n        font-weight: bold;\n        position: absolute;\n        right: 4px;\n        bottom: 8px;\n      }\n    </style>\n\n    <div style="position: relative">\n      <paper-icon-button\n        id="sortIcon"\n        on-tap="_sort"\n        icon="data-table:arrow-upward"\n        direction$="[[direction]]"\n      >\n      </paper-icon-button>\n      <div class="order">[[order]]</div>\n    </div>\n  '],['\n    <style>\n      :host {\n        display: block;\n        margin: 4px;\n      }\n\n      :host([hidden]) {\n        display: none;\n      }\n\n      paper-icon-button {\n        position: relative;\n        opacity: 0.84;\n        transition: all 0.2s;\n      }\n\n      paper-icon-button:hover,\n      paper-icon-button[focused] {\n        color: var(--default-primary-color);\n      }\n\n      paper-icon-button:not([direction]) {\n        opacity: 0.16;\n      }\n\n      paper-icon-button[direction="desc"] {\n        transform: rotate(-180deg);\n      }\n\n      paper-icon-button[hidden] {\n        display: none;\n      }\n\n      .order {\n        font-size: 9px;\n        font-weight: bold;\n        position: absolute;\n        right: 4px;\n        bottom: 8px;\n      }\n    </style>\n\n    <div style="position: relative">\n      <paper-icon-button\n        id="sortIcon"\n        on-tap="_sort"\n        icon="data-table:arrow-upward"\n        direction\\$="[[direction]]"\n      >\n      </paper-icon-button>\n      <div class="order">[[order]]</div>\n    </div>\n  ']);return m=function(){return e},e}h.setAttribute("style","display: none;"),h.innerHTML='<iron-iconset-svg size="24" name="data-table">\n  <svg>\n    <defs>\n      <g id="arrow-upward"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></g>\n    </defs>\n  </svg>\n</iron-iconset-svg>',document.head.appendChild(h),t.Polymer({_template:t.html(m()),is:"data-table-column-sort",properties:{direction:{type:String,notify:!0},path:String,order:{type:Number,computed:"_order(path, sortOrder, sortOrder.length)"},sortOrder:Array},observers:["_sortOrderChanged(sortOrder.*)"],_order:function(e,t,n){if(n<=1)return"";for(var i=0;i<n;i++)if(t[i].path===e)return i+1},_sortOrderChanged:function(e){e.base&&e.base.forEach(function(e){e.path!==this.path||(this.direction=e.direction)}.bind(this))},_sort:function(){switch(this.direction){case"asc":this.direction="desc";break;case"desc":this.direction=null;break;default:this.direction="asc"}this.fire("sort-direction-changed",{path:this.path,direction:this.direction})}});var p=window.saulis||{};function u(){var e=r(["\n    <style>\n      :host {\n        flex: 1 0 100px;\n        padding: 0 24px 0 24px;\n        min-height: 10px; /* Prevent iron-list from looping when item height is really small */\n        height: 48px;\n        display: flex;\n        align-items: center;\n        overflow: hidden;\n        transition: flex-basis 200ms, flex-grow 200ms;\n      }\n\n      :host([header]) {\n        height: 56px;\n      }\n\n      :host([hidden]) {\n        display: none;\n      }\n    </style>\n    <slot></slot>\n  "]);return u=function(){return e},e}function f(){var e=r(['\n    <style is="custom-style">\n      :host {\n        display: flex;\n        flex-direction: column;\n        opacity: 1;\n        cursor: pointer;\n\n        @apply --iron-data-table-row;\n      }\n\n      :host([selected]) .cells {\n        @apply --iron-data-table-row-selected;\n      }\n\n      :host(:not([header])[even]) {\n        @apply --iron-data-table-row-even;\n      }\n\n      :host(:not([header]):not([even])) {\n        @apply --iron-data-table-row-odd;\n      }\n\n      :host(:focus) {\n        outline: none;\n        @apply --iron-data-table-row-focused;\n      }\n\n      :host(:not([header]):hover) {\n        @apply --iron-data-table-row-hover;\n      }\n\n      :host(:focus):after {\n        @apply --iron-data-table-row-focused-after;\n      }\n\n      :host:after {\n        @apply --iron-data-table-row-after;\n      }\n\n      .cells {\n        display: flex;\n        flex-direction: row;\n        width: 100%;\n      }\n    </style>\n    <div class="cells">\n      <slot name="data-table-checkbox"></slot>\n      <slot name="data-table-cell"></slot>\n    </div>\n    <div class="details"><slot name="data-table-row-detail"></slot></div>\n  ']);return f=function(){return e},e}function b(){var e=r(['\n    <style>\n      :host {\n        height: 48px;\n        flex-basis: 48px;\n        flex-grow: 0;\n        flex-shrink: 0;\n        padding: 0 8px 0 12px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border-right: 1px solid #e3e3e3;\n      }\n\n      :host([header]) {\n        height: 56px;\n      }\n\n      :host([hidden]) {\n        display: none;\n      }\n\n      :host(:focus) {\n        outline: none;\n      }\n\n      #container {\n        position: relative;\n        box-sizing: border-box;\n        height: 18px;\n        width: 18px;\n        border: solid 2px;\n        border-color: var(--primary-text-color);\n        border-radius: 2px;\n        pointer-events: none;\n        -webkit-transition: background-color 140ms, border-color 140ms;\n        transition: background-color 140ms, border-color 140ms;\n      }\n\n      :host([checked]) #container {\n        border-color: var(--default-primary-color);\n        background-color: var(--default-primary-color);\n      }\n\n      :host([checked]) .checkmark {\n        border-bottom: 2px solid white;\n        border-right: 2px solid white;\n        width: 36%;\n        height: 70%;\n        -webkit-transform-origin: 97% 86%;\n        transform-origin: 97% 86%;\n        -webkit-animation: checkmark-expand 140ms ease-out forwards;\n        animation: checkmark-expand 140ms ease-out forwards;\n      }\n\n      @-webkit-keyframes checkmark-expand {\n        0% {\n          -webkit-transform: scale(0, 0) rotate(45deg);\n        }\n        100% {\n          -webkit-transform: scale(1, 1) rotate(45deg);\n        }\n      }\n\n      @keyframes checkmark-expand {\n        0% {\n          transform: scale(0, 0) rotate(45deg);\n        }\n        100% {\n          transform: scale(1, 1) rotate(45deg);\n        }\n      }\n\n      :host([indeterminate]) .checkmark {\n        border-bottom: 2px solid var(--primary-text-color);\n        width: 60%;\n        height: 45%;\n        margin-left: 3px;\n        -webkit-animation: indeterminate-expand 140ms ease-out forwards;\n        animation: indeterminate-expand 140ms ease-out forwards;\n      }\n\n      @-webkit-keyframes indeterminate-expand {\n        0% {\n          -webkit-transform: scale(0, 0);\n        }\n        100% {\n          -webkit-transform: scale(1, 1);\n        }\n      }\n\n      @keyframes indeterminate-expand {\n        0% {\n          transform: scale(0, 1);\n        }\n        100% {\n          transform: scale(1, 1);\n        }\n      }\n    </style>\n\n    <div id="container"><div class="checkmark"></div></div>\n  ']);return b=function(){return e},e}function g(){var e=r(["\n    <style>\n      :host {\n        padding: 0 24px 0 24px;\n        display: flex;\n        align-items: center;\n      }\n    </style>\n    <slot></slot>\n  "]);return g=function(){return e},e}function _(){var e=r(['\n    <style is="custom-style">\n      :host {\n        display: block;\n        position: relative;\n        overflow-x: auto;\n        overflow-y: hidden;\n        -webkit-overflow-scrolling: touch;\n        /* Default height just to help users get started in making stuff visible.  */\n        height: 400px;\n        @apply --iron-data-table;\n      }\n\n      #container {\n        position: absolute;\n        left: 0;\n        top: 0;\n        bottom: 0;\n        display: flex;\n        flex-direction: column;\n      }\n\n      #header {\n        box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);\n        transition: box-shadow 200ms;\n        -webkit-transition: box-shadow 200ms;\n        z-index: 1;\n        @apply --iron-data-table-header;\n      }\n\n      #header.scrolled {\n        box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06), 0 2px 0 rgba(0, 0, 0, 0.075),\n          0 3px 0 rgba(0, 0, 0, 0.05), 0 4px 0 rgba(0, 0, 0, 0.015);\n      }\n\n      #list {\n        overflow-x: hidden !important;\n        overflow-y: auto !important;\n        flex: 1;\n        transition: opacity 200ms;\n        -webkit-transition: opacity 200ms;\n      }\n\n      :host([loading]) #list {\n        opacity: 0.25;\n      }\n\n      :host(:not([loading])) paper-spinner-lite {\n        display: none;\n      }\n\n      :host([loading]) paper-spinner-lite {\n        position: absolute;\n        top: 45%;\n        left: 50%;\n        --paper-spinner-color: var(--default-primary-color);\n      }\n    </style>\n    <div id="container">\n      <div id="header">\n        <data-table-row header="">\n          <data-table-checkbox\n            header=""\n            hidden$="[[!multiSelection]]"\n            on-tap="_toggleSelectAll"\n            checked="[[_isSelectAllChecked(selectedItems.length, selectedItems.inverted, size)]]"\n            indeterminate="[[_isSelectAllIndeterminate(selectedItems.length, size)]]"\n          ></data-table-checkbox>\n          <template is="dom-repeat" items="[[columns]]" as="column">\n            <data-table-cell\n              header=""\n              align-right="[[column.alignRight]]"\n              before-bind="[[beforeCellBind]]"\n              column="[[column]]"\n              flex="[[column.flex]]"\n              hidden="[[column.hidden]]"\n              order="[[column.order]]"\n              table="[[_this]]"\n              template="[[column.headerTemplate]]"\n              width="[[column.width]]"\n            >\n              <data-table-column-sort\n                sort-order="[[sortOrder]]"\n                path="[[column.sortBy]]"\n                on-sort-direction-changed="_sortDirectionChanged"\n                hidden$="[[!column.sortBy]]"\n              ></data-table-column-sort>\n            </data-table-cell>\n          </template>\n        </data-table-row>\n      </div>\n\n      <iron-list\n        id="list"\n        as="item"\n        items="[[_cachedItems]]"\n        on-scroll="_onVerticalScroll"\n      >\n        <template>\n          <div class="item">\n            <data-table-row\n              before-bind="[[beforeRowBind]]"\n              even$="[[!_isEven(index)]]"\n              expanded="[[_isExpanded(item, _expandedItems, _expandedItems.*)]]"\n              index="[[index]]"\n              item="[[item]]"\n              tabindex="-1"\n              selected="[[_isSelected(item, selectedItems, selectedItems.*)]]"\n            >\n              <data-table-checkbox\n                hidden$="[[!multiSelection]]"\n                tabindex="0"\n                checked="[[_isSelected(item, selectedItems, selectedItems.*)]]"\n                on-tap="_onCheckBoxTap"\n              ></data-table-checkbox>\n              <template\n                is="dom-repeat"\n                items="[[columns]]"\n                as="column"\n                index-as="colIndex"\n              >\n                <data-table-cell\n                  template="[[column.template]]"\n                  table="[[_this]]"\n                  align-right="[[column.alignRight]]"\n                  column="[[column]]"\n                  expanded="[[_isExpanded(item, _expandedItems, _expandedItems.*)]]"\n                  flex="[[column.flex]]"\n                  hidden="[[column.hidden]]"\n                  index="[[index]]"\n                  item="[[item]]"\n                  on-click="_onCellClick"\n                  order="[[column.order]]"\n                  selected="[[_isSelected(item, selectedItems, selectedItems.*)]]"\n                  width="[[column.width]]"\n                  before-bind="[[beforeCellBind]]"\n                ></data-table-cell>\n              </template>\n              <template\n                is="dom-if"\n                if="[[_isExpanded(item, _expandedItems)]]"\n                on-dom-change="_updateSizeForItem"\n              >\n                <data-table-row-detail\n                  index="[[index]]"\n                  item="[[item]]"\n                  expanded="[[_isExpanded(item, _expandedItems, _expandedItems.*)]]"\n                  selected="[[_isSelected(item, selectedItems, selectedItems.*)]]"\n                  before-bind="[[beforeDetailsBind]]"\n                  table="[[_this]]"\n                  template="[[rowDetail]]"\n                ></data-table-row-detail>\n              </template>\n            </data-table-row>\n          </div>\n        </template>\n      </iron-list>\n    </div>\n    <paper-spinner-lite active=""></paper-spinner-lite>\n    <slot name="data-table-column"></slot>\n    <slot name="template[is=row-detail]"></slot>\n  '],['\n    <style is="custom-style">\n      :host {\n        display: block;\n        position: relative;\n        overflow-x: auto;\n        overflow-y: hidden;\n        -webkit-overflow-scrolling: touch;\n        /* Default height just to help users get started in making stuff visible.  */\n        height: 400px;\n        @apply --iron-data-table;\n      }\n\n      #container {\n        position: absolute;\n        left: 0;\n        top: 0;\n        bottom: 0;\n        display: flex;\n        flex-direction: column;\n      }\n\n      #header {\n        box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);\n        transition: box-shadow 200ms;\n        -webkit-transition: box-shadow 200ms;\n        z-index: 1;\n        @apply --iron-data-table-header;\n      }\n\n      #header.scrolled {\n        box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06), 0 2px 0 rgba(0, 0, 0, 0.075),\n          0 3px 0 rgba(0, 0, 0, 0.05), 0 4px 0 rgba(0, 0, 0, 0.015);\n      }\n\n      #list {\n        overflow-x: hidden !important;\n        overflow-y: auto !important;\n        flex: 1;\n        transition: opacity 200ms;\n        -webkit-transition: opacity 200ms;\n      }\n\n      :host([loading]) #list {\n        opacity: 0.25;\n      }\n\n      :host(:not([loading])) paper-spinner-lite {\n        display: none;\n      }\n\n      :host([loading]) paper-spinner-lite {\n        position: absolute;\n        top: 45%;\n        left: 50%;\n        --paper-spinner-color: var(--default-primary-color);\n      }\n    </style>\n    <div id="container">\n      <div id="header">\n        <data-table-row header="">\n          <data-table-checkbox\n            header=""\n            hidden\\$="[[!multiSelection]]"\n            on-tap="_toggleSelectAll"\n            checked="[[_isSelectAllChecked(selectedItems.length, selectedItems.inverted, size)]]"\n            indeterminate="[[_isSelectAllIndeterminate(selectedItems.length, size)]]"\n          ></data-table-checkbox>\n          <template is="dom-repeat" items="[[columns]]" as="column">\n            <data-table-cell\n              header=""\n              align-right="[[column.alignRight]]"\n              before-bind="[[beforeCellBind]]"\n              column="[[column]]"\n              flex="[[column.flex]]"\n              hidden="[[column.hidden]]"\n              order="[[column.order]]"\n              table="[[_this]]"\n              template="[[column.headerTemplate]]"\n              width="[[column.width]]"\n            >\n              <data-table-column-sort\n                sort-order="[[sortOrder]]"\n                path="[[column.sortBy]]"\n                on-sort-direction-changed="_sortDirectionChanged"\n                hidden\\$="[[!column.sortBy]]"\n              ></data-table-column-sort>\n            </data-table-cell>\n          </template>\n        </data-table-row>\n      </div>\n\n      <iron-list\n        id="list"\n        as="item"\n        items="[[_cachedItems]]"\n        on-scroll="_onVerticalScroll"\n      >\n        <template>\n          <div class="item">\n            <data-table-row\n              before-bind="[[beforeRowBind]]"\n              even\\$="[[!_isEven(index)]]"\n              expanded="[[_isExpanded(item, _expandedItems, _expandedItems.*)]]"\n              index="[[index]]"\n              item="[[item]]"\n              tabindex="-1"\n              selected="[[_isSelected(item, selectedItems, selectedItems.*)]]"\n            >\n              <data-table-checkbox\n                hidden\\$="[[!multiSelection]]"\n                tabindex="0"\n                checked="[[_isSelected(item, selectedItems, selectedItems.*)]]"\n                on-tap="_onCheckBoxTap"\n              ></data-table-checkbox>\n              <template\n                is="dom-repeat"\n                items="[[columns]]"\n                as="column"\n                index-as="colIndex"\n              >\n                <data-table-cell\n                  template="[[column.template]]"\n                  table="[[_this]]"\n                  align-right="[[column.alignRight]]"\n                  column="[[column]]"\n                  expanded="[[_isExpanded(item, _expandedItems, _expandedItems.*)]]"\n                  flex="[[column.flex]]"\n                  hidden="[[column.hidden]]"\n                  index="[[index]]"\n                  item="[[item]]"\n                  on-click="_onCellClick"\n                  order="[[column.order]]"\n                  selected="[[_isSelected(item, selectedItems, selectedItems.*)]]"\n                  width="[[column.width]]"\n                  before-bind="[[beforeCellBind]]"\n                ></data-table-cell>\n              </template>\n              <template\n                is="dom-if"\n                if="[[_isExpanded(item, _expandedItems)]]"\n                on-dom-change="_updateSizeForItem"\n              >\n                <data-table-row-detail\n                  index="[[index]]"\n                  item="[[item]]"\n                  expanded="[[_isExpanded(item, _expandedItems, _expandedItems.*)]]"\n                  selected="[[_isSelected(item, selectedItems, selectedItems.*)]]"\n                  before-bind="[[beforeDetailsBind]]"\n                  table="[[_this]]"\n                  template="[[rowDetail]]"\n                ></data-table-row-detail>\n              </template>\n            </data-table-row>\n          </div>\n        </template>\n      </iron-list>\n    </div>\n    <paper-spinner-lite active=""></paper-spinner-lite>\n    <slot name="data-table-column"></slot>\n    <slot name="template[is=row-detail]"></slot>\n  ']);return _=function(){return e},e}p.DataTableTemplatizerBehaviorImpl={properties:{expanded:Boolean,index:Number,item:Object,selected:Boolean,table:Object,template:Object,_instances:{type:Array,value:[]},_forwardedParentProps:{type:Object,value:{}},_instance:{type:Object,computed:"_templatize(template)"}},observers:["_expandedChanged(_instance, expanded)","_indexChanged(_instance, index)","_itemChanged(_instance, item)","_itemPathChanged(_instance, item.*)","_selectedChanged(_instance, selected)"],created:function(){this._instanceProps={column:!0,expanded:!0,index:!0,item:!0,selected:!0}},_templatize:function(e){this.templatize(e),e._rootDataHost&&(this._getRootDataHost=function(){return e._rootDataHost});var t=this.stamp({});for(var i in this._forwardedParentProps)t[i]=this._forwardedParentProps[i];return this._instances.push(t),n.dom(this).insertBefore(t.root,n.dom(this).firstElementChild),t},_expandedChanged:function(e,t){this._expanded=t,e.expanded=t},_indexChanged:function(e,t){e.index=t},_itemChanged:function(e,t){e.item=t},_itemPathChanged:function(e,t){this._parentProps=this._parentProps||{},e.notifyPath(t.path,t.value)},_selectedChanged:function(e,t){this._selected=t,e.selected=t},_forwardParentProp:function(e,t){this._forwardedParentProps[e]=t,this._instances.forEach(function(n){n[e]=t})},_forwardInstanceProp:function(e,t,n){"expanded"===t&&e.item&&this._expanded!==n&&(n?this.table.expandItem(e.item):this.table.collapseItem(e.item)),"selected"===t&&e.item&&this._selected!==n&&(n?this.table.selectItem(e.item):this.table.deselectItem(e.item))},_forwardInstancePath:function(e,t,n){0===t.indexOf("item")&&this.table.debounce("item-changed",function(){this.table.fire("item-changed",{item:e.item,path:t.substring(5),value:n})}.bind(this))}},p.DataTableTemplatizerBehavior=[s.Templatizer,p.DataTableTemplatizerBehaviorImpl],t.Polymer({_template:t.html(u()),is:"data-table-cell",behaviors:[p.DataTableTemplatizerBehavior],properties:{alignRight:Boolean,column:Object,flex:Number,header:Boolean,hidden:Boolean,order:Number,template:Object,width:String,beforeBind:{type:Object,value:function(){return function(e,t){}}}},observers:["_beforeBind(beforeBind, column.*, index, item.*, expanded, selected)","_beforeBindHeader(beforeBind, column.*)","_alignRightChanged(alignRight)","_columnChanged(_instance, column)","_columnPathChanged(_instance, column.*)","_flexChanged(flex)","_hiddenChanged(hidden)","_orderChanged(order)","_widthChanged(width)"],attached:function(){(void 0).useNativeShadow||(window.StyleTransformer.dom(this,"iron-data-table",this._scopeCssViaAttr,!0),this.domHost&&window.StyleTransformer.dom(this,this.domHost.tagName.toLowerCase(),this._scopeCssViaAttr,!1))},_alignRightChanged:function(e){this.style.flexDirection=e?"row-reverse":"row"},_beforeBind:function(e,t,n,i,a,o){e({column:t.base,index:n,item:i.base,expanded:a,selected:o},this)},_beforeBindHeader:function(e,t){this.header&&e({column:t.base},this)},_hiddenChanged:function(e){this.toggleAttribute("hidden",e)},_orderChanged:function(e){this.style.order=e},_flexChanged:function(e){this.style.flexGrow=e},_widthChanged:function(e){this.style.flexBasis=e},_columnChanged:function(e,t){e.column=t},_columnPathChanged:function(e,t){var n=this;i.microTask.run(function(){n._parentProps=n._parentProps||{},e.notifyPath(t.path,t.value)})}}),t.Polymer({_template:t.html(f()),is:"data-table-row",properties:{beforeBind:Object,expanded:{type:Boolean,reflectToAttribute:!0},index:Number,item:Object,selected:{type:Boolean,reflectToAttribute:!0},_static:{type:Object,value:{id:0}}},observers:["_beforeBind(beforeBind, index, item.*, selected, expanded)"],attached:function(){if(this.domHost&&"IRON-DATA-TABLE"===this.domHost.tagName.toUpperCase()){var e=this._static.id++,t=this.parentElement;t._rowId||(this._contentElement=document.createElement("content"),this._contentElement.setAttribute("select","#item"+e),n.dom(t).appendChild(this._contentElement),this.id="item"+e,t._rowId=e,n.dom(this.domHost).appendChild(this),this._ownerShadyRoot=void 0)}},_beforeBind:function(e,t,n,i,a){e({index:t,item:n.base,expanded:a,selected:i},this)}}),t.Polymer({_template:t.html(b()),is:"data-table-checkbox",properties:{checked:{type:Boolean,observer:"_checkedChanged",reflectToAttribute:!0,value:!1},indeterminate:{type:Boolean,reflectToAttribute:!0,observer:"_indeterminateChanged",value:!1}},_checkedChanged:function(e){e&&(this.indeterminate=!1)},_indeterminateChanged:function(e){e&&(this.checked=!1)}}),t.Polymer({_template:t.html(g()),is:"data-table-row-detail",behaviors:[p.DataTableTemplatizerBehavior],properties:{beforeBind:Object},observers:["_beforeBind(beforeBind, item.*, index, selected, expanded)"],attached:function(){(void 0).useNativeShadow||(window.StyleTransformer.dom(this,"iron-data-table",this._scopeCssViaAttr,!0),this.domHost&&window.StyleTransformer.dom(this,this.domHost.tagName.toLowerCase(),this._scopeCssViaAttr,!1))},_beforeBind:function(e,t,n,i,a){e({index:n,item:t.base,expanded:a,selected:i},this)}});var y=t.Polymer({_template:t.html(_()),is:"iron-data-table",behaviors:[o.IronResizableBehavior],listeners:{"column-filter-changed":"_onColumnFilterChanged","iron-resize":"_resizeCellContainers","item-changed":"_itemChanged",scroll:"_onHorizontalScroll"},properties:{autoRefresh:Number,beforeCellBind:Object,beforeDetailsBind:Object,beforeRowBind:Object,items:{type:Array},detailsEnabled:{type:Boolean,value:!1},filter:{type:Array,notify:!0,value:function(){return[]}},multiSelection:{type:Boolean,value:!1},pageSize:{type:Number,value:50},selectionEnabled:{type:Boolean,value:!1},selectedItem:{type:Object,readOnly:!0,notify:!0},selectedItems:{type:Object,notify:!0,readOnly:!0,value:function(){var e=[];return e.filters=[],e}},size:{type:Number,notify:!0,value:0,observer:"_sizeChanged"},sortOrder:{type:Array,notify:!0,value:function(){return[]}},columns:{type:Array,notify:!0,value:function(){return[]},observer:"_columnsChanged"},dataSource:{type:Object,notify:!0},_pagesLoading:{type:Array,value:function(){return[]}},loading:{type:Boolean,notify:!0,reflectToAttribute:!0,value:!1},_cachedItems:{type:Array,value:function(){return[]}},_cachedPages:{type:Array,value:function(){return[]}},_currentPage:{type:Number,value:0},_expandedItems:{type:Array,value:function(){return[]}},_this:{type:Object,value:function(){return this}}},observers:["_itemsChanged(items.*)","_currentPageChanged(dataSource, _currentPage)","_resetData(dataSource, filter.*, sortOrder.*)"],created:function(){var e=this;this._observer=new a.FlattenedNodesObserver(this,function(t){var i=function(e){return e.nodeType===Node.ELEMENT_NODE&&"DATA-TABLE-COLUMN"===e.tagName.toUpperCase()};if((t.addedNodes.filter(i).length>0||t.removedNodes.filter(i).length>0)&&(e.set("columns",e.shadowRoot.querySelector("[select=data-table-column]").assignedNodes({flatten:!0}).filter(function(e){return e.nodeType===Node.ELEMENT_NODE})),e.notifyResize()),t.addedNodes.filter(function(e){return e.nodeType===Node.ELEMENT_NODE&&"TEMPLATE"===e.tagName.toUpperCase()&&e.hasAttribute("is")&&"row-detail"===e.getAttribute("is")}).length>0){e.set("rowDetail",e.shadowRoot.querySelector('[select="template[is=row-detail]"]').assignedNodes({flatten:!0}).filter(function(e){return e.nodeType===Node.ELEMENT_NODE})[0]);var a=n.dom(e.rowDetail).parentNode;e.rowDetail._rootDataHost=a.dataHost?a.dataHost._rootDataHost||a.dataHost:a}}).bind(this)},_stopPropagation:function(e){e.stopImmediatePropagation()},selectItem:function(e){"number"==typeof e&&e>=0&&this.items&&this.items.length>e?this._selectItem(this.items[e]):this._selectItem(e)},_selectItem:function(e){var t;(this._setSelectedItem(e),this.multiSelection)?this.selectedItems.inverted?(t=this.selectedItems.indexOf(e))>-1&&this.splice("selectedItems",t,1):this.push("selectedItems",e):this.splice("selectedItems",0,this.selectedItems.length,e)},deselectItem:function(e){"number"==typeof e&&e>=0&&this.items&&this.items.length>e?this._deselectItem(this.items[e]):this._deselectItem(e)},_deselectItem:function(e){this._setSelectedItem(null);var t=this.selectedItems.indexOf(e);this.selectedItems.inverted?-1===t&&this.push("selectedItems",e):t>-1&&this.splice("selectedItems",t,1)},_isSelected:function(e,t){var n=t.indexOf(e)>-1;return t.inverted?!n:n},selectAll:function(){var e=[];e.inverted=!0,e.filters=this.filter.slice(0)||[],this._setSelectedItems(e)},clearSelection:function(){var e=[];e.inverted=!1,e.filters=this.filter.slice(0)||[],this._setSelectedItems(e),void 0!==this.selectedItem&&this._setSelectedItem(null)},_toggleSelectAll:function(){this._isSelectAllChecked(this.selectedItems.length,this.selectedItems.inverted,this.size)?this._fireEvent("deselecting-all-items",{items:this.selectedItems},this.clearSelection):this._fireEvent("selecting-all-items",{items:this.selectedItems},this.selectAll)},_isSelectAllChecked:function(e,t,n){return n>0&&e===(t?0:n)},_isSelectAllIndeterminate:function(e,t){return t>0&&e>0&&e<t},_isEven:function(e){return e%2==0},_resetData:function(e,t,n){this.clearSelection(),this.clearCache(),this.$.list.scrollToIndex(0)},_sortDirectionChanged:function(e){for(var t=0;t<this.sortOrder.length;t++)if(this.sortOrder[t].path===e.detail.path)return void(e.detail.direction?this.set("sortOrder."+t+".direction",e.detail.direction):this.splice("sortOrder",t,1));this.push("sortOrder",{path:e.detail.path,direction:e.detail.direction})},_columnsChanged:function(e,t){t&&t.forEach(function(e){this.unlisten(e,"filter-value-changed")}.bind(this)),e&&e.forEach(function(e){e.table=this,this.listen(e,"filter-value-changed","_onColumnFilterChanged")}.bind(this))},_onColumnFilterChanged:function(e){for(var t=0;t<this.filter.length;t++)if(this.filter[t].path===e.detail.filterBy)return this.set("filter."+t+".filter",e.detail.value),void this.set("selectedItems.filters."+t+".filter",e.detail.value);this.push("filter",{path:e.detail.filterBy,filter:e.detail.value}),this.push("selectedItems.filters",{path:e.detail.filterBy,filter:e.detail.value})},_resizeCellContainers:function(){var e=this;this.$.container.style.width="",i.microTask.run(function(){e.$.container.style.width=Math.min(e.scrollWidth,e.clientWidth+e.scrollLeft)+"px",e.$.header.style.paddingRight=e.$.list.offsetWidth-e.$.list.clientWidth+"px"})},_onHorizontalScroll:function(){this.isDebouncerActive("scrolling")||(this.$.container.style.width=this.scrollWidth+"px",this.debounce("scrolling",function(){this.$.container.style.width=Math.min(this.scrollWidth,this.clientWidth+this.scrollLeft)+"px"},1e3))},_onVerticalScroll:function(e){this.toggleClass("scrolled",this.$.list.scrollTop>=1,this.$.header),this._currentPage=Math.max(0,Math.floor(this.$.list.scrollTop/this.$.list._physicalAverage/this.pageSize))},_itemsChanged:function(e){if("items"!==e.path&&"items.splices"!==e.path||!Array.isArray(e.base)){if(0===e.path.indexOf("items.#")&&Array.isArray(e.base)){var t=e.path.split(".")[1].substring(1),n=this.items[t],i=this._cachedItems.indexOf(n);i>=0&&this.set(e.path.replace("items.","_cachedItems.").replace("#"+t,i),e.value)}}else this.size=e.base.length,this.dataSource=new ArrayDataSource(e.base)},_itemChanged:function(e){if(this.items){var t=this.items.indexOf(e.detail.item);t>=0&&this.set("items."+t+"."+e.detail.path,e.detail.value)}void 0!==this.autoRefresh&&this.debounce("auto-refresh",function(){this.refreshPage(this._currentPage)},this.autoRefresh)},_currentPageChanged:function(e,t){this._isPageCached(t)||(this.loading=!0),this.debounce("loading",function(){this._loadPage(e,t),t+1<this.size/this.pageSize&&this._loadPage(e,t+1),t>0&&this._loadPage(e,t-1)}.bind(this),100)},_isPageLoading:function(e){return this._pagesLoading.indexOf(e)>-1},_addLoadingPage:function(e){this._isPageLoading(e)||this.push("_pagesLoading",e),this.loading=this._pagesLoading.length>0},_removeLoadingPage:function(e){var t=this._pagesLoading.indexOf(e);-1!==t&&this.splice("_pagesLoading",t,1),this.loading=this._pagesLoading.length>0},_isPageCached:function(e){return this._cachedPages&&this._cachedPages.indexOf(e)>-1},_loadPage:function(e,t){if(this._isPageCached(t))this._removeLoadingPage(t);else if(!this._isPageLoading(t)){this._addLoadingPage(t);var n=function(e,n){this.push("_cachedPages",t),void 0!==n&&(this.size=n);for(var i=t*this.pageSize,a=0;a<this.pageSize;a++){var o=i+a,s=e[a];this.set("_cachedItems."+o,s),this.$.list._collection.store[o]=s,s&&"object"==l(s)?this.$.list._collection.omap.set(s,o):this.$.list._collection.pmap[s]=o}this.debounce("resizing",function(){this.$.list.notifyResize()}.bind(this),100),this._removeLoadingPage(t)}.bind(this),i=function(){this._removeLoadingPage(t)}.bind(this);e({page:t,pageSize:this.pageSize,filter:this.filter,sortOrder:this.sortOrder},n,i)}},_sizeChanged:function(e,t){if(this._cachedItems&&Math.abs(this._cachedItems.length-e)<2*this.pageSize){for(;this._cachedItems.length<e;)this.push("_cachedItems",{});for(;this._cachedItems.length>e;)this.pop("_cachedItems")}else{for(var n=[];n.length<e;)n.push({});this.set("_cachedItems",n)}if(e>t){var i=Math.floor(t/this.pageSize);(this._isPageCached(i)||0===i)&&this.refreshPage(i)}},clearCache:function(){this._cachedPages=[],this.refreshPage(this._currentPage)},refreshPage:function(e){if(this._cachedPages){var t=this._cachedPages.indexOf(e);t>-1&&this.splice("_cachedPages",t,1)}this._currentPageChanged(this.dataSource,e)},_updateSizeForItem:function(e){if(e.model.get("item")){for(var t=[],n=0;n<this.$.list._physicalItems.length;n++)t.push(n);this.$.list._updateMetrics(t),this.$.list._positionItems()}},expandItem:function(e){this.rowDetail&&this._expandedItems&&!this._isExpanded(e,this._expandedItems)&&(this._expandedItems.push(e),this._expandedItems=this._expandedItems.slice(0))},collapseItem:function(e){if(this.rowDetail&&this._expandedItems&&this._isExpanded(e,this._expandedItems)){var t=this._expandedItems.indexOf(e);this._expandedItems.splice(t,1),this._expandedItems=this._expandedItems.slice(0)}},_isExpanded:function(e,t){return t&&t.indexOf(e)>-1},_isFocusable:function(e){if(!(void 0).useNativeShadow)return e.contains(n.dom(document.activeElement).node)||"A"===e.tagName.toUpperCase()},_onCellClick:function(e){this._isFocusable(n.dom(e).localTarget)||(this.rowDetail&&this.detailsEnabled&&(this._isExpanded(e.model.item,this._expandedItems)?this._fireEvent("collapsing-item",e.model.item,this.collapseItem):this._fireEvent("expanding-item",e.model.item,this.expandItem)),this.selectionEnabled&&(this._isSelected(e.model.item,this.selectedItems)?this._fireEvent("deselecting-item",e.model.item,this.deselectItem):this._fireEvent("selecting-item",e.model.item,this.selectItem)))},_fireEvent:function(e,t,n){this.fire(e,{item:t},{cancelable:!0}).defaultPrevented||n.call(this,t)},_onCheckBoxTap:function(e){this._isSelected(e.model.item,this.selectedItems)?this._fireEvent("deselecting-item",e.model.item,this.deselectItem):this._fireEvent("selecting-item",e.model.item,this.selectItem)}});e.IronDataTable=y,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=iron-data-table.umd.js.map
