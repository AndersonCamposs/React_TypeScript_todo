import styles from './App.module.css';

// COMPONENTS
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main className={styles.main}></main>
      <Footer />
    </div>
  );
}

export default App;
