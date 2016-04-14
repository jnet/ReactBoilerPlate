
/// <reference path="jquery/jquery.d.ts" />
/// <reference path="flux/flux.d.ts" />
/// <reference path="react/react.d.ts" />
/// <reference path="react/react-addons-create-fragment.d.ts" />
/// <reference path="react/react-addons-css-transition-group.d.ts" />
/// <reference path="react/react-addons-linked-state-mixin.d.ts" />
/// <reference path="react/react-addons-perf.d.ts" />
/// <reference path="react/react-addons-pure-render-mixin.d.ts" />
/// <reference path="react/react-addons-test-utils.d.ts" />
/// <reference path="react/react-addons-transition-group.d.ts" />
/// <reference path="react/react-addons-update.d.ts" />
/// <reference path="react/react-dom.d.ts" />
/// <reference path="react/react-global.d.ts" />

declare module "node_modules/react/dist/react"
{
    export = React;
}

declare module "node_modules/react-dom/dist/react-dom"
{
    export = ReactDOM;
}