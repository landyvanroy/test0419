import { useRoutes} from 'react-router-dom';
import routes from './config/routes';
import MyTabBar from './components/my_tab_bar';

function App() {
  return (
    <div>
      <MyTabBar/>
      {useRoutes(routes)}
    </div>
  );
}

export default App;
