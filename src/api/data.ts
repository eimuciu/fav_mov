export async function getMovies() {
  try {
    const apires = await fetch(
      `http://www.omdbapi.com/?s=batman&page=1&apikey=e310bcb8`,
    );
    const data = await apires.json();
    return data;
  } catch (err) {
    console.log('getMovies error', err);
  }
}
