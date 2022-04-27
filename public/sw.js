self.addEventListener('install', function (event){
    console.log('SW instalado');
    event.waitUntil(
    caches.open('static')
        .then(function (cache) {
            cache.addAll([
                
                '/',
                '/imagens/icons/icon96.png',
                '/imagens/icons/icon144.png',
                '/imagens/icons/icon256.png',
                '/imagens/icons/icon512.png',
                '/imagens/astolfo.png',
                '/imagens/escudo.png',
                '/imagens/folha.png',
                '/imagens/logo.png',
                '/imagens/logotexto.png',
                '/imagens/luminiicon.ico',
                '/index.html',
                '/style.css',
                '/bemvindo.html',
                '/bemvindo.css',
                '/termo.html',
                '/termo.css',
                '/politica.html',
                '/politica.css',
                '/comodos.html',
                '/comodos.css',
                '/dispositivos.html',
                '/dispositivos.css',
                '/configuracoes.html',
                '/configuracoes.css',
                '/configuracoes.js',
                '/configapp.html',
                '/configapp.css',
                '/icone.html',
                '/icone.css',
                '/icone.js',
                'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,700;1,400;1,700&display=swap',
                'https://cdn.jsdelivr.net/npm/@mdi/font@6.4.95/css/materialdesignicons.min.css',
                'https://fonts.googleapis.com/css2?family=Material+Icons+Outlined',
                'https://fonts.googleapis.com/css2?family=Material+Icons',
                'https://fonts.googleapis.com/css2?family=Material+Icons+Round',
                
            ]);
        })
    );
});
self.addEventListener('activate', function () {
    console.log('SW Activated');
});

self.addEventListener('fetch', function (event) {
    event.respondWith(caches.match(event.request)
        .then(function (res) {
            if (res) {
                return res;
            } else {
                fetch()
            }
        }));



});