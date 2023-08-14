const BASEURL = import.meta.env.VITE_BASE_URL_JADWAL_SHALAT;

export const putCacheKota = async () => {
  const response = await fetch(BASEURL + "/sholat/kota/semua");
  const cache = await caches.open("pages");
  await cache.put(BASEURL + "/sholat/kota/semua", response);
};

export const matchCacheKota = async () => {
  return await caches.match(BASEURL + "/sholat/kota/semua");
};
