const BASEURL = import.meta.env.VITE_BASE_URL_JADWAL_SHALAT;

export const putCacheJadwalShalatById = async ({ id, year, month }) => {
  const response = await fetch(
    BASEURL + `/sholat/jadwal/${id}/${year}/${month + 1}`
  );
  const cache = await caches.open("pages");
  await cache.put(
    BASEURL + `/sholat/jadwal/${id}/${year}/${month + 1}`,
    response
  );
};

export const matchCacheJadwalShalatById = async ({ id, year, month }) => {
  return await caches.match(
    BASEURL + `/sholat/jadwal/${id}/${year}/${month + 1}`
  );
};
