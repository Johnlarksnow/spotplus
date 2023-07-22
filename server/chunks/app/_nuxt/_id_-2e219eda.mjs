import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-563b35af.mjs';
import __nuxt_component_0$1 from './Icon-0c592af8.mjs';
import { defineComponent, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { a as useRoute } from '../server.mjs';
import { u as useFetch } from './fetch-7718b97b.mjs';
import { u as useAuthStore } from './store-25959e0b.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'ohash';
import 'ufo';
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
import 'unctx';
import 'vue-router';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'framesync';
import 'popmotion';
import 'style-value-types';
import '@vue/shared';
import 'cookie-es';
import 'pinia-plugin-persistedstate';
import 'jwt-decode';

const _imports_0 = "" + publicAssetsURL("cbase.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const authStore = useAuthStore();
    const { data, pending } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "https://supgrade-api.site/api/v1/payments/valid",
      {
        method: "POST",
        body: JSON.stringify({
          checkoutId: route.params.id
        }),
        headers: {
          Authorization: `Bearer ${authStore.jwt}`
        }
      },
      "$9KzXyUxCsi"
    )), __temp = await __temp, __restore(), __temp);
    const svgs = [
      "btc",
      "eth",
      "ltc",
      "usdt",
      "usc"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex w-full flex-col h-full gap-2 items-center justify-center" }, _attrs))}>`);
      if (unref(pending)) {
        _push(`<div> Loading... </div>`);
      } else {
        _push(`<div class="flex md:w-3/6 flex-col gap-2 items-center justify-center">`);
        if (unref(data).status === "unpaid") {
          _push(`<div class="flex w-full flex-col gap-2">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/",
            class: "text-green-500 font*bold text-lg hover:text-green-400 transition-all"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` \u2190 Back to home `);
              } else {
                return [
                  createTextVNode(" \u2190 Back to home ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`<h1 class="text-2xl font-bold"> Checkout </h1><h2 class="text-gray-400 text-lg">${ssrInterpolate(unref(data).email)}</h2><button class="flex flex-col w-full md:flex-row md:justify-between items-center gap-2 bg-[#181818] p-4 rounded-lg"><h2 class="flex gap-2 items-center text-xl font-bold"><img${ssrRenderAttr("src", _imports_0)} class="w-10 h-10"> Pay with Coinbase </h2></button><div class="space-y-2"><h3 class="text-lg text-gray-400"> Supported Coins </h3><div class="flex gap-2"><!--[-->`);
          ssrRenderList(svgs, (svg) => {
            _push(`<img${ssrRenderAttr("src", `/${svg}.svg`)} class="w-10 h-10">`);
          });
          _push(`<!--]--></div></div></div>`);
        } else if (unref(data).status === "success") {
          _push(`<div class="w-full flex justify-center"><div class="flex flex-col gap-2 items-center justify-center"><h1 class="font-bold text-3xl text-center"> This payment has already been paid. Go grab your key from </h1>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/upgrade",
            class: "text-xl text-green-500 font-bold hover:text-green-400 transition-all"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Here `);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "tabler:arrow-right",
                  class: "w-6 h-6"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createTextVNode(" Here "),
                  createVNode(_component_Icon, {
                    name: "tabler:arrow-right",
                    class: "w-6 h-6"
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div></div>`);
        } else {
          _push(`<div class="w-full flex justify-center"><div class="flex flex-col gap-2 items-center justify-center"><h1 class="font-bold text-3xl text-center"> This payment has been failed or cancelled. Buy another key from </h1>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/dashboard",
            class: "text-xl text-green-500 font-bold hover:text-green-400 transition-all"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Here `);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "tabler:arrow-right",
                  class: "w-6 h-6"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createTextVNode(" Here "),
                  createVNode(_component_Icon, {
                    name: "tabler:arrow-right",
                    class: "w-6 h-6"
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div></div>`);
        }
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/checkout/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-2e219eda.mjs.map
