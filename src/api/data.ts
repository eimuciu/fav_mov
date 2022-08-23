export async function getMovies(term: string, page: number) {
  try {
    const apires = await fetch(
      `http://www.omdbapi.com/?s=${term}&page=${page}&apikey=e310bcb8`,
    );
    const data = await apires.json();
    return data;
  } catch (err) {
    console.log('getMovies error', err);
  }
}
