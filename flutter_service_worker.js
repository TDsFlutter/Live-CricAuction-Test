'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "09659410a210ef04869918c1d0a9c1a1",
"version.json": "e91419365f5595b0c12f436a1b48bfbc",
"index.html": "bdf76933a472cfba0858bd8ff43cd51d",
"/": "bdf76933a472cfba0858bd8ff43cd51d",
"main.dart.js": "e2cb5c0231802f7023496d001cd1c87e",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5aa7ea51e75cd8d5cda2dba7b612ad59",
"assets/AssetManifest.json": "931542ffdaf258baa3a6e5504330829b",
"assets/NOTICES": "6f5edfb85abeb717295947f18f56d225",
"assets/FontManifest.json": "78113dbc15e9461b34b752a6f7e624cf",
"assets/AssetManifest.bin.json": "b8f24a1151378637628553a1263e9413",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "328e005d4ca83a2783e065540c18eaba",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/viewAuction/teamPlayerCountBG.webp": "ae30592e4860b19f5106c4704090580e",
"assets/assets/viewAuction/statusBg.webp": "50489394b0ba5604b00a40fbe084d6b2",
"assets/assets/viewAuction/theme1.webp": "d076c79037a69a2b0239449e76216191",
"assets/assets/viewAuction/crick_Badge.webp": "6466ac197cf741db615ddf286ec83534",
"assets/assets/viewAuction/testTeamLogo.webp": "7c1bfecc9d4fb63b761ea62755d16036",
"assets/assets/viewAuction/auctionNameBG.webp": "3afc0a06d466815b431ceac2fb470ca7",
"assets/assets/viewAuction/team2.webp": "ba3b262b29ad8d1e448b3131599eada4",
"assets/assets/viewAuction/playerNoBG.webp": "0bb75cfce03b63009da3fa7fcf692a28",
"assets/assets/viewAuction/theme4.webp": "27a9a760f57a026272f939b914081d2d",
"assets/assets/viewAuction/teamLogoBG.webp": "7ff740b99f3a34fb298eb9365ec45210",
"assets/assets/viewAuction/team1.webp": "2c7c09b38d19269cd2bdd20b88d69311",
"assets/assets/viewAuction/playerBG.webp": "38496f48de153909dfde8deada532d83",
"assets/assets/viewAuction/settingIcon.webp": "615a9a199e8d5d0cdd535040e949d2de",
"assets/assets/viewAuction/teamBG.webp": "bbbf023ed95cd06c4fb2acec7e371e97",
"assets/assets/viewAuction/bidCoin.webp": "3f9af30214e8a349df9faef7211939ac",
"assets/assets/viewAuction/theme2.webp": "3ff4f796e0f80002225499a7db46affd",
"assets/assets/viewAuction/testPlayerImage.webp": "2a17db88323996f21a3a4ebd99afa7b6",
"assets/assets/viewAuction/theme3.webp": "6545641618c8b606e97bbf4964edd710",
"assets/assets/viewAuction/maxBidCoin.webp": "f7d76faceed7ce5071936d94e6a60ab7",
"assets/assets/fonts/Urbanist-Bold.ttf": "1ffe51e22e7841c65481a727515e2198",
"assets/assets/fonts/Urbanist-Regular.ttf": "4c1ae1074c39cca3b3fd7a788b5afd96",
"assets/assets/fonts/Urbanist-SemiBold.ttf": "ae731014b8aa4267df78b8e854d006ef",
"assets/assets/fonts/NotoSansGujarati-Bold.ttf": "bd0dc43792064152dd4d36fbdc678b5f",
"assets/assets/fonts/Urbanist-ExtraBold.ttf": "f4a05764495d2286312d1c6edd9513b4",
"assets/assets/fonts/Urbanist-Medium.ttf": "9ffbd4b23b829ddd499aaf5eb925a86c",
"assets/assets/fonts/Battambang-Bold.ttf": "f72d3da04f9150f4a3d792ad06fb01bb",
"assets/assets/fonts/Battambang-Regular.ttf": "6a5b831b3323bee3a53761c64b6af0ba",
"assets/assets/fonts/Battambang-Light.ttf": "dffb1e5cae52e098c8bce28c5ffc7865",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
