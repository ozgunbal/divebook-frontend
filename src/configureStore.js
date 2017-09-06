import { createStore } from 'redux';
import divebookApp from './reducers';

const configureStore = createStore(
        divebookApp
    );

export default configureStore;