import './App.css';
import CharactersList from './pages/Characters';
import LanguageSelector from './components/LanguageSelector';
function App() {

  return (
    <div className="App">
      <LanguageSelector></LanguageSelector>
      <CharactersList></CharactersList>
    </div>
  );
}

export default App;
