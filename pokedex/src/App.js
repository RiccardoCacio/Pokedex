import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import PokemonBg from "./Img/pokemonbg.jpeg";
function App() {
  return (
    <div style={{ backgroundImage: `url(${PokemonBg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className='h-full text-center font-Montserrat}'>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
