import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';
function App() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path}>
          {route.children?.map((child) => (
            <Route path={child.path} element={child.element} key={child.path} />
          ))}
        </Route>
      ))}
    </Routes>
  );
}

export default App;
