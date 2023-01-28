async function fetchApi(endPoint) {
  try {
    const response = await fetch(endPoint);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

export default fetchApi;
