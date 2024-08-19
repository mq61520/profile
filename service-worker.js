self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('v1').then((cache) => {
        return cache.addAll([
          './',
          './index.html',
          './style.css',
          './main.js',
          './icon-192x192.png',
          './icon-512x512.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });


// const staticCacheName = 'v1';
// const filesToCache = [
//   './',
//   './index.html',
//   './style.css',
//   './script.js',
//   './icon-192x192.png',
//   './icon-512x512.png'
// ];

// self.addEventListener('install', (event) => {
//   event.waitUntil(
//     caches.open(staticCacheName)
//       .then((cache) => {
//         return cache.addAll(filesToCache);
//       })
//   );
// });

// self.addEventListener('fetch', (event) => {
//   event.respondWith(
//     caches.match(event.request)
//       .then((response) => {
//         return response || fetch(event.request);
//       })
//   );
// });