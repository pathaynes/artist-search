export default function getArtists(page, search) {
  const perPage = 25;
  const url = `http://musicbrainz.org/ws/2/artist?query=${search}&fmt=json&limit=${perPage}&offset=${perPage * (page - 1)}`;
  return fetch(url)
    .then(res => res.json());
}
