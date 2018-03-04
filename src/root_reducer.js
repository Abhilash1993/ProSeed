import { combineReducers } from 'redux';
import home from './home/home_reducer';
import login from './login/login_reducer';

const rootReducers = combineReducers({
  home,
  login
});

export default rootReducers;
