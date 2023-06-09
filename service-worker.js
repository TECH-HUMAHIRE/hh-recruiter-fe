self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('app-cache').then((cache) => {
            return cache.addAll([
                // Add the URLs of the static assets you want to cache
                '/src/main.jsx',
                '/index.html',
                '/path/to/asset1',
                '/path/to/asset2'
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
