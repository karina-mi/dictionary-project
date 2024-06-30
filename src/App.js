import './App.css';
import Dictionary from './Dictionary'

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="logo">
          <h1>Dictionary 📚</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>This project was coded by Karyna Mikhieienko and is <a href="https://github.com/karina-mi/dictionary-project" target="_blank" rel="noopener noreferrer">
          open-sourced on GitHub</a> and <a href="https://famous-crisp-87d456.netlify.app/" target="_blank" rel="noopener noreferrer">
          hosted on Netlify</a></footer>
      </div>
    </div>
  );
}

export default App;
