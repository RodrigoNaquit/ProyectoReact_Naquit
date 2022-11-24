
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <Header />
      <ItemListContainer greeting={"Compra las mejores sneakers"} />
      <Footer />
    </div>
  );
}

export default App;
