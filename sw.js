const CACHE_NAME = 'hero-call-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './img/hero.jpg'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});