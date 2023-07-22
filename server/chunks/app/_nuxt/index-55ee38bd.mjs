import { _ as __nuxt_component_1 } from './client-only-7e9de0b5.mjs';
import { _ as __nuxt_component_1$1 } from '../server.mjs';
import { defineComponent, withAsyncContext, unref, useSSRContext } from 'vue';
import { u as useAuthStore } from './store-25959e0b.mjs';
import { u as useFetch } from './fetch-7718b97b.mjs';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const authStore = useAuthStore();
    const { data, pending } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "https://supgrade-api.site/api/v1/admin/user_data",
      {
        method: "POST",
        body: JSON.stringify({
          user: authStore.decodeJwt().id
        }),
        headers: {
          Authorization: `Bearer ${authStore.jwt}`
        }
      },
      "$aBFB04KQiC"
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_1;
      const _component_NuxtPage = __nuxt_component_1$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`<div>`);
      if (unref(pending)) {
        _push(`<div> Loading... </div>`);
      } else {
        _push(`<div><div class="space-y-1"><div class="flex items-center gap-2"><img${ssrRenderAttr("src", unref(data).avatar)} class="w-12 h-12 rounded-full"><h2 style="${ssrRenderStyle({ "color": "white" })}" class="font-bold text-2xl">${ssrInterpolate(unref(data).username)}</h2></div><p style="${ssrRenderStyle({ "color": "white" })}" class="text-sm text-gray-400">${ssrInterpolate(unref(data).email)}</p><p class="text-sm text-gray-400">${ssrInterpolate(unref(data).id)}</p></div>`);
        _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
        _push(`</div>`);
      }
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-55ee38bd.mjs.map
