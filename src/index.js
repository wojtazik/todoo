import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./state/store";
import {Provider} from "react-redux";

 export default ReactDOM.render(
     <Provider store={store}>
        <App />
     </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();
