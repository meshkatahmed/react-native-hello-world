import Main from './src/Components/main';
import {Provider} from 'react-redux';
import Store from './src/Redux/store';

export default function App() {
  return (
    <Provider store={Store}>
      <Main/>
    </Provider>
  );
}

