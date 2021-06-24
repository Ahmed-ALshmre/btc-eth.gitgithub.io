'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "78f533e95be6f1adc6d433eda8815e71",
"assets/assets/fonts/SF-UI-Display-Regular.otf": "2ceadd10ca85adca14362906f2379fdc",
"assets/assets/fonts/sf-ui-display-semibold.otf": "043e3f3a51f80f67ef747ff9f26b35f9",
"assets/assets/icons/dark/logo.svg": "0d4c9b2da468a626f5119a3b5c941949",
"assets/assets/icons/dark/qrScan.svg": "8dbe8f0e0bad31731334a76a52c05963",
"assets/assets/icons/dark/wetrav1.svg": "d5fac8497e37f803b76e56b64738a440",
"assets/assets/icons/light/about.svg": "dd24e65e78190f65d3391f1027235c2b",
"assets/assets/icons/light/activityTab.svg": "a17dd93b8d1a7538b7c7ec8b2a24ef04",
"assets/assets/icons/light/appearance.svg": "3e21e4ecfe0a6cade5d42bf7080afe18",
"assets/assets/icons/light/centralized.svg": "9525b280882451474c025dd13012621c",
"assets/assets/icons/light/decentralized.svg": "f33317cfa9680ec0ba98474e63f759fe",
"assets/assets/icons/light/deposit.svg": "5430085882fc1ccf8936f45bc50f792c",
"assets/assets/icons/light/editVisa.svg": "5885fbf455a9e4db83c152e88e7c63ef",
"assets/assets/icons/light/facebbok.svg": "87647b0ff1d4cb15d9123c8fffc3d537",
"assets/assets/icons/light/filter.svg": "4318dc5d69b17afea7dcf3588a1928aa",
"assets/assets/icons/light/google.svg": "9e0c01ce0632684ebb5e580a279ff3b4",
"assets/assets/icons/light/group.svg": "f84824bced21a949000c5690c07f5b6f",
"assets/assets/icons/light/growth.svg": "1ce704af43dc2bd7ed7ee5230e3d56ea",
"assets/assets/icons/light/help.svg": "ddc6c837c3feeab0607ebe29b0a5b2e8",
"assets/assets/icons/light/homeTab.svg": "4cdcee509f2744949821be99ea502664",
"assets/assets/icons/light/icCheck.svg": "c653a25d8b3bfdf4895bd913a1672d67",
"assets/assets/icons/light/icCloseDialog.svg": "dc88e6adcf22d7d879e9130615a87c54",
"assets/assets/icons/light/icConnectAssets.svg": "d080fb08e1cff1314936daeeb952f610",
"assets/assets/icons/light/instagram.svg": "1a60058bec54b76cc6ee8cf32720a99f",
"assets/assets/icons/light/language.svg": "86f2f3262a7afe71f970269e5d4e41e8",
"assets/assets/icons/light/linkedin.svg": "e0e07e5382e4e852ab1f31a7a48e65d1",
"assets/assets/icons/light/logo.svg": "3fdd3d6815863754632c399c22dae4b0",
"assets/assets/icons/light/onBoarding.svg": "0df207a52ae69b1ff05cad55490a09dc",
"assets/assets/icons/light/processComplete.svg": "b07e939e55f8e38b4015c2cd1ae7c455",
"assets/assets/icons/light/qrScan.svg": "23ec3763c006fbfa0992f93efc81d20e",
"assets/assets/icons/light/security.svg": "f128d2e8b6fcd523c249eb50ea321ef9",
"assets/assets/icons/light/snapchat.svg": "5c2fb21273ece8d2a6e340e6adbf3b51",
"assets/assets/icons/light/twitter.svg": "6e403034e21105963301ddc47acd7e41",
"assets/assets/icons/light/visa.svg": "1cb1bf52f06dc930b3724374e3061c80",
"assets/assets/icons/light/walletTab.svg": "d03f19402a2d71d224cc3be84b1e5de0",
"assets/assets/icons/light/wetraBalance.svg": "13c6b35ba5f56552390b099a83a04971",
"assets/assets/icons/light/wetrav1.svg": "ed6da16f2d24ba2f1053e12ec982cf93",
"assets/assets/icons/light/withdraw.svg": "bb5435a5d09c72d09c71788ef33b34d0",
"assets/assets/icons/light/wtx.svg": "1db02215d6f6330e74c89b07cf6043f9",
"assets/assets/icons/wallets/binance.svg": "c0dbe228da995d3638e18320ac63f847",
"assets/assets/icons/wallets/bitKeep.svg": "834665f071dc2bdbf1531fcb4e59539e",
"assets/assets/icons/wallets/etoro.svg": "2664485763c5dbc76ac8771f82a34efb",
"assets/assets/icons/wallets/ledget.svg": "8e76b7e60903c672d231dfd3814a5113",
"assets/assets/icons/wallets/mathWallet.svg": "cd14c49e43389ff940b75e4d8259d206",
"assets/assets/icons/wallets/metalMask.svg": "57ca9a5ded8d6ccf92a40a91ff17bf01",
"assets/assets/icons/wallets/onto.svg": "d970b3474ad63c3d3ba8f2cec8e9f002",
"assets/assets/icons/wallets/safePal.svg": "1b25116f11eb45a8966f32d70d122813",
"assets/assets/icons/wallets/tokenPocket.svg": "88a6982f37295920267a2bedbcb2c348",
"assets/assets/icons/wallets/trustWallet.svg": "3789f15b06ea2aab0fa9421da91831da",
"assets/FontManifest.json": "b2e2c4f6d1c95098cef476eb1d1e1fa0",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "2c0da6d7cf682f7ab1ba374ec897ec6d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "0148fa5de76e493059d31f7d5a0bd025",
"/": "0148fa5de76e493059d31f7d5a0bd025",
"main.dart.js": "6119710d09e4e1a1d3ac6c95ce01ad72",
"manifest.json": "52007f6eab28c2ff29fd6de735eadc05",
"version.json": "2a59ba03d0e77bfdce19a25111bf4af4"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
