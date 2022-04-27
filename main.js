if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/Lumini/public/sw.js')
        .then(function () {
            console.log('SW registered');
        });
}