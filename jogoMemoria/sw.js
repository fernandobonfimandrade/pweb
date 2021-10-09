const staticCacheName = 'site-static-v2';
const assets = ['memo-game/index.html',  
'memo-game/assets/font/ComicRelief-webfont.eot',
'memo-game/assets/font/ComicRelief-webfont.woff2',
'memo-game/assets/font/ComicRelief-webfont.woff',
'memo-game/assets/font/ComicRelief-webfont.ttf',
'memo-game/assets/memo.css'];
self.addEventListener('install', evt => {
    evt.waitUntil(caches.open(staticCacheName).then((cache) => {
        console.log('Cacheando arquivos estaticos...');
        cache.addAll(assets);
    }));
});
self.addEventListener('activate', (e) => {
    e.waitUntil(caches.keys().then((keyList) => {
        return Promise.all(keyList.map((key) => {
            if (key === staticCacheName) { return; }
            return caches.delete(key);
        }))
    }));
});
self.addEventListener('fetch', (e) => {
    e.respondWith((async() => {
        const r = await caches.match(e.request);
        console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
        if (r) { return r; }
        const response = await fetch(e.request);
        const cache = await caches.open(staticCacheName);
        console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
        cache.put(e.request, response.clone());
        return response;
    })());
});