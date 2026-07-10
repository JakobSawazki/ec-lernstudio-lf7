const CACHE_NAME = "ec-lernstudio-v35";
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css",
  "./content.js",
  "./app.js",
  "./icon.png",
  "./manifest.webmanifest",
  "./assets/ec-lernstudio-logo.png",
  "./assets/module-icons/lf2-2-2-layout.png",
  "./assets/module-icons/lf2-2-3-sortiment.png",
  "./assets/module-icons/lf2-2-4-impressum.png",
  "./assets/module-icons/lf2-2-5-haftung.png",
  "./assets/module-icons/lf2-2-6-produktdetailseite.png",
  "./assets/module-icons/lf2-2-7-kundeninformationen.png",
  "./assets/module-icons/lf2-2-8-produktbeschreibung.png",
  "./assets/module-icons/lf2-2-9-artikelauswahl.png",
  "./assets/module-icons/lf2-2-10-visualisierungen.png",
  "./assets/module-icons/lf2-2-12-preisgestaltung.png",
  "./assets/module-icons/lf2-2-16-warenwirtschaft.png",
  "./assets/module-icons/lf6-6-0-servicekanaele.png",
  "./assets/module-icons/lf6-6-13-email.png",
  "./assets/module-icons/lf6-6-14-social-media.png",
  "./assets/module-icons/lf6-6-15-vertriebswege.png",
  "./assets/lf7-marketing-lab.png",
  "./assets/ecommerce-consultation-hero.png",
  "./assets/materials/lf2-2-2-webshop-layout-arbeitsblatt.pdf",
  "./assets/materials/lf2-2-3-webshop-seiten-arbeitsblatt.pdf",
  "./assets/materials/lf2-2-4-impressum-arbeitsblatt.pdf",
  "./assets/materials/lf2-2-5-haftung-arbeitsblatt.pdf",
  "./assets/materials/lf2-2-6-produktdetailseite-arbeitsblatt.pdf",
  "./assets/materials/lf2-2-7-kundeninformationen-arbeitsblatt.pdf",
  "./assets/materials/lf2-2-8-produktbeschreibung-arbeitsblatt.pdf",
  "./assets/materials/lf2-2-9-artikelauswahl-arbeitsblatt.pdf",
  "./assets/materials/lf2-2-10-visualisierungen-arbeitsblatt.pdf",
  "./assets/materials/lf2-2-12-preisgestaltung-arbeitsblatt.pdf",
  "./assets/materials/lf2-2-16-warenwirtschaft-arbeitsblatt.pdf",
  "./assets/materials/lf7-seo-sea-transferfall.pdf",
  "./assets/materials/lf7-webanalyse-arbeitsblatt.pdf",
  "./assets/materials/lf6-servicekanaele-arbeitsblatt.pdf",
  "./assets/materials/lf6-email-arbeitsblatt.pdf",
  "./assets/materials/lf6-social-media-arbeitsblatt.pdf",
  "./assets/materials/lf6-vertriebswege-arbeitsblatt.pdf",
  "./assets/materials/lf2-projektidee-ecommerce-homepage.pdf",
  "./assets/materials/dv-lehrplan-kompass.pdf"
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
