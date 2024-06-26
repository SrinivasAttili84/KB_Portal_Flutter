'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "b29d397cf60d419b2e94e8ac9d89c836",
"index.html": "8d52c0ebbf6c6242afefc5f0ad3d6ac3",
"/": "8d52c0ebbf6c6242afefc5f0ad3d6ac3",
"main.dart.js": "274617d8bd4c98afe2f3d63825da4536",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "db5ed7a8550a7b0eb98d4a63fdbfefac",
"assets/AssetManifest.json": "f9af07d823685e5fe0761badd5f038b2",
"assets/NOTICES": "d46cf2407db5297469d15b507130cfae",
"assets/FontManifest.json": "ac3f70900a17dc2eb8830a3e27c653c3",
"assets/AssetManifest.bin.json": "d9fda61f88b60bfca427de686d01c384",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4484998cd7df1ea1251098fd62dba078",
"assets/fonts/MaterialIcons-Regular.otf": "fda48e59e14e3e8610e3a3df86abfe34",
"assets/assets/images/Hospital.png": "cdd7a79ed95717498135b5f6630ed3f4",
"assets/assets/images/who1.jpg": "c905f9cc4390655dba85bb74e89715f8",
"assets/assets/images/record.png": "67e61741b449fdfd81d5eef4e62ba3f8",
"assets/assets/images/realheart.png": "e973c2da3f3a50e6dc9bb91a0cfd5f03",
"assets/assets/images/ltts.jpg": "e2755777191a277348b9df633306f26b",
"assets/assets/images/ecgicon.png": "910f71add8ba55fa418dd8d266a7cc6f",
"assets/assets/images/ecg.jpg": "08b0842883562a57345b4fef2a8bbb54",
"assets/assets/images/Devices.png": "66992acf70bb0f08c901a46ed94f47e4",
"assets/assets/images/map.png": "cfbb2f865774f76fe2e12000c4a98c37",
"assets/assets/images/test.csv": "5affa5bb6a34c11bd74aa6efdf4f7eb0",
"assets/assets/images/ltts1.png": "98a0f32a72b98cab28f2d30159bf5eb9",
"assets/assets/images/hearticon.png": "6fec1808ad2badbdd4b8ae23d1d73a11",
"assets/assets/images/logo_ecg.jpg": "7e59dcf690754eb2806355af268c63fc",
"assets/assets/images/background.jpg": "1e42653c35c8221fcb928538fa0cf0ee",
"assets/assets/images/heart.png": "38cae1a093079b9de15079fc8ac261c0",
"assets/assets/images/Users.png": "ceda975fc2dd2903eb09749d75d1ea09",
"assets/assets/images/logo.png": "ddbf60956da52e10b3a4cfcc9ab24c32",
"assets/assets/images/ECG_POC_Photo_1%2520(6).png": "b610072a71add22d4003bcb5275ff959",
"assets/assets/images/bg1.jpg": "1e42653c35c8221fcb928538fa0cf0ee",
"assets/assets/images/who": "1816b3da4b72f7d0f9a53a08ca32242f",
"assets/assets/images/profile.png": "ba79a992f620d0323ccb5b6468c3fbf5",
"assets/assets/images/exit.png": "14005b3d0197c33d4f3785124291145b",
"assets/assets/images/qwerty.png": "be5e7607ee36d502e1fec69dcf30c859",
"assets/assets/images/OIP.png": "d4fb7b830e3235caa2da56cdd6c44c31",
"assets/assets/images/WHO.gif": "1816b3da4b72f7d0f9a53a08ca32242f",
"assets/assets/images/Preferences.png": "ab720b3684a70148eca7fdc79f5a16fb",
"assets/assets/images/ecgheart.jpg": "aea155a4d6cb404be1b5dc4d91ff2bde",
"assets/assets/images/Surgeons.png": "a31458a84d5a227c1523b60133581027",
"assets/assets/ECG/ECG3.png": "72117c1ffffea6d7675a3bcf5dad25c4",
"assets/assets/ECG/ECG2.png": "40fedccc0d6811ca747f8444f29e3b0a",
"assets/assets/ECG/ECG1.png": "f46bc4cc3389ca058b12341f6a0cf218",
"assets/assets/ECG/ECG4.png": "dfd253ad5caa68d905c542ff949fca2b",
"assets/assets/ECG/Photo_1.png": "b610072a71add22d4003bcb5275ff959",
"assets/assets/srinivasu%2520attili_17_Nov_2022_11_34_15.json": "0a449eae63467af935429f19169d5769",
"assets/assets/csv/Lead%2520aVF.csv": "2d773b12588ca65835d2eeb6c8e6764a",
"assets/assets/csv/Lead%2520aVR.csv": "0aef6ee2e76176018bf1cb6c10f0671e",
"assets/assets/csv/Lead%2520V3.csv": "8e84689621fac8816831b2fcfcea6d44",
"assets/assets/csv/Lead%2520V2.csv": "18242ef32a70fb3f0239b9e146baf7ab",
"assets/assets/csv/Lead%2520III.csv": "982f69a235b773925af11c739640fc2f",
"assets/assets/csv/Lead%2520V1.csv": "0d129ac0d41b6d31d139086a27a2e429",
"assets/assets/csv/Lead%2520V5.csv": "7aeea72a6f2503fb98827bb799438a92",
"assets/assets/csv/Lead%2520I.csv": "f8afabe015bc25de1c4467d34abecb03",
"assets/assets/csv/Lead%2520V4.csv": "90768d0f19580aae3baab7d13c3d4639",
"assets/assets/csv/Lead%2520V6.csv": "b5d2feefa1c117f04fd976037d169f48",
"assets/assets/csv/Lead%2520aVL.csv": "ac746bc5f714b91bd0f7a88b16943aea",
"assets/assets/csv/Lead%2520II.csv": "b22172ce36f3d5f96a04aa2b93f8046c",
"assets/assets/employees.json": "4a11b4b32331cd2f332f274ad1ada74a",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
