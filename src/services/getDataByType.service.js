export const getDataByType = async ({ match, put, id, month, year }) => {
  let response;
  let params = (id && month && year && { id, month, year }) || { id } || null;

  if (await match(params)) {
    response = await match(params);
    return await response.json();
  }

  await put(params);

  response = await match(params);
  return await response.json();
};
