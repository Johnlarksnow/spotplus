import { _ as __nuxt_component_0 } from './nuxt-link-563b35af.mjs';
import { useSSRContext, defineComponent, reactive, mergeProps, unref, withCtx, createTextVNode } from 'vue';
import { a as countryList } from './utils-a6f78e75.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "upgrade",
  __ssrInlineRender: true,
  setup(__props) {
    const formData = reactive({
      key: "",
      email: "",
      password: "",
      county: "select-a-country"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex md:flex-row flex-col-reverse w-full md:gap-8 gap-3 h-full justify-center items-center" }, _attrs))} data-v-10dd6711><div class="flex gap-2 flex-col w-full md:w-96 items-start justify-center" data-v-10dd6711><h1 class="text-2xl font-bold" data-v-10dd6711> Upgrade your account </h1><form class="flex flex-col gap-2 w-full" data-v-10dd6711><input${ssrRenderAttr("value", unref(formData).key)} type="text" placeholder="Enter your upgrade key" class="input" required data-v-10dd6711><input${ssrRenderAttr("value", unref(formData).email)} type="email" placeholder="Enter Spotify account email" class="input" required data-v-10dd6711><input${ssrRenderAttr("value", unref(formData).password)} type="password" placeholder="Enter Spotify account password" class="input" required data-v-10dd6711><select name="countries" class="input" required placeholder="Select a country" data-v-10dd6711><!--[-->`);
      ssrRenderList("countryList" in _ctx ? _ctx.countryList : unref(countryList), (country) => {
        _push(`<option${ssrRenderAttr("value", country.value)} data-v-10dd6711>${ssrInterpolate(country.name)}</option>`);
      });
      _push(`<!--]--></select><button type="submit" class="bg-green-900 mt-2 text-white rounded-lg py-2 px-4" data-v-10dd6711> Upgrade </button></form>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/#pricing",
        class: "text-green-500 hover:text-green-400 transition-all"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` I don&#39;t have an upgrade key `);
          } else {
            return [
              createTextVNode(" I don't have an upgrade key ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="md:w-2/6 space-y-1" data-v-10dd6711><h3 class="title" data-v-10dd6711> Is my data safe with Supgrade? </h3><p class="" data-v-10dd6711> Yes, of course. We do not save your Spotify login. Our bot will only login to your account for upgrading/renewing your account. </p><h3 class="title" data-v-10dd6711> What happens if I get kicked? </h3><p data-v-10dd6711> Nothing! You can renew your account automatically anytime with our automated system. There&#39;s no hassle for you working with us. </p><h3 class="title" data-v-10dd6711> How does the upgrade works? </h3><p data-v-10dd6711> First, we login to your Spotify account. Secondly, we check if your country is in stock and key is valid. Lastly, our bot proceeds to upgrade your account automatically. </p></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/upgrade.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const upgrade = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-10dd6711"]]);

export { upgrade as default };
//# sourceMappingURL=upgrade-ed2df06a.mjs.map
