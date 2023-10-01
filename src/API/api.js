import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const params = {
  q: null,
  page: 1,
  key: '38914076-03a27e9eaeb2fdcd02556a9f3',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export async function fetchData(query, page) {
  params.q = query;
  params.page = page;

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
