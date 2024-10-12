import api from "./api";

export async function fetchImages() {
  try {
    const response = await api.get('/list');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch images');
  }
}