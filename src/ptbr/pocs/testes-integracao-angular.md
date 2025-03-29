---
id: testes-integracao-angular
title: Testes de Integração Angular
sidebar_label: Testes de Integração Angular
lastUpdated: true
---

# Shell Angular v16 e Remote Angular v17

## Aplicações usadas

- POL.main (v16)
- POL.produtorRural (v17)

## Problema

```
node_modules_rxjs_di…22_-cf4974.js:11177 ERROR Error: Uncaught (in promise): Error: NG0203: inject() must be called from an injection context such as a constructor, a factory function, a field initializer, or a function used with `runInInjectionContext`. Find more at https://angular.io/errors/NG0203
Error: NG0203: inject() must be called from an injection context such as a constructor, a factory function, a field initializer, or a function used with `runInInjectionContext`. Find more at https://angular.io/errors/NG0203
    at Object.factory (node_modules_rxjs_di…-cf4974.js:10106:32)
    at node_modules_rxjs_di…-cf4974.js:10013:33
    at runInInjectorProfilerContext (node_modules_rxjs_di…2_-cf4974.js:1616:5)
    at R3Injector.hydrate (node_modules_rxjs_di…_-cf4974.js:10012:9)
    at R3Injector.get (node_modules_rxjs_di…_-cf4974.js:9892:23)
    at injectInjectorOnly (node_modules_rxjs_di…_-cf4974.js:1655:36)
    at ɵɵinject (node_modules_rxjs_di…_-cf4974.js:1661:59)
    at Object.factory (node_modules_rxjs_di…-cf4974.js:10106:32)
    at node_modules_rxjs_di…-cf4974.js:10013:33
    at runInInjectorProfilerContext (node_modules_rxjs_di…2_-cf4974.js:1616:5)
    at R3Injector.hydrate (node_modules_rxjs_di…_-cf4974.js:10012:9)
    at R3Injector.get (node_modules_rxjs_di…_-cf4974.js:9892:23)
    at injectInjectorOnly (node_modules_rxjs_di…_-cf4974.js:1655:36)
    at ɵɵinject (node_modules_rxjs_di…_-cf4974.js:1661:59)
    at node_modules_rxjs_di…-cf4974.js:11328:49
    at AsyncStackTaggingZoneSpec.onInvokeTask (node_modules_rxjs_di…-cf4974.js:11328:30)
    at Object.onInvokeTask (node_modules_rxjs_di…-cf4974.js:11642:25)
```

# Shell Angular v17 e Remote Angular v17

## Aplicações usadas

- POL.main (v17)
- POL.produtorRural (v17)

> [!NOTE]  
> 🎉 Sucesso na execução 🎉

<br />

# Shell Angular v18 e Remote Angular v17

## Aplicações usadas

- POL.main (v18)
- POL.produtorRural (v17)

## Problema

```
default-node_modules…ter-850153.js:22148 ERROR RuntimeError: NG0203: inject() must be called from an injection context such as a constructor, a factory function, a field initializer, or a function used with `runInInjectionContext`. Find more at https://angular.io/errors/NG0203
    at Object.factory (default-node_modules…-850153.js:18184:32)
    at default-node_modules…-850153.js:18089:35
    at runInInjectorProfilerContext (default-node_modules…r-850153.js:15820:5)
    at R3Injector.hydrate (default-node_modules…-850153.js:18088:11)
    at R3Injector.get (default-node_modules…-850153.js:17962:23)
    at injectInjectorOnly (default-node_modules…-850153.js:16049:36)
    at ɵɵinject (default-node_modules…-850153.js:16055:59)
```
