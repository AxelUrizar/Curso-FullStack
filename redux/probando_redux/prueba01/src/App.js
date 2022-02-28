import './App.css';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import UsersList from './components/users/UsersList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<UsersList />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
