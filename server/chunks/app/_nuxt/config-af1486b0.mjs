import { klona } from 'klona';
import { i as defuFn, e as useNuxtApp, h as defineAppConfig } from '../server.mjs';

const cfg0 = defineAppConfig({
  name: "Upgrade",
  description: "Upgrade your spotify with on-the-go.",
  social: {
    discord: "https://discord.gg/upgrade",
    twitter: "https://twitter.com/upgrade"
  }
});
const inlineConfig = {};
const __appConfig = /* @__PURE__ */ defuFn(cfg0, inlineConfig);
function useAppConfig() {
  const nuxtApp = useNuxtApp();
  if (!nuxtApp._appConfig) {
    nuxtApp._appConfig = klona(__appConfig);
  }
  return nuxtApp._appConfig;
}

export { useAppConfig as u };
//# sourceMappingURL=config-af1486b0.mjs.map
