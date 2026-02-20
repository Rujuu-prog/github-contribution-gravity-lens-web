// Preserve Node.js native Web APIs before jsdom environment setup
const nativeRequest = globalThis.Request;
const nativeResponse = globalThis.Response;
const nativeHeaders = globalThis.Headers;
const nativeFetch = globalThis.fetch;

Object.defineProperty(globalThis, "Request", {
  value: nativeRequest,
  writable: true,
  configurable: true,
});
Object.defineProperty(globalThis, "Response", {
  value: nativeResponse,
  writable: true,
  configurable: true,
});
Object.defineProperty(globalThis, "Headers", {
  value: nativeHeaders,
  writable: true,
  configurable: true,
});
Object.defineProperty(globalThis, "fetch", {
  value: nativeFetch,
  writable: true,
  configurable: true,
});
