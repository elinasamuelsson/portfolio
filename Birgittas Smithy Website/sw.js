self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("static").then(function (cache) {
      cache.addAll([
        "./images",
        "./styles",
        "index.html",
        "kontakt.html",
        "manifest.json",
        "om.html",
        "portfolio.html",
        "robots.txt",
        "sitemap.xml",
        "sw.js",
      ]);
    })
  );
});

self.addEventListener("activate", function (event) {});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.open("dynamic").then(function (cache) {
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
