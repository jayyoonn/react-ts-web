import './App.scss';
import ReactLogo from './assets/React.png';

export default function App() {
  return (
    <div className="main">
      <h1>Welcome to React Web.</h1>
      <img src={ReactLogo} alt="logo" />
    </div>
  );
}
