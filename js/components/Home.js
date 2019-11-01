import Contact from './Contact';

export default function Home() {
  return `
    <h1>Home</h1>
    <h3>Here is the home page of our app</h3>
    ${Contact()}
    `;
}
