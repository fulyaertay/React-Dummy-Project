import logo from './logo.svg';
import './App.css';
import Users from "./components/Users"

function App() {
  return (
    //Adding container element
  <div className='container'>
    <h3>User List</h3>
    {/* //Calling 'Users' component */}
    <Users/>
  </div>
  );
}

export default App;
