import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { login } from './actions/session_actions';

import { fetchScores, fetchScore } from './actions/score_actions';


	// window.fetchScores = fetchScores;
	// window.getState = store.getState;
	// window.dispatch = store.dispatch;
	// window.fetchScore = fetchScore;

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});

