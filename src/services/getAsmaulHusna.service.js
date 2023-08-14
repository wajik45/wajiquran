const BASEURL = import.meta.env.VITE_BASE_URL_ASMAUL_HUSNA;

export const putCacheAsmaulHusna = async () => {
  const response = await fetch(BASEURL + "/asmaul-husna");
  const cache = await caches.open("pages");
  await cache.put(BASEURL + "/asmaul-husna", response);
};

export const matchCacheAsmaulHusna = async () => {
  return await caches.match(BASEURL + "/asmaul-husna");
};
