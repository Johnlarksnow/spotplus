import { ref } from 'vue';
import { g as defineStore, b as useRouter } from '../server.mjs';
import jwt_decode from 'jwt-decode';

const useAuthStore = defineStore(
  "auth",
  () => {
    const jwt = ref();
    const expireDate = ref();
    const userId = ref();
    function signOut() {
      const router = useRouter();
      reset();
      router.push("/");
    }
    function signIn(passedJwt) {
      const router = useRouter();
      jwt.value = passedJwt;
      router.push("/dashboard");
    }
    function decodeJwt() {
      const decodedJwt = jwt_decode(jwt.value);
      return decodedJwt;
    }
    function reset() {
      jwt.value = "";
      expireDate.value = void 0;
      userId.value = "";
    }
    function checkJwt() {
      return isJWTValid(jwt.value);
    }
    return {
      jwt,
      signOut,
      signIn,
      decodeJwt,
      reset,
      checkJwt
    };
  },
  {
    persist: true
  }
);
function isJWTValid(token) {
  if (typeof token !== "string")
    return false;
  const parts = token.split(".");
  if (parts.length !== 3)
    return false;
  const header = JSON.parse(atob(parts[0]));
  const payload = JSON.parse(atob(parts[1]));
  if (typeof header !== "object" || typeof payload !== "object")
    return false;
  if (typeof header.alg === "undefined")
    return false;
  const currentTimestamp = Math.floor(Date.now() / 1e3);
  if (typeof payload.exp !== "undefined" && payload.exp < currentTimestamp)
    return false;
  return true;
}

export { useAuthStore as u };
//# sourceMappingURL=store-25959e0b.mjs.map
