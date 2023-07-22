import __nuxt_component_0 from './Icon-0c592af8.mjs';
import { _ as __nuxt_component_0$1 } from './Loader-3218aae2.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-563b35af.mjs';
import { u as useAuthStore } from './store-25959e0b.mjs';
import { defineComponent, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-7718b97b.mjs';
import { c as convertDate } from './utils-a6f78e75.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "payments",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    const { data, pending } = useFetch("https://supgrade-api.site/api/v1/payments/userPayments", {
      method: "POST",
      body: JSON.stringify({
        userId: authStore.decodeJwt().id
      }),
      headers: {
        Authorization: `Bearer ${authStore.jwt}`
      }
    }, "$S20EYPJj7r");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      const _component_Loader = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(_ctx.nav, (link) => {
        _push(`<button class="${ssrRenderClass([{
          "text-green-600": _ctx.$route.path === link.path
        }, "text-lg font-bold cursor-pointer inline-block after:h-[0.1rem] after:w-0 after:transition-all after:block hover:after:w-full after:bg-white"])}"><h1 class="flex items-center gap-1 mb-1">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: link.icon,
          class: "w-6 h-6"
        }, null, _parent));
        _push(` ${ssrInterpolate(link.name)}</h1></button>`);
      });
      _push(`<!--]-->`);
      if (unref(pending)) {
        _push(`<div class="flex items-center justify-center">`);
        _push(ssrRenderComponent(_component_Loader, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div><table class="table-auto even:bg-[#181818] odd:bg-transparent w-full"><thead><tr><th class="px-4 py-2"> Amount </th><th class="px-4 py-2"> ID </th><th class="px-4 py-2"> Gateway </th><th class="px-4 py-2"> Created At </th><th class="px-4 py-2"> Status </th></tr></thead><tbody><!--[-->`);
        ssrRenderList(unref(data).payments, (payment) => {
          _push(`<tr><td class="px-4 py-2">${ssrInterpolate(payment.amount)}</td><td class="px-4 py-2">${ssrInterpolate(payment.id)}</td>`);
          if (payment.gateway) {
            _push(`<td class="px-4 py-2">${ssrInterpolate(payment.gateway.charAt(0).toUpperCase() + payment.gateway.slice(1))}</td>`);
          } else {
            _push(`<td class="px-4 py-2"> None </td>`);
          }
          _push(`<td class="px-4 py-2">${ssrInterpolate(("convertDate" in _ctx ? _ctx.convertDate : unref(convertDate))(payment.createdAt))}</td><td class="${ssrRenderClass([{
            "text-green-500": payment.status === "success",
            "text-red-500": payment.status === "cancelled" || payment.status === "failed",
            "text-yellow-500": payment.status === "unpaid"
          }, "px-4 py-2"])}">${ssrInterpolate(payment.status.charAt(0).toUpperCase() + payment.status.slice(1))}</td>`);
          if (payment.status === "unpaid") {
            _push(`<td class="px-4 py-2">`);
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: {
                name: "checkout-id",
                params: {
                  id: payment.id
                }
              },
              class: "px-2 py-1 flex items-center justify-center bg-green-500 text-white rounded-md"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(` Pay `);
                } else {
                  return [
                    createTextVNode(" Pay ")
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</td>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</tr>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/index/payments.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=payments-e4b95ebc.mjs.map
