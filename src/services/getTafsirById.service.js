const BASEURL = import.meta.env.VITE_BASE_URL_QURAN;

export const putCacheTafsirById = async ({ id }) => {
  const response = await fetch(BASEURL + `/tafsir/${id}`);
  const cache = await caches.open("pages");
  await cache.put(BASEURL + `/tafsir/${id}`, response);
};

export const matchCacheTafsirById = async ({ id }) => {
  return await caches.match(BASEURL + `/tafsir/${id}`);
};
