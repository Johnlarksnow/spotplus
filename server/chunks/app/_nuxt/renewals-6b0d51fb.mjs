import { _ as __nuxt_component_0 } from './Loader-3218aae2.mjs';
import { u as useAuthStore } from './store-25959e0b.mjs';
import { defineComponent, unref, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-7718b97b.mjs';
import { c as convertDate } from './utils-a6f78e75.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import './Icon-0c592af8.mjs';
import '../server.mjs';
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
import './config-af1486b0.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'jwt-decode';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "renewals",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    const { data, pending } = useFetch("https://supgrade-api.site/api/v1/admin/renewals", {
      method: "POST",
      body: JSON.stringify({
        userId: authStore.decodeJwt().id
      }),
      headers: {
        Authorization: `Bearer ${authStore.jwt}`
      }
    }, "$HSvPO3bUu6");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Loader = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(pending)) {
        _push(`<div class="flex items-center justify-center">`);
        _push(ssrRenderComponent(_component_Loader, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div><table class="table-auto w-full"><thead><tr><th class="px-4 py-2"> Country </th><th class="px-4 py-2"> Key </th><th class="px-4 py-2"> Created At </th><th class="px-4 py-2"> Status </th></tr></thead><tbody class="even:bg-[#181818]"><!--[-->`);
        ssrRenderList(unref(data).renewals, (ren) => {
          _push(`<tr><td class="px-4 py-2">${ssrInterpolate(ren.country)}</td><td class="px-4 py-2">${ssrInterpolate(ren.key)}</td><td class="px-4 py-2">${ssrInterpolate(("convertDate" in _ctx ? _ctx.convertDate : unref(convertDate))(ren.createdAt))}</td><td>${ssrInterpolate(ren.status.charAt(0).toUpperCase() + ren.status.slice(1))}</td></tr>`);
        });
        _push(`<!--]--></tbody></table></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/index/renewals.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=renewals-6b0d51fb.mjs.map
