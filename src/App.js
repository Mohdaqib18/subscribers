import './App.css';
import { Subscribers } from './Subscribers';
import Ylytic from './Ylytic.svg';

function App() {
  return (
    <div className="App">
      <div className="flex-container">
        <h1 id="title" className="flex-item">Weekly Subscribers Gain and Loss</h1>
        <img className="logox flex-item" src={Ylytic} />
      </div>
      <h2 id="takeaway">Takeaway: Majority of Subscribers are gained in spike(viral) events that mostly occured in Apr - Jun'22</h2>
      <Subscribers />
    </div>
  );
}

export default App;
