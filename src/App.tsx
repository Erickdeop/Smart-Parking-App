import './App.css';
import BackgroundImg from './Components/BackgroundImg';
import Login from './Pages/Login';

function App() {
  return (
    <BackgroundImg src="/src/assets/background.jpg">
      <Login />
    </BackgroundImg>
  );
}

export default App;
