import { Routes, Route } from 'react-router-dom';

import { TransitionProvider } from '../context/TransitionContext';
import TransitionComponent from '../components/Transition';
import Boxes from '../views/Boxes';
import Scroll from '../views/Scroll';
import Layers from '../views/Layers';
import Confirmacion from '../views/Confirmacion';

const Router = () => {
  return (
    <TransitionProvider>
      <Routes>
        <Route
          index
          element={
            <TransitionComponent>
              <Layers />
            </TransitionComponent>
          }
        />
        <Route
          path="/boxes"
          element={
            <TransitionComponent>
              <Boxes />
            </TransitionComponent>
          }
        />
        <Route
          path="/scroll"
          element={
            <TransitionComponent>
              <Scroll />
            </TransitionComponent>
          }
        />
        <Route
          path="/confirmar"
          element={<Confirmacion />}
        />
      </Routes>
    </TransitionProvider>
  );
};

export default Router;
