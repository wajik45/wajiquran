const BASEURL = import.meta.env.VITE_BASE_URL_QURAN;

export const putCacheSuratList = async () => {
  const response = await fetch(BASEURL + "/surat");
  const cache = await caches.open("pages");
  await cache.put(BASEURL + "/surat", response);
};

export const matchCacheSuratList = async () => {
  return await caches.match(BASEURL + "/surat");
};
