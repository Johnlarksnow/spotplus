globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { klona } from 'klona';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';
import gracefulShutdown from 'http-graceful-shutdown';

function isObject(value) {
  return value !== null && typeof value === "object";
}
function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isObject(value) && isObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defu = createDefu();
const defuFn = createDefu((object, key, currentValue) => {
  if (typeof object[key] !== "undefined" && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});

const defineAppConfig = (config) => config;

const appConfig0 = defineAppConfig({
  name: "Upgrade",
  description: "Upgrade your spotify with on-the-go.",
  social: {
    discord: "https://discord.gg/upgrade",
    twitter: "https://twitter.com/upgrade"
  }
});

const inlineAppConfig = {};

const appConfig = defuFn(appConfig0, inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "persistedState": {
      "storage": "cookies",
      "debug": false,
      "cookieOptions": {}
    }
  },
  "motion": {}
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

storage.mount('/assets', assets$1);

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const script = "\"use strict\";(()=>{const a=window,e=document.documentElement,m=[\"dark\",\"light\"],c=window.localStorage.getItem(\"nuxt-color-mode\")||\"dark\";let n=c===\"system\"?f():c;const l=e.getAttribute(\"data-color-mode-forced\");l&&(n=l),i(n),a[\"__NUXT_COLOR_MODE__\"]={preference:c,value:n,getColorScheme:f,addColorScheme:i,removeColorScheme:d};function i(o){const t=\"\"+o+\"\",s=\"\";e.classList?e.classList.add(t):e.className+=\" \"+t,s&&e.setAttribute(\"data-\"+s,o)}function d(o){const t=\"\"+o+\"\",s=\"\";e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp(t,\"g\"),\"\"),s&&e.removeAttribute(\"data-\"+s)}function r(o){return a.matchMedia(\"(prefers-color-scheme\"+o+\")\")}function f(){if(a.matchMedia&&r(\"\").media!==\"not all\"){for(const o of m)if(r(\":\"+o).matches)return o}return\"light\"}})();\n";

const _1KvQhXVZDO = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const plugins = [
  _1KvQhXVZDO
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function trapUnhandledNodeErrors() {
  {
    process.on(
      "unhandledRejection",
      (err) => console.error("[nitro] [unhandledRejection] " + err)
    );
    process.on(
      "uncaughtException",
      (err) => console.error("[nitro]  [uncaughtException] " + err)
    );
  }
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(html);
});

const assets = {
  "/btc.svg": {
    "type": "image/svg+xml",
    "etag": "\"815-rk80FL/9JZSt7beU1Pnu+yqGw4I\"",
    "mtime": "2023-07-17T15:01:18.877Z",
    "size": 2069,
    "path": "../public/btc.svg"
  },
  "/cbase.svg": {
    "type": "image/svg+xml",
    "etag": "\"2fb-wAr0qZFGC4BC71U2gSFaoSKXzHc\"",
    "mtime": "2023-07-17T15:01:18.910Z",
    "size": 763,
    "path": "../public/cbase.svg"
  },
  "/eth.svg": {
    "type": "image/svg+xml",
    "etag": "\"541-nB0DzAS7nS4vhXetVhq7nJrJ2uU\"",
    "mtime": "2023-07-17T15:01:18.941Z",
    "size": 1345,
    "path": "../public/eth.svg"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"",
    "mtime": "2023-07-17T15:01:18.957Z",
    "size": 0,
    "path": "../public/favicon.ico"
  },
  "/gradient.png": {
    "type": "image/png",
    "etag": "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"",
    "mtime": "2023-07-17T15:01:18.973Z",
    "size": 0,
    "path": "../public/gradient.png"
  },
  "/image.webp": {
    "type": "image/webp",
    "etag": "\"2153a-4X6v3T0AXDIkTmSR2pP/S3NP7ZQ\"",
    "mtime": "2023-07-17T15:01:19.005Z",
    "size": 136506,
    "path": "../public/image.webp"
  },
  "/ltc.svg": {
    "type": "image/svg+xml",
    "etag": "\"1e9-5dPLUxqikRI4fpSp1ooepYNXbIs\"",
    "mtime": "2023-07-17T15:01:19.054Z",
    "size": 489,
    "path": "../public/ltc.svg"
  },
  "/usc.svg": {
    "type": "image/svg+xml",
    "etag": "\"6a0-mxy/2ovZM2i2febpq6Yv0lC/x+4\"",
    "mtime": "2023-07-17T15:01:19.087Z",
    "size": 1696,
    "path": "../public/usc.svg"
  },
  "/usdt.svg": {
    "type": "image/svg+xml",
    "etag": "\"36a-ft6pUC51WD4Pk4Feu2cArQSvfgQ\"",
    "mtime": "2023-07-17T15:01:19.115Z",
    "size": 874,
    "path": "../public/usdt.svg"
  },
  "/_nuxt/Alert.vue.5ca93200.js": {
    "type": "application/javascript",
    "etag": "\"400-ff5MQVfcbvYMi0BldbuJFJEo41E\"",
    "mtime": "2023-07-22T00:08:08.884Z",
    "size": 1024,
    "path": "../public/_nuxt/Alert.vue.5ca93200.js"
  },
  "/_nuxt/auth.97272d93.js": {
    "type": "application/javascript",
    "etag": "\"11e-iNYLMWX575M58GQlBiUg7f4G12Q\"",
    "mtime": "2023-07-22T00:08:08.884Z",
    "size": 286,
    "path": "../public/_nuxt/auth.97272d93.js"
  },
  "/_nuxt/buy.2fe559e6.js": {
    "type": "application/javascript",
    "etag": "\"452-zCjli+7u3OgDmIWlYvDwhti1EZw\"",
    "mtime": "2023-07-22T00:08:08.878Z",
    "size": 1106,
    "path": "../public/_nuxt/buy.2fe559e6.js"
  },
  "/_nuxt/checkout.2b533911.js": {
    "type": "application/javascript",
    "etag": "\"163-is5ZTbYoM8Eew681Oy5AdbhgnDk\"",
    "mtime": "2023-07-22T00:08:08.878Z",
    "size": 355,
    "path": "../public/_nuxt/checkout.2b533911.js"
  },
  "/_nuxt/client-only.7d0f13ae.js": {
    "type": "application/javascript",
    "etag": "\"1d4-eWVscPf/qFKAKc+Wgz11tAOoZE4\"",
    "mtime": "2023-07-22T00:08:08.879Z",
    "size": 468,
    "path": "../public/_nuxt/client-only.7d0f13ae.js"
  },
  "/_nuxt/config.4f48d583.js": {
    "type": "application/javascript",
    "etag": "\"14f-t/Q7+1OW4CL20NzFA8xiRmRJ0I8\"",
    "mtime": "2023-07-22T00:08:08.884Z",
    "size": 335,
    "path": "../public/_nuxt/config.4f48d583.js"
  },
  "/_nuxt/dash.ec88adc4.js": {
    "type": "application/javascript",
    "etag": "\"28b-8Clk8/oeNhoeNL+rEhxTLlaKUqo\"",
    "mtime": "2023-07-22T00:08:08.884Z",
    "size": 651,
    "path": "../public/_nuxt/dash.ec88adc4.js"
  },
  "/_nuxt/default.e88483b8.js": {
    "type": "application/javascript",
    "etag": "\"298-4CRS0+3AWKXcXDMI45foSv7gMcw\"",
    "mtime": "2023-07-22T00:08:08.878Z",
    "size": 664,
    "path": "../public/_nuxt/default.e88483b8.js"
  },
  "/_nuxt/entry.0819dfc5.js": {
    "type": "application/javascript",
    "etag": "\"329ba-mONAGNsYmHhPmOQD40nMKz/wDZY\"",
    "mtime": "2023-07-22T00:08:08.885Z",
    "size": 207290,
    "path": "../public/_nuxt/entry.0819dfc5.js"
  },
  "/_nuxt/entry.7febcf90.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"89-uSJyeBZ4lxOLGxeCngUKgcinpV8\"",
    "mtime": "2023-07-22T00:08:08.877Z",
    "size": 137,
    "path": "../public/_nuxt/entry.7febcf90.css"
  },
  "/_nuxt/error-404.8bdbaeb8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e70-jl7r/kE1FF0H+CLPNh+07RJXuFI\"",
    "mtime": "2023-07-22T00:08:08.872Z",
    "size": 3696,
    "path": "../public/_nuxt/error-404.8bdbaeb8.css"
  },
  "/_nuxt/error-404.de18c689.js": {
    "type": "application/javascript",
    "etag": "\"907-vTXxlotpBJSA+RO2vjElJnDMwT0\"",
    "mtime": "2023-07-22T00:08:08.884Z",
    "size": 2311,
    "path": "../public/_nuxt/error-404.de18c689.js"
  },
  "/_nuxt/error-500.0cd11c4d.js": {
    "type": "application/javascript",
    "etag": "\"78b-RuUPulFyOUJF9w1PDB+m4Nya9Rk\"",
    "mtime": "2023-07-22T00:08:08.885Z",
    "size": 1931,
    "path": "../public/_nuxt/error-500.0cd11c4d.js"
  },
  "/_nuxt/error-500.b63a96f5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7e0-loEWA9n4Kq4UMBzJyT6hY9SSl00\"",
    "mtime": "2023-07-22T00:08:08.878Z",
    "size": 2016,
    "path": "../public/_nuxt/error-500.b63a96f5.css"
  },
  "/_nuxt/fetch.e9598783.js": {
    "type": "application/javascript",
    "etag": "\"d1f-La5+tiM9ja6baO37cGVjk+LvU3Y\"",
    "mtime": "2023-07-22T00:08:08.878Z",
    "size": 3359,
    "path": "../public/_nuxt/fetch.e9598783.js"
  },
  "/_nuxt/Icon.31621e1e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"43-Goh9NAiYJuEQljAvCLCepbumWqg\"",
    "mtime": "2023-07-22T00:08:08.878Z",
    "size": 67,
    "path": "../public/_nuxt/Icon.31621e1e.css"
  },
  "/_nuxt/Icon.ea438a13.js": {
    "type": "application/javascript",
    "etag": "\"5350-lbSfKRpVmgX80NjwqRZMBBKh1eE\"",
    "mtime": "2023-07-22T00:08:08.886Z",
    "size": 21328,
    "path": "../public/_nuxt/Icon.ea438a13.js"
  },
  "/_nuxt/IconCSS.4992ddab.js": {
    "type": "application/javascript",
    "etag": "\"3b2-D9vqaeJu8OApe7xgeJmdNzyjl00\"",
    "mtime": "2023-07-22T00:08:08.885Z",
    "size": 946,
    "path": "../public/_nuxt/IconCSS.4992ddab.js"
  },
  "/_nuxt/IconCSS.6edc7bff.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"102-F5FEFmWVF9wjE1jgjQsXqGhD4Cc\"",
    "mtime": "2023-07-22T00:08:08.878Z",
    "size": 258,
    "path": "../public/_nuxt/IconCSS.6edc7bff.css"
  },
  "/_nuxt/index.26355968.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"33a2f-PD/UAjUQRyeGEcG3Cm5wDf7lsIc\"",
    "mtime": "2023-07-22T00:08:08.878Z",
    "size": 211503,
    "path": "../public/_nuxt/index.26355968.css"
  },
  "/_nuxt/index.3a72e978.js": {
    "type": "application/javascript",
    "etag": "\"2bc65-KldqaldvRWHbknz1Wto/d693e6w\"",
    "mtime": "2023-07-22T00:08:08.886Z",
    "size": 179301,
    "path": "../public/_nuxt/index.3a72e978.js"
  },
  "/_nuxt/index.4c1f6d8a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3267b-SExLJIwMRs2dAjJ1I2HEJKKkrbw\"",
    "mtime": "2023-07-22T00:08:08.878Z",
    "size": 206459,
    "path": "../public/_nuxt/index.4c1f6d8a.css"
  },
  "/_nuxt/index.7ecc4109.js": {
    "type": "application/javascript",
    "etag": "\"1d34-nYVVzKo4Z/r4hsiq9QT/h7Rg+LE\"",
    "mtime": "2023-07-22T00:08:08.885Z",
    "size": 7476,
    "path": "../public/_nuxt/index.7ecc4109.js"
  },
  "/_nuxt/index.8dcceaea.js": {
    "type": "application/javascript",
    "etag": "\"f4f-6xCRw7So5MzC5hOlp7jv21nMJXs\"",
    "mtime": "2023-07-22T00:08:08.885Z",
    "size": 3919,
    "path": "../public/_nuxt/index.8dcceaea.js"
  },
  "/_nuxt/index.b56c5111.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"33c2b-DR0szOoa3osqBcJEbC1HYcEIGXk\"",
    "mtime": "2023-07-22T00:08:08.878Z",
    "size": 212011,
    "path": "../public/_nuxt/index.b56c5111.css"
  },
  "/_nuxt/Loader.b6e2be6a.js": {
    "type": "application/javascript",
    "etag": "\"1c8-1KjotxIC24Pij6Y3L1CIL5lCK4c\"",
    "mtime": "2023-07-22T00:08:08.882Z",
    "size": 456,
    "path": "../public/_nuxt/Loader.b6e2be6a.js"
  },
  "/_nuxt/login.4204c697.js": {
    "type": "application/javascript",
    "etag": "\"91d-DSulMo4+/murEMAd4F2QVcyXj4E\"",
    "mtime": "2023-07-22T00:08:08.885Z",
    "size": 2333,
    "path": "../public/_nuxt/login.4204c697.js"
  },
  "/_nuxt/login.feb0ee24.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"15c-80o4Uz+HVdQRUdRUfKVZoziC00c\"",
    "mtime": "2023-07-22T00:08:08.878Z",
    "size": 348,
    "path": "../public/_nuxt/login.feb0ee24.css"
  },
  "/_nuxt/nuxt-link.8ef527b5.js": {
    "type": "application/javascript",
    "etag": "\"1102-WsrJT1QlQqr9/f8rYzRZwAb2bZs\"",
    "mtime": "2023-07-22T00:08:08.878Z",
    "size": 4354,
    "path": "../public/_nuxt/nuxt-link.8ef527b5.js"
  },
  "/_nuxt/payments.5f929c33.js": {
    "type": "application/javascript",
    "etag": "\"9f4-NNbY+WfJcBM2JvGSxr9mgI7nvvM\"",
    "mtime": "2023-07-22T00:08:08.885Z",
    "size": 2548,
    "path": "../public/_nuxt/payments.5f929c33.js"
  },
  "/_nuxt/payments.d863ffc1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"39-o8KYB9lbjkcOrmHcUc2O0Ak0r6s\"",
    "mtime": "2023-07-22T00:08:08.878Z",
    "size": 57,
    "path": "../public/_nuxt/payments.d863ffc1.css"
  },
  "/_nuxt/register.1c9a0365.js": {
    "type": "application/javascript",
    "etag": "\"b44-g+JnfNjNlj9r5lkOZfwiUseVFQM\"",
    "mtime": "2023-07-22T00:08:08.885Z",
    "size": 2884,
    "path": "../public/_nuxt/register.1c9a0365.js"
  },
  "/_nuxt/register.23b2738f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"126-bH7ejMPOrIOYkmD+gTYdoVlZVhQ\"",
    "mtime": "2023-07-22T00:08:08.878Z",
    "size": 294,
    "path": "../public/_nuxt/register.23b2738f.css"
  },
  "/_nuxt/renewals.2e52964e.js": {
    "type": "application/javascript",
    "etag": "\"56c-uzqyF5YyQIBZBqHXP6Ab5pi6tRs\"",
    "mtime": "2023-07-22T00:08:08.885Z",
    "size": 1388,
    "path": "../public/_nuxt/renewals.2e52964e.js"
  },
  "/_nuxt/store.138f40b4.js": {
    "type": "application/javascript",
    "etag": "\"742-MYFASYcde98ju3OAllONMQRMv3Q\"",
    "mtime": "2023-07-22T00:08:08.878Z",
    "size": 1858,
    "path": "../public/_nuxt/store.138f40b4.js"
  },
  "/_nuxt/Up.d91b3ff3.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"328a3-mCHGEMpwndPfIoiofPsbx0yNuW0\"",
    "mtime": "2023-07-22T00:08:08.878Z",
    "size": 207011,
    "path": "../public/_nuxt/Up.d91b3ff3.css"
  },
  "/_nuxt/Up.vue.59c5809d.js": {
    "type": "application/javascript",
    "etag": "\"cb4e-1M+ksHLIdbuwimPor4/9xb1Dkwo\"",
    "mtime": "2023-07-22T00:08:08.886Z",
    "size": 52046,
    "path": "../public/_nuxt/Up.vue.59c5809d.js"
  },
  "/_nuxt/upgrade.293ae19a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4f-Oo4sf/yI8VpX89cJhJpTH1mA9k4\"",
    "mtime": "2023-07-22T00:08:08.878Z",
    "size": 79,
    "path": "../public/_nuxt/upgrade.293ae19a.css"
  },
  "/_nuxt/upgrade.51323620.js": {
    "type": "application/javascript",
    "etag": "\"b04-E/UxprfbxZfeCkSoA6D1nf4h4hE\"",
    "mtime": "2023-07-22T00:08:08.885Z",
    "size": 2820,
    "path": "../public/_nuxt/upgrade.51323620.js"
  },
  "/_nuxt/upgrades.c761be4e.js": {
    "type": "application/javascript",
    "etag": "\"5b8-1YQwYBhkMAhuA6Msz0re6iBKCFs\"",
    "mtime": "2023-07-22T00:08:08.885Z",
    "size": 1464,
    "path": "../public/_nuxt/upgrades.c761be4e.js"
  },
  "/_nuxt/utils.f07451bf.js": {
    "type": "application/javascript",
    "etag": "\"4ef-DCm0Sq/lGrF6VWvyE8ZXwC7rTzE\"",
    "mtime": "2023-07-22T00:08:08.884Z",
    "size": 1263,
    "path": "../public/_nuxt/utils.f07451bf.js"
  },
  "/_nuxt/_id_.ee46ffe8.js": {
    "type": "application/javascript",
    "etag": "\"ce9-TRm+tgbl89XGX9NT1D6V45sYXok\"",
    "mtime": "2023-07-22T00:08:08.884Z",
    "size": 3305,
    "path": "../public/_nuxt/_id_.ee46ffe8.js"
  },
  "/_nuxt/_plugin-vue_export-helper.c27b6911.js": {
    "type": "application/javascript",
    "etag": "\"5b-eFCz/UrraTh721pgAl0VxBNR1es\"",
    "mtime": "2023-07-22T00:08:08.884Z",
    "size": 91,
    "path": "../public/_nuxt/_plugin-vue_export-helper.c27b6911.js"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_E4BiRE = () => import('../handlers/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_E4BiRE, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_E4BiRE, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || {};
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT, 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  gracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((err) => {
          console.error(err);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const listener = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const addressInfo = listener.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${addressInfo.family === "IPv6" ? `[${addressInfo.address}]` : addressInfo.address}:${addressInfo.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
