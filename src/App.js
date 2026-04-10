import Navigation from './customer/components/Nevigation/Navigation';
import Homepage from './customer/pages/HomePage/Homepage';
import Footer from './customer/components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />

      <main>
        <Homepage />
      </main>

      <Footer />
    </div>
  );
}

export default App;