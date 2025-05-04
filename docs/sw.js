/*const CACHE_STATIC_NAME = "static1.0";
const CACHE_DYNAMIC_NAME = "dynamic1.0";

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_STATIC_NAME).then(function (cache) {
      cache.addAll([
        "index.html",
        "about.html",
        "contact.html",
        "styles-main.css",
        "styles-dark.css",
        "app.js",
        "sw.js",
        "manifest.json",
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
    caches.open(CACHE_DYNAMIC_NAME).then((cache) => {
      if (event.request.method !== "GET") {
        return fetch(event.request);
      }
      return fetch(event.request).then((response) => {
        cache.put(event.request, response.clone());
        return response;
      });
    })
  );
}); */