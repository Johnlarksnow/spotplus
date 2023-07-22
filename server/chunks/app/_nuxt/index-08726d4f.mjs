import __nuxt_component_0$1 from './Icon-0c592af8.mjs';
import { o as onKeyStroke } from '../server.mjs';
import { useSSRContext, defineComponent, ref, unref, withCtx, createTextVNode, createVNode, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-563b35af.mjs';
import { u as useAuthStore } from './store-25959e0b.mjs';
import './config-af1486b0.mjs';
import 'klona';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './_plugin-vue_export-helper-cc2b3d55.mjs';
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
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';
import 'jwt-decode';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Modal",
  __ssrInlineRender: true,
  emits: ["close"],
  setup(__props, { emit: emits }) {
    onKeyStroke("Escape", () => {
      emits("close");
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed left-0 top-0 h-screen w-screen backdrop-blur-lg backdrop-filter z-40 flex items-center justify-center" }, _attrs))}><div class="rounded-lg grid md:w-2/6 gap-2 p-4 bg-[#181818]"><div class="flex justify-between w-full"><h2 class="text-3xl font-bold">`);
      ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
      _push(`</h2><button>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "tabler:x",
        class: "w-10 h-10"
      }, null, _parent));
      _push(`</button></div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Modal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    const isModalOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Modal = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<!--[--><section class="pricing-area ptb-80 bg-f9f6f6" id="products"><div class="container"><div class="row"><div class="col-lg-4 col-md-6"><div class="pricing-table"><div class="pricing-header"><h3>Single</h3></div><div class="price"><span><sup>$</sup>4.99<span>/Lifetime</span></span></div><div class="pricing-features"><ul><li class="active">1x Upgrade Key</li><li class="active">Automated Upgrade</li><li class="active">Lifetime Warranty</li><li class="active">Adless Listening</li><li class="active">Offline Listening</li></ul></div>`);
      if (!unref(authStore).checkJwt()) {
        _push(`<button name="product" value="subscription" class="btn btn-primary">Purchase</button>`);
      } else {
        _push(`<button name="product" value="subscription" class="btn btn-primary">Purchase</button>`);
      }
      _push(`</div></div><div class="col-lg-4 col-md-6"><div class="pricing-table active-plan"><div class="pricing-header"><h3>Family </h3></div><div class="price"><span><sup>$</sup>17.99 <span>/Lifetime</span></span></div><div class="pricing-features"><ul><li class="active">5x Upgrade Key</li><li class="active">Automated Upgrade</li><li class="active">Lifetime Warranty</li><li class="active">Adless Listening</li><li class="active">Offline Listening</li></ul></div>`);
      if (!unref(authStore).checkJwt()) {
        _push(`<button name="product" value="subscription" class="btn btn-primary">Purchase</button>`);
      } else {
        _push(`<button name="product" value="subscription" class="btn btn-primary">Purchase</button>`);
      }
      _push(`</div></div><div class="col-lg-4 col-md-6 offset-lg-0 offset-md-3"><div class="pricing-table"><div class="pricing-header"><h3>Duo</h3></div><div class="price"><span><sup></sup>$8.99 <span>/Lifetime</span></span></div><div class="pricing-features"><ul><li class="active">2x Upgrade Key</li><li class="active">Automated Upgrade</li><li class="active">Lifetime Warranty</li><li class="active">Adless Listening</li><li class="active">N/A</li></ul></div>`);
      if (!unref(authStore).checkJwt()) {
        _push(`<button name="product" value="subscription" class="btn btn-primary">Purchase</button>`);
      } else {
        _push(`<button name="product" value="subscription" class="btn btn-primary">Purchase</button>`);
      }
      _push(`</div></div></div></div><div class="shape8 rotateme"><img src="https://i.imgur.com/56kIl0p.png" alt="shape"></div><div class="shape2 rotateme"><img src="https://i.imgur.com/56kIl0p.png" alt="shape"></div><div class="shape7"><img src="https://i.imgur.com/Xxh8QFH.png" alt="shape"></div><div class="shape4"><img src="https://i.imgur.com/Xxh8QFH.png" alt="shape"></div></section>`);
      if (unref(isModalOpen)) {
        _push(ssrRenderComponent(_component_Modal, {
          onClose: ($event) => isModalOpen.value = false
        }, {
          title: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Login Required `);
            } else {
              return [
                createTextVNode(" Login Required ")
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p${_scopeId}> You need to be logged in first to upgrade your account. </p>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "/login",
                class: "py-2 px-3 flex items-center justify-center text-xl gap-2 font-bold rounded-md w-full bg-green-900"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "tabler:user-bolt",
                      class: "w-6 h-6"
                    }, null, _parent3, _scopeId2));
                    _push3(` Login `);
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "tabler:user-bolt",
                        class: "w-6 h-6"
                      }),
                      createTextVNode(" Login ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode("p", null, " You need to be logged in first to upgrade your account. "),
                createVNode(_component_NuxtLink, {
                  to: "/login",
                  class: "py-2 px-3 flex items-center justify-center text-xl gap-2 font-bold rounded-md w-full bg-green-900"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "tabler:user-bolt",
                      class: "w-6 h-6"
                    }),
                    createTextVNode(" Login ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/index/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-08726d4f.mjs.map
