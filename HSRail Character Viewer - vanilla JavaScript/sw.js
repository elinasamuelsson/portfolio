const CACHE_STATIC_NAME = "static1.0";
const CACHE_DYNAMIC_NAME = "dynamic1.0";

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_STATIC_NAME).then(function (cache) {
      cache.addAll([
        "app.js",
        "characters.json",
        "index.html",
        "manifest.json",
        "reset.css",
        "style.css",
        "ticket_icon.png",
        "Character_Arlan_Splash_Art.png/",
        "Character_Asta_Splash_Art.png/",
        "Character_Aventurine_Splash_Art.png/",
        "Character_Bailu_Splash_Art.png/",
        "Character_Black_Swan_Splash_Art.png/",
        "Character_Clara_Splash_Art.png/",
        "Character_Dan_Heng_Splash_Art.png/",
        "Character_Dr._Ratio_Splash_Art.png/",
        "Character_Gepard_Splash_Art.png/",
        "Character_Guinaifen_Splash_Art.png/",
        "Character_Hanya_Splash_Art.png/",
        "Character_Herta_Splash_Art.png/",
        "Character_Himeko_Splash_Art.png/",
        "Character_Hook_Splash_Art.png/",
        "Character_Luka_Splash_Art.png/",
        "Character_Lynx_Splash_Art.png/",
        "Character_March_7th_Splash_Art.png/",
        "Character_Misha_Splash_Art.png/",
        "Character_Natasha_Splash_Art.png/",
        "Character_Pela_Splash_Art.png/",
        "Character_Qingque_Splash_Art.png/",
        "Character_Sampo_Splash_Art.png/",
        "Character_Serval_Splash_Art.png/",
        "Character_Sparkle_Splash_Art.png/",
        "Character_Sushang_Splash_Art.png/",
        "Character_Tingyun_Splash_Art.png/",
        "Character_Trailblazer_Splash_Art.png/",
        "Character_Yanqing_Splash_Art.png/",
        "Character_Yukong_Splash_Art.png/",
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
