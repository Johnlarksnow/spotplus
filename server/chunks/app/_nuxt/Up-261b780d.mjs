import { _ as __nuxt_component_0 } from './nuxt-link-563b35af.mjs';
import __nuxt_component_0$1 from './Icon-0c592af8.mjs';
import { defineComponent, ref, withAsyncContext, resolveDirective, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-7718b97b.mjs';
import { u as useAppConfig } from './config-af1486b0.mjs';
import { k as useWindowScroll } from '../server.mjs';
import { u as useAuthStore } from './store-25959e0b.mjs';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderStyle, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { Tippy } from 'vue-tippy';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Nav",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useAppConfig();
    const { y } = useWindowScroll();
    const authStore = useAuthStore();
    const authData = ref();
    const links = [
      {
        name: "Features",
        to: "/#features"
      },
      {
        name: "Pricing",
        to: "/#pricing"
      },
      {
        name: "Upgrade",
        to: "/upgrade"
      }
    ];
    const dashboardLinks = [
      {
        name: "Home",
        path: "/dashboard",
        icon: "tabler:home"
      },
      {
        name: "Payments",
        path: "/dashboard/payments",
        icon: "tabler:receipt"
      },
      {
        name: "Upgrades",
        path: "/dashboard/upgrades",
        icon: "tabler:arrow-big-up-lines-filled"
      },
      {
        name: "Renewals",
        path: "/dashboard/renewals",
        icon: "tabler:rotate-clockwise"
      }
    ];
    if (authStore.checkJwt()) {
      const { data, pending, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(
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
        "$6XH90afcYj"
      )), __temp = await __temp, __restore(), __temp);
      authData.value = data.value;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      const _directive_motion = resolveDirective("motion");
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: ["w-full flex z-30 top-0 sticky items-center justify-center", {
          "backdrop-blur-lg backdrop-filter": unref(y) > 300
        }]
      }, _attrs, ssrGetDirectiveProps(_ctx, _directive_motion, {
        initial: { y: -100 },
        enter: {
          y: 0,
          transition: {
            delay: 800
          }
        }
      })))}><div class="w-11/12 my-6 transition-all duration-300 grid grid-cols-2 md:grid-cols-3 items-center justify-between"><a href="/"><div class="logo"><a href="#"><img style="${ssrRenderStyle({ "height": "40px" })}" src="https://i.imgur.com/uZXb392.png" alt="logo"></a></div></a><div class="md:flex hidden justify-center gap-4 items-center"><!--[-->`);
      ssrRenderList(links, (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: link.name,
          to: link.to,
          class: "text-lg font-bold inline-block after:h-[0.1rem] after:w-0 after:transition-all after:block hover:after:w-full after:bg-white",
          style: { "color": "#3DB36A" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
      if (!unref(authStore).checkJwt()) {
        _push(`<div class="flex justify-end gap-2 items-center">`);
        if (_ctx.$route.path !== "/login") {
          _push(ssrRenderComponent(_component_NuxtLink, {
            class: "md:text-lg px-2 md:px-4 py-2 flex gap-2 items-center rounded-lg",
            to: "/login",
            style: { "color": "white", "background-color": "#32a852", "text-decoration": "none" }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Login `);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "tabler:login",
                  class: "w-6 h-6"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createTextVNode(" Login "),
                  createVNode(_component_Icon, {
                    name: "tabler:login",
                    class: "w-6 h-6"
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (_ctx.$route.path !== "/register") {
          _push(ssrRenderComponent(_component_NuxtLink, {
            class: "md:text-lg bg-green-900 px-2 md:px-4 py-2 flex gap-2 items-center rounded-lg",
            to: "/register",
            style: { "color": "white", "background-color": "#32a852", "text-decoration": "none" }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Register `);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "tabler:plus",
                  class: "w-6 h-6"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createTextVNode(" Register "),
                  createVNode(_component_Icon, {
                    name: "tabler:plus",
                    class: "w-6 h-6"
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<div class="flex justify-end gap-2 items-center"><div class="group">`);
        _push(ssrRenderComponent(unref(Tippy), {
          interactive: "",
          "hide-on-click": true,
          style: { "background-color": "#0A0A0A" }
        }, {
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col items-end p-2 gap-2" style="${ssrRenderStyle({ "background-color": "#0A0A0A" })}"${_scopeId}><!--[-->`);
              ssrRenderList(dashboardLinks, (link) => {
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  style: { "color": "white", "text-decoration": "none", "text-align": "center" },
                  key: link.name,
                  to: link.path,
                  class: "text-lg font-bold text-left w-full hover:text-green-500 transition-all"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(link.name)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(link.name), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--><button style="${ssrRenderStyle({ "color": "white", "background-color": "#32a852", "text-decoration": "none" })}" class="md:text-lg bg-green-900 px-2 md:px-4 py-2 flex gap-2 items-center rounded-lg"${_scopeId}> Logout `);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "tabler:logout",
                class: "w-6 h-6"
              }, null, _parent2, _scopeId));
              _push2(`</button></div>`);
            } else {
              return [
                createVNode("div", {
                  class: "flex flex-col items-end p-2 gap-2",
                  style: { "background-color": "#0A0A0A" }
                }, [
                  (openBlock(), createBlock(Fragment, null, renderList(dashboardLinks, (link) => {
                    return createVNode(_component_NuxtLink, {
                      style: { "color": "white", "text-decoration": "none", "text-align": "center" },
                      key: link.name,
                      to: link.path,
                      class: "text-lg font-bold text-left w-full hover:text-green-500 transition-all"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(link.name), 1)
                      ]),
                      _: 2
                    }, 1032, ["to"]);
                  }), 64)),
                  createVNode("button", {
                    style: { "color": "white", "background-color": "#32a852", "text-decoration": "none" },
                    class: "md:text-lg bg-green-900 px-2 md:px-4 py-2 flex gap-2 items-center rounded-lg",
                    onClick: ($event) => unref(authStore).signOut()
                  }, [
                    createTextVNode(" Logout "),
                    createVNode(_component_Icon, {
                      name: "tabler:logout",
                      class: "w-6 h-6"
                    })
                  ], 8, ["onClick"])
                ])
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<button class="flex gap-2 items-center"${_scopeId}><img${ssrRenderAttr("src", unref(authData).avatar)} class="w-12 h-12 rounded-full"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "tabler:chevron-down",
                class: "w-8 h-8"
              }, null, _parent2, _scopeId));
              _push2(`</button>`);
            } else {
              return [
                createVNode("button", { class: "flex gap-2 items-center" }, [
                  createVNode("img", {
                    src: unref(authData).avatar,
                    class: "w-12 h-12 rounded-full"
                  }, null, 8, ["src"]),
                  createVNode(_component_Icon, {
                    name: "tabler:chevron-down",
                    class: "w-8 h-8"
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      }
      _push(`</div></nav>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Nav.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    useAuthStore();
    useAppConfig();
    (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer-area bg-f7fafd" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-3 col-md-6"><div class="single-footer-widget"><div class="logo"><a href="#"><img style="${ssrRenderStyle({ "height": "70px" })}" src="https://i.imgur.com/uZXb392.png" alt="logo"></a></div></div></div><div class="col-lg-3 col-md-6"><div class="single-footer-widget pl-5"></div></div><div class="col-lg-3 col-md-6"><div class="single-footer-widget"><h3>Spotplus</h3><ul class="list"><li><a href="/upgrade">Upgrade</a></li><li><a href="/renewals">Renew</a></li><li><a href="/dashboard">Dashboard</a></li></ul></div></div><div class="col-lg-3 col-md-6"><div class="single-footer-widget"><h3>Socials</h3><ul class="social-links"><a style="${ssrRenderStyle({ "text-decoration": "none", "color": "white" })}" href="https://discord.gg/spotifyplug">Discord</a> <br></ul></div></div><div class="col-lg-12 col-md-12"><div class="copyright-area"><p>Copyright \xA9 2023 SpotPlus. All rights reserved.</p></div></div></div></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Up",
  __ssrInlineRender: true,
  setup(__props) {
    const { y } = useWindowScroll();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      if (unref(y) > 200) {
        _push(`<button${ssrRenderAttrs(mergeProps({ class: "flex p-2 rounded-full bg-[#181818] fixed z-40 bottom-5 right-5" }, _attrs))}>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "tabler:chevron-up",
          class: "w-10 h-10"
        }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Up.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$2 as _, _sfc_main$1 as a, _sfc_main as b };
//# sourceMappingURL=Up-261b780d.mjs.map
