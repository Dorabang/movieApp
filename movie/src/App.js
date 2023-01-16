import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Detail from './routes/Detail';
import Home from './routes/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:id' element={<Detail />} />
      </Routes>
    </Router>
  );
}

/* 
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/movie/:id'>
          <Detail />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
*/

export default App;
