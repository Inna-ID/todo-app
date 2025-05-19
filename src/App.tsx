import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import './App.scss';

const App = () => {
    return (
        <div className="app">
            <Header />
            <Home />
        </div>
    );
};

export default App;
