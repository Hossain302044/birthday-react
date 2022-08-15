import { useEffect, useState } from 'react';
import './App.css';
import List from './List';

function App() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setdata(data))
  }, [])
  console.log(data.length);
  return (
    <>
      <main className='full-body'>
        <section className='container'>
          <h2 className='text-title'>{data.length} Birthday Today's</h2>
          {
            data.map(d => <List
              key={d.id}
              d={d}
            ></List>)
          }
          <button className='btn btn-primary' onClick={() => setdata([])}>Clear All</button>
        </section>
      </main>
    </>
  );
}

export default App;
