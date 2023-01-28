export async function fetchApi(endPoint) {
  try {
    const response = await fetch(endPoint);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

export const GET_POSTS_URL = 'https://sample-posts.coderockr.com/api/posts';
