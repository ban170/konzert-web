'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d5a5d30041f7b39ae672f5360ded7f41",
".git/config": "11fc7e6a269746a154fc4e943e6744db",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6aecc6c48cba3cfd24f830225ecf1d74",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "98385eaf976b1133d34868a37dff9660",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0ce40b6552152c7429e26342430a5082",
".git/logs/refs/heads/main": "0ce40b6552152c7429e26342430a5082",
".git/logs/refs/remotes/origin/HEAD": "cff4144bec8ea200ef539294483fac4f",
".git/logs/refs/remotes/origin/main": "f409178fc3becfcc4647278c3a30b12b",
".git/objects/0a/a93c628ad8377df42b8d70c25aed1865ce5354": "49d8541736cbf554b5a681c08b4e5bf6",
".git/objects/17/fd1dffba46ce32e9bef0e4e94d30c2e3481e5d": "188c030b0d1130cc3ec40016adad13cf",
".git/objects/1e/c4c350dc7443a5b8f96cac35f5c2f60b14faa1": "5956756713c91b23298f810ccb331a37",
".git/objects/51/050e9c3fd613dfbfca18a96c8fb0be5c71f3a8": "0eee7da6aeda4e09f4318d9dea6f07af",
".git/objects/53/5495996cf947d5e37fe3d75a433bf9c5e6cddc": "953776f2ad0392c344a6867ece72a67c",
".git/objects/7d/d8ec7d21b5d9696027b883fdefa31384191de5": "f88fb4b9985d29a4bf550533d5a93336",
".git/objects/9e/3c3a08978dc2ebdf98c410eb9933c828109d53": "e4a5d5604ac1dc34cf4994becf089e17",
".git/objects/9f/87fd6c6ba1ff5f083615a0ed2dccf639428332": "57d8b403ab69c29cbca2dba4bd7d0718",
".git/objects/b1/a1ae36670f32dd4f185b11067fe4b1c0312106": "22c590f601d3e4cf9a4f2e86b6ce5e9a",
".git/objects/be/f230a07b7e80811079e901adff25488d6fea00": "1adf5a4479afde64048a74aa527dc71b",
".git/objects/e9/90ad8974836fbc5cff547ffb6c01b2174bc143": "13f19899057ca6e271df016fc6d669c9",
".git/objects/ee/67fe347a141f136037f2444c7ad4d8ca9b7198": "103804bc8683d995bc6f81267517ae04",
".git/objects/fc/696ca3fecd55fd339430a2553a3b72090bcb0f": "7e0a43783f04d5e406ffa5e5bebab9a3",
".git/objects/fd/6471acb703b53551224ef997ca79f180f86eeb": "2d2bbc5a93f75f174155a8961328b8ef",
".git/objects/fe/1ff8f52f7898069fa5f2a2f5d8c4cfadb5dca6": "cb0794582f5bdeb9b44cb3aaf13de3fc",
".git/objects/pack/pack-d0cbc4b9a27171412c94b475d56ba3d8cf10b5de.idx": "deb299462e5eddcb9ee6c7911d25d9d3",
".git/objects/pack/pack-d0cbc4b9a27171412c94b475d56ba3d8cf10b5de.pack": "df4402d246f4d42af5a19d7fd825fad9",
".git/ORIG_HEAD": "70af87d3fe3cde451c6f1d441442f8a4",
".git/packed-refs": "fba76e6e403c443efe37373735f96627",
".git/refs/heads/main": "266cca339ad09ef6999afdbf64f55567",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "266cca339ad09ef6999afdbf64f55567",
"assets/AssetManifest.bin": "0e3776e1ceaa95710baf6c4bb87ec79f",
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
"index.html": "8d6b691985610eb77dd39eec0a819657",
"/": "8d6b691985610eb77dd39eec0a819657",
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
