import { _ as __nuxt_component_0 } from './nuxt-link-563b35af.mjs';
import { _ as _sfc_main$1 } from './Alert-de414ce5.mjs';
import { defineComponent, reactive, ref, mergeProps, withCtx, createTextVNode, unref, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import 'ufo';
import '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
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
import './Icon-0c592af8.mjs';
import './config-af1486b0.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    const formData = reactive({
      username: "",
      email: "",
      password: "",
      password_repeat: ""
    });
    const alert = reactive({
      type: "success",
      icon: "tabler:check",
      title: "Success",
      message: "You have successfully registered!"
    });
    const showAlert = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Alert = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col w-full gap-3 h-full justify-center items-center" }, _attrs))}><div class="flex gap-2 flex-col items-start justify-center">`);
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
      _push(`<h1 class="text-2xl font-bold"> Register </h1><form class="flex flex-col gap-2"><input${ssrRenderAttr("value", unref(formData).username)} type="text" placeholder="Username" class="input" required><input${ssrRenderAttr("value", unref(formData).email)} type="email" placeholder="Email" class="input" required><input${ssrRenderAttr("value", unref(formData).password)} type="password" placeholder="Password" class="input" required><input${ssrRenderAttr("value", unref(formData).password_repeat)} type="password" placeholder="Repeat Password" required class="input"><button type="submit" class="bg-green-900 mt-2 text-white rounded-lg py-2 px-4"> Register </button></form>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/login",
        class: "text-green-500 hover:text-green-400 transition-all"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` I have an account `);
          } else {
            return [
              createTextVNode(" I have an account ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(showAlert)) {
        _push(ssrRenderComponent(_component_Alert, {
          type: unref(alert).type,
          icon: unref(alert).icon
        }, {
          title: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(alert).title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(alert).title), 1)
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` ${ssrInterpolate(unref(alert).message)}`);
            } else {
              return [
                createTextVNode(" " + toDisplayString(unref(alert).message), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=register-daa11887.mjs.map
