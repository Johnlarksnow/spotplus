import { j as defineNuxtRouteMiddleware, n as navigateTo } from '../server.mjs';
import { u as useAuthStore } from './store-25959e0b.mjs';
import 'vue';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'ufo';
import 'destr';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'framesync';
import 'popmotion';
import 'style-value-types';
import '@vue/shared';
import 'cookie-es';
import 'ohash';
import 'pinia-plugin-persistedstate';
import 'vue/server-renderer';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';
import 'jwt-decode';

const auth = /* @__PURE__ */ defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore();
  if (to.path.includes("/dashboard") && !authStore.checkJwt())
    return navigateTo("/login");
  else if ((to.path === "/login" || to.path === "/register") && authStore.checkJwt())
    return navigateTo("/dashboard");
});

export { auth as default };
//# sourceMappingURL=auth-284b8626.mjs.map
