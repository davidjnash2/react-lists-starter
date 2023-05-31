import { useState } from 'react';
import './App.css';

function App() {
  const [creatureList, setCreatureList] = useState([
    { id: 2, name: 'Unicorn', origin: 'Britain' },
    { id: 4, name: 'Sphinx', origin: 'Egypt' },
    { id: 7, name: 'Jackalope', origin: 'America' }
  ])

  return (
    <>
      <header className="Header">
        <h1>React Mythical Creatures</h1>
      </header>
      <div className="App">
        <div>
          Splatting to the DOM looks like this:
          <pre>
            {/* We can use JSON.stringify() to dump raw data into our DOM */}
            {JSON.stringify(creatureList)}
          </pre>
          {/* <p>{creatureList[0].name} is from {creatureList[0].origin}</p> */}
          {creatureList.map((creature) => {
            return (
              <p key={creature.id}>{creature.name} is from {creature.origin}</p>
            )
          })}
        </div>
      </div>
    </>
  );
}

export default App;
