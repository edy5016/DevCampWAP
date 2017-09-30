var CACHE_NAME ="demo-v1";
var filesToCache=[
  '/',
  '/base.css'
];

self.addEventListener('install',function(event){
  event.waitUntil(
      caches.open(CACHE_NAME).then(function(cache){
        return cache.addAll(filesToCache);
      })
  );
});

self.addEventListener('fetch',function(event){
  event.respondWith(
    caches.match(event.request).then(function(response){
      if(response)
      {
        return response;
      }
      return fetch(event.request);
    })
  );

});
