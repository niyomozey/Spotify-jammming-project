import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { legacy_createStore as createStore} from 'redux'
import { Provider } from 'react-redux'
import App from './Components/App/App';
import CreatePlayList from './Components/CreatePlayList/CreatePlayList';
import DisplayPlaylist from './Components/Playlist/DisplayPlaylist';
import Playback from './Components/Playback/Playback';
import Home from './Components/Home/Home';
import rootReducer from './Reducers/rootReducer';


const store = createStore(rootReducer , [])
ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <Home/>
      {/* <CreatePlayList/> */}
      {/* <DisplayPlaylist/> */}
      {/* <Playback/> */}
    </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
