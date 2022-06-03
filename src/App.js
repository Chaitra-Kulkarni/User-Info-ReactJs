import AddUser from './components/AddUser';
import UsersList from './components/UsersList';
import './App.css';

function App() {
  return (
    <div>
      <AddUser />
      <UsersList users={[]} />
    </div>
  );
}

export default App;
