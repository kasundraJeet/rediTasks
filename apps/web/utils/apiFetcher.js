import axios from 'axios';

async function apiFetcher(url, config = {}) {
  try {
    const response = await axios.request({ url, ...config });
    return {
      data: response.data,
    };
  } catch (error) {
    throw error;
  }
}

export async function get(url, config) {
  return apiFetcher(url, { ...config, method: 'GET' });
}

export async function post(url, data, config) {
  return apiFetcher(url, { ...config, method: 'POST', data });
}

export async function put(url, data, config) {
  return apiFetcher(url, { ...config, method: 'PUT', data });
}

export async function del(url, config) {
  return apiFetcher(url, { ...config, method: 'DELETE' });
}
