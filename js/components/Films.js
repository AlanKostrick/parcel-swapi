export default function Films(films) {
  return `
    <h1>Star Wars Films</h1>
    <ul>
    ${films.results
      .map(film => {
        return `
        <h3>${film.title}</h3>
        `;
      })
      .join('')}
    </ul>
    `;
}
