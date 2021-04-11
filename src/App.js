import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { AllCatsPage } from './components/AllCatsPage';
import { FavoriteCatsPage } from './components/FavoriteCatsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/" component={AllCatsPage} />
          <Route exact path="/favorites" component={FavoriteCatsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
