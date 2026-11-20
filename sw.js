/* Retira la app: borra solo sus propias copias guardadas en el móvil y se da de baja */
self.addEventListener("install",e=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil((async()=>{
  for(const k of await caches.keys()) if(k.startsWith("viaje-europa-")) await caches.delete(k);
  await self.registration.unregister();
  for(const c of await self.clients.matchAll({type:"window"})) c.navigate(c.url);
})()));
self.addEventListener("fetch",()=>{});
