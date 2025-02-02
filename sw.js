const cacheName = 'pwa-spa-app-v1';
const repoName = '/SPA-APP'; // Nazwa repozytorium na GitHub Pages
const filesToCache = [
  `${repoName}/`,
  `${repoName}/index.html`,
  `${repoName}/style.css`,
  `${repoName}/js/main.js`,
  `${repoName}/images/pwa-icon-192.png`
];

// Instalowanie Service Workera i buforowanie plików
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName)
      .then((cache) => cache.addAll(filesToCache))
      .catch((error) => console.error("Błąd podczas cachowania plików:", error))
  );
});

// Aktywacja Service Workera i czyszczenie starej pamięci podręcznej
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((oldCache) => oldCache !== cacheName)
          .map((oldCache) => caches.delete(oldCache))
      );
    })
  );
});

// Obsługa żądań - serwowanie plików z cache lub pobieranie online
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
      .catch(() => new Response("Brak połączenia z siecią i brak pliku w cache."))
  );
});
