import { useSSRContext, defineComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
import { _ as __nuxt_component_1 } from './client-only-7e9de0b5.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-banner" }, _attrs))}><div class="d-table"><div class="d-table-cell"><div class="container"><div class="row h-100 justify-content-center align-items-center"><div class="col-lg-5"><h3 style="${ssrRenderStyle({ "color": "rgb(70, 209, 123)" })}">SpotPlus</h3><h1 class="h1label"> Spotify Premium <br></h1><p>Tired of paying high monthly fees for Spotify Premium or just can&#39;t listen to music with ads? With our service, all this is done! We provide lifetime Spotify Premium along with an automated system. </p> <a href="#products" class="btn btn-primary">Purchase</a></div><div style="${ssrRenderStyle({ "justify-content": "center", "display": "flex" })}" class="col-lg-6 offset-lg-1"><img class="vert-move" style="${ssrRenderStyle({ "height": "320px", "margin-right": "3rem" })}" src="https://i.imgur.com/eBCIM9n.png"><img class="vert-move-two" style="${ssrRenderStyle({ "height": "320px", "margin-right": "3rem" })}" src="https://i.imgur.com/fmQ5rXw.png"><img class="vert-move-three" style="${ssrRenderStyle({ "height": "320px" })}" src="https://i.imgur.com/ACryDYK.png"></div></div></div></div><div class="shape1"><img src="https://i.imgur.com/FDNrKtx.png" alt="shape"></div><div class="shape2 rotateme"><img src="https://i.imgur.com/56kIl0p.png" alt="shape"></div><div class="shape3"><img src="https://i.imgur.com/6P09O2V.png" alt="shape"></div><div class="shape4"><img src="https://i.imgur.com/Xxh8QFH.png" alt="shape"></div><div class="shape5"><img src="https://i.imgur.com/g69YZgY.png" alt="shape"></div><div class="shape6 rotateme"><img src="https://i.imgur.com/Xxh8QFH.png" alt="shape"></div><div class="shape7"><img src="https://i.imgur.com/Xxh8QFH.png" alt="shape"></div><div class="shape8 rotateme"><img src="https://i.imgur.com/56kIl0p.png" alt="shape"></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Hero.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Steps",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Steps.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Hero = _sfc_main$2;
  const _component_ClientOnly = __nuxt_component_1;
  const _component_Steps = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Hero, null, null, _parent));
  _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
  _push(ssrRenderComponent(_component_Steps, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-41a74489.mjs.map
