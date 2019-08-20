import { combineReducers } from 'redux';
import lyricsReducer from './reducers/lyricsReducer';
import introReducer from './reducers/introReducer';
import videoReducer from './reducers/videoReducer';

const Reducers = combineReducers({
    lyrics:lyricsReducer,
    valueCBox:introReducer,
    video:videoReducer
});

export default Reducers;