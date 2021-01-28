import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { FirebaseContext } from './context/firebase';

// import { seedDatabase } from './seed';

const config = {
	apiKey: "AIzaSyCc5kUg3MJICES5Sper0lCrL9d6n3ZhwV4",
  authDomain: "netflix-onja-synthia.firebaseapp.com",
  projectId: "netflix-onja-synthia",
  storageBucket: "netflix-onja-synthia.appspot.com",
  messagingSenderId: "887875535376",
  appId: "1:887875535376:web:0b3f15d7abb37972648095"
};

const firebase = window.firebase.initializeApp(config);
// seedDatabase(firebase);

ReactDOM.render(
	<>
		<FirebaseContext.Provider value={{ firebase: window.firebase }}>
			<GlobalStyles />
			<App />
		</FirebaseContext.Provider>
	</>,
	document.getElementById('root')
);
