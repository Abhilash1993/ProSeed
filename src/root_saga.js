import { takeEvery } from 'redux-saga/effects';
import ACTION from './common/action_constants';
import {home} from './home/home_saga';
import {about} from './about/about_saga';
import {route1Saga} from './home/route1/route1_saga';

export default () => [
  takeEvery(ACTION.HOME.GETHOME, home),
  takeEvery(ACTION.ABOUT.GETABOUT, about)
];