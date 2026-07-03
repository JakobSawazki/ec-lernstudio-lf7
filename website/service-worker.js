const CACHE_NAME = "ec-lernstudio-v6";
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css",
  "./content.js",
  "./app.js",
  "./icon.svg",
  "./manifest.webmanifest",
  "./assets/ec-lernstudio-logo.svg",
  "./assets/lf7-marketing-lab.png",
  "./assets/ecommerce-consultation-hero.png",
  "./assets/materials/lf2-2-2-webshop-layout-arbeitsblatt.pdf",
  "./assets/materials/lf2-2-4-impressum-arbeitsblatt.pdf"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
      )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type === "opaque") return response;
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      });
    })
  );
});
