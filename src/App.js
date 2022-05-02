import './App.css';
import Dashboard from './layouts/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import Navi from './layouts/Navi';

function App() {
  return (
    <div className='App'>
      <Navi />
      <Container className='main'>
        <Dashboard />
      </Container>
    </div>
  );
}

export default App;
