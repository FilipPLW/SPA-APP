const cacheName = 'pwa-todo-cache-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/js/main.js',
  '/images/pwa-icon-192.png'
];

// Instalowanie Service Workera i cachowanie plików
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(filesToCache))
  );
});

// Obsługa żądań sieciowych - używanie cache lub fetch
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
