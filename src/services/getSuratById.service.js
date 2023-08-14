const BASEURL = import.meta.env.VITE_BASE_URL_QURAN;

export const putCacheSuratById = async ({ id }) => {
  const response = await fetch(BASEURL + `/surat/${id}`);
  const cache = await caches.open("pages");
  await cache.put(BASEURL + `/surat/${id}`, response);
};

export const matchCacheSuratById = async ({ id }) => {
  return await caches.match(BASEURL + `/surat/${id}`);
};
