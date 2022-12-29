import { Fragment } from 'react';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

import Header from './components/Layout/Header';

const App = () => {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
