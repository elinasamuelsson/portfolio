const CACHE_STATIC_NAME = "static1.0";
const CACHE_DYNAMIC_NAME = "dynamic1.0";

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_STATIC_NAME).then(function (cache) {
      cache.addAll([
        "./images/armband01.webp",
        "./images/armband02.webp",
        "./images/birgitta_250x350.webp",
        "./images/birgitta_500x700.webp",
        "./images/gangjarn01.webp",
        "./images/gangjarn02.webp",
        "./images/icon-192x192.png",
        "./images/icon-256x256.png",
        "./images/icon-384x384.png",
        "./images/icon-512x512.png",
        "./images/screenshot-1080x1920.png",
        "./images/screenshot-1280x720.png",
        "./images/lampor.webp",
        "./images/lykta.webp",
        "./images/smedjeverktygFonster_1024x576.webp",
        "./images/smedjeverktygFonster_1280x720.webp",
        "./images/smedjeverktygFonster_1440x810.webp",
        "./images/smedjeverktygFonster_1920x1080.webp",
        "./images/smedjeverktygFonster_staende.webp",
        "./images/vaggkrokar.webp",
        "./images/vedstall.webp",
        "./styles/fonts.css",
        "./styles/footer.css",
        "./styles/main.css",
        "./styles/mediaqueries.css",
        "./styles/normalize.css",
        "./styles/styles.css",
        "./index.html",
        "./kontakt.html",
        "./manifest.json",
        "./om.html",
        "./portfolio.html"
      ]);
    })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(
        keyList.map(function (key) {
          if (key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
            caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.open(CACHE_DYNAMIC_NAME).then(function (cache) {
      return cache.match(event.request).then(function (response) {
        return (
          response ||
          fetch(event.request).then(function (networkResponse) {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          })
        );
      });
    })
  );
});
