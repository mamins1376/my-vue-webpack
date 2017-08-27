# {{ name }}

> {{ description }}

## Build Setup

``` bash
# install dependencies
yarn

# serve with hot reload at localhost:8080
yarn dev

# build for production with minification
yarn build

# build for production and view the bundle analyzer report
yarn build --report
{{#unit}}

# run unit tests
yarn unit
{{/unit}}
{{#e2e}}

# run e2e tests
yarn e2e
{{/e2e}}
{{#if_or unit e2e}}

# run all tests
yarn test
{{/if_or}}
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
