import './App.css'
import Footer from './components/Footer'
import GenreMovieList from './components/GenreMovieList'
import Header from './components/Header'
import ProductionHouse from './components/ProductionHouse'
import Slider from './components/Slider'


function App() {
  return (
    <>
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
      <hr className='border-blue-800 rounded-full m-10 mx-20'/>
      <Footer />
    </>
  )
}

export default App