import data from './data';
import Navbar from './components/Navbar';
import Logobox from './components/Logobox';
import Flowerbox from './components/Flowerbox';
import Footer from './components/Footer';

function makeBox(data) {
  return (
    <Flowerbox
      name={data.name}
      price={data.price}
      image={data.image}
      tags={data.tags}
    />
  );
}

function App() {


  return (
    <div className="app">
  <Navbar/>
  <Logobox/>

  <div className='container'>
    {data.map(makeBox)}
  </div>
  
    </div>
  );
}

export default App;
