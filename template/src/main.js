import jQuery from 'jquery';
{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue';
import App from './App';
{{#router}}
import router from './router';
{{/router}}

window.jQuery = jQuery;
window.$ = jQuery;

Vue.config.productionTip = false;

let app = new Vue({
    {{#router}}
    router,
    {{/router}}
    {{#if_eq build "runtime"}}
    render: h => h(App)
    {{/if_eq}}
    {{#if_eq build "standalone"}}
    template: '<App/>',
    components: { App }
    {{/if_eq}}
}).$mount('body');

if (process.env.NODE_ENV === 'development') {
    // this comes handy during development
    window.app = app;
}
