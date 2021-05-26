const API_KEY = '21709633-754ac93ca1acb3d9a26f3f2d1';
const BASE_URL = 'https://pixabay.com/api';

export default class ApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.per_page = 12;
  }

  fetchImages() {
    const url = `${BASE_URL}/?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&per_page=12&page=${this.page}`;

    return fetch(url)
      .then(response => response.json())
      .then(({ hits }) => {
        if (hits.length === 0) {
          onFetchError();
        }
        this.incrementPage();
        return {hits};
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}