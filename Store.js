/**
 * @author Rahul Rajput
 * @email rahul@studiographene.com
 * @create date 2020-04-16 13:14:44
 * @modify date 2020-04-17 16:16:29
 * @desc [One store to rule them all]
 */
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import reducers from './RootReducer';

export default () => {
  let store = createStore(reducers, applyMiddleware(logger));
  return {store};
};
