import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer location='Brasil'/>
      <Footer about='Sobre' publ='Publicidade' business='Negócios' works='Como funciona a Pesquisa' private='Privacidade' terms='Termos' config='Configurações' />
    </div>
  );
}

export default App;
