export default function Person(person) {
  return `
    <h1>${person.name}</h1>
    <p>Height: ${person.height}</p>
    <p>Hair Color: ${person.hair_color}</p>
    <p>Birth Year: ${person.birth_year}</p>
    <h3>Films</h3>
    <ul>
    ${person.films
      .map(film => {
        return `
        <li>${film}</li>
      `;
      })
      .join('')}
    </ul>
    `;
}
