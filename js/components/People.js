export default function People(people) {
  return `
    <h1>The People of Star Wars</h1>
    <ul>
    ${people.results
      .map(person => {
        return `
        <li>
        <h3>${person.name}</h3>
        <p>Hair Color: ${person.hair_color}</p>
        <p>Birth Year: ${person.birth_year}</p>
        </li>
        `;
      })
      .join('')}
    </ul>
    `;
}
