export default function People(people) {
  return `
    <h1>The People of Star Wars</h1>
    <ul>
    ${people.results
      .map(person => {
        return `
        <li class='person-info'>
        <h3 class='person-name'>${person.name}</h3>
        <p>Hair Color: ${person.hair_color}</p>
        <p>Birth Year: ${person.birth_year}</p>
        <input type='hidden' id='personId' value='${person.url}'>
        </li>
        `;
      })
      .join('')}
    </ul>
    `;
}
