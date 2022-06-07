import data from './data';
import Navbar from './components/Navbar';
import Logobox from './components/Logobox';
import Flowerbox from './components/Flowerbox';
import Footer from './components/Footer';


function App() {

  const flowerbox = data.map((ele, index) => {
    return ( <Flowerbox
      key={index}
      {...ele}
    />)
  } )

  return (
    <div className="app">
  <Navbar/>
  <Logobox/>

  <div className='container'>
    {flowerbox}
  </div>
  
    </div>
  );
}

export default App;
