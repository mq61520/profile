// self.addEventListener('install', (event) => {
//     event.waitUntil(
//       caches.open('v1').then((cache) => {
//         return cache.addAll([
//           '/profile.github.io/',
//           '/profile.github.io/index.html',
//           '/profile.github.io/style.css',
//           '/profile.github.io/main.js',
//           '/profile.github.io/icon-192x192.png',
//           '/profile.github.io/icon-512x512.png'
//         ]);
//       })
//     );
//   });
  
//   self.addEventListener('fetch', (event) => {
//     event.respondWith(
//       caches.match(event.request).then((response) => {
//         return response || fetch(event.request);
//       })
//     );
//   });

//   if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/profile.github.io/service-worker.js')
//     .then((registration) => {
//       console.log('Service Worker registered with scope:', registration.scope);
//     }).catch((error) => {
//       console.log('Service Worker registration failed:', error);
//     });
//   }

const staticCacheName = 'v1';
const filesToCache = [
  '/profile.github.io/',
  '/profile.github.io/index.html',
  '/profile.github.io/style.css',
  '/profile.github.io/script.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(staticCacheName)
      .then((cache) => {
        return cache.addAll(filesToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});