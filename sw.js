/* Retira la app: borra todo lo guardado en el móvil y se da de baja */
self.addEventListener("install",e=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil((async()=>{
  for(const k of await caches.keys()) await caches.delete(k);
  await self.registration.unregister();
  for(const c of await self.clients.matchAll({type:"window"})) c.navigate(c.url);
})()));
self.addEventListener("fetch",()=>{});
