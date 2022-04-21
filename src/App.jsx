import { useRoutes} from 'react-router-dom';
import routes from './config/routes';
import MyTabBar from './components/my_tab_bar';
import Auth from './components/auth';

function App() {
  return (
    <div>
      <Auth/>
      <MyTabBar/>
      {useRoutes(routes)}
    </div>
  );
}

export default App;
