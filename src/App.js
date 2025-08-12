import { Provider } from 'react-redux';
import './index.css';
import './App.css';
import Body from './component/Body/Body';
import appStore from './utilis/appstor';

function App() {
  return (
    <Provider store={appStore}>
      <Body/>
    </Provider>

  );
}

export default App;
