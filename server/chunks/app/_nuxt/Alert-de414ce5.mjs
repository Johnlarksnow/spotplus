import __nuxt_component_0 from './Icon-0c592af8.mjs';
import { defineComponent, resolveDirective, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderClass, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Alert",
  __ssrInlineRender: true,
  props: {
    icon: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  emits: ["close"],
  setup(__props) {
    const props = __props;
    function getBgColor() {
      switch (props.type) {
        case "success":
          return "green";
        case "error":
          return "red";
        case "warning":
          return "yellow";
        default:
          return "blue";
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      const _directive_motion = resolveDirective("motion");
      _push(`<div${ssrRenderAttrs(mergeProps({
        initial: {
          opacity: 0,
          y: 20
        },
        enter: {
          opacity: 1,
          y: 0
        },
        leave: {
          opacity: 0,
          y: 20
        },
        class: "fixed left-0 bottom-4 z-50 w-full flex justify-center items-center"
      }, _attrs, ssrGetDirectiveProps(_ctx, _directive_motion)))}><div class="${ssrRenderClass(`p-4 rounded-md justify-between flex items-center md:w-8/12 w-11/12 bg-${getBgColor()}-500 gap-2`)}">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: props.icon,
        class: `w-12 h-12 text-${getBgColor()}-200`
      }, null, _parent));
      _push(`<div class="flex flex-col gap-2 text-right"><h3 class="${ssrRenderClass(`text-xl text-${getBgColor()}-200 font-bold`)}">`);
      ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
      _push(`</h3><p class="${ssrRenderClass(`text-${getBgColor()}-200`)}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</p></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Alert.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Alert-de414ce5.mjs.map
