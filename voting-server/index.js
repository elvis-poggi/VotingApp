import makeStore from './src/store';
import starServer from './src/server';

export const store = makeStore();
starServer(store);

store.dispatch({
    type: 'SET_ENTRIES',
    entries: require('./entries.json')
});
store.dispatch({type: 'NEXT'});