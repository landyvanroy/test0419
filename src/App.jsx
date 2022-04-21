import { useRoutes} from 'react-router-dom';
import routes from './config/routes';
import MyTabBar from './components/my_tab_bar';
import Auth from './components/auth';
import  './App.css';

function App() {
  return (
    <div>
      <Auth/>
      <MyTabBar/>
      <div id="page">
        {useRoutes(routes)}
      </div>
    </div>
  );
}

export default App;
