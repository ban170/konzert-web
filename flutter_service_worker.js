'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0e3776e1ceaa95710baf6c4bb87ec79f",
"assets/AssetManifest.json": "3e2d1939609309e0bc955f7f6a53644b",
"assets/assets/ca/lets-encrypt-r3.pem": "be77e5992c00fcd753d1b9c11d3768f2",
"assets/assets/images/example-1-compressed.jpg": "fb798625640d076c9fcdf761c0dad43a",
"assets/assets/images/example-2-compressed.jpg": "2e04bbb6594bf6da5ebd7a9e05f3529b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "cf31e6224a7c59ed1c58d9db7a4fc9a0",
"assets/NOTICES": "497c265d601f34303f095917517d070a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1b18709b0aa5c19aa7c28379e0359893",
"/": "1b18709b0aa5c19aa7c28379e0359893",
"konzert-web/.git/config": "11fc7e6a269746a154fc4e943e6744db",
"konzert-web/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"konzert-web/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"konzert-web/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"konzert-web/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"konzert-web/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"konzert-web/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"konzert-web/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"konzert-web/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"konzert-web/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"konzert-web/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"konzert-web/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"konzert-web/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"konzert-web/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"konzert-web/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"konzert-web/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"konzert-web/.git/index": "34bbf06f32c7506eacfd968f20000e14",
"konzert-web/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"konzert-web/.git/logs/HEAD": "5974f0309e7fa9fcba8d4468fefd9663",
"konzert-web/.git/logs/refs/heads/main": "5974f0309e7fa9fcba8d4468fefd9663",
"konzert-web/.git/logs/refs/remotes/origin/HEAD": "5974f0309e7fa9fcba8d4468fefd9663",
"konzert-web/.git/objects/pack/pack-d0cbc4b9a27171412c94b475d56ba3d8cf10b5de.idx": "deb299462e5eddcb9ee6c7911d25d9d3",
"konzert-web/.git/objects/pack/pack-d0cbc4b9a27171412c94b475d56ba3d8cf10b5de.pack": "df4402d246f4d42af5a19d7fd825fad9",
"konzert-web/.git/packed-refs": "fba76e6e403c443efe37373735f96627",
"konzert-web/.git/refs/heads/main": "7b99417a7bda7a4ec9fb02eef441994a",
"konzert-web/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"main.dart.js": "9174f2578ad3f7c5361b8d8873bd1f10",
"manifest.json": "f8420d0f794e60ec540b24f40a68536e",
"version.json": "d443aa3cce4876d94eea6db948718115"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
