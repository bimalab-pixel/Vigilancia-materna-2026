const CACHE_NAME = 'vigilancia-materna-v2';

// Archivos locales para Vigilancia Materna
const ASSETS = [
  './',
  './index.html',
  './calculadora.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './html2pdf.bundle.min.js' // Asegúrate de incluir esta librería si la usas local
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Instalando Sistema Vigilancia Materna...');
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});