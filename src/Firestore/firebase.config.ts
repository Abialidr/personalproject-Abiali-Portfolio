import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
// const projectDir = process.cwd();
// const firebaseConfig = {
// 	apiKey: process.env.API_KEY,
// 	authDomain: process.env.AUTH_DOMAIN,
// 	projectId: process.env.PROJECT_ID,
// 	storageBucket: process.env.STORAGE_BUCKET,
// 	messagingSenderId: process.env.MESSAGING_ID,
// 	appId: process.env.APP_ID,
// 	measurementId: process.env.MEAUREMENT_ID
// };
const firebaseConfig = {
	apiKey: 'AIzaSyAf15fbq8FsgpPIXgPgiVlapr6txqDGDYg',
	authDomain: 'portfolio-f574a.firebaseapp.com',
	projectId: 'portfolio-f574a',
	storageBucket: 'portfolio-f574a.appspot.com',
	messagingSenderId: '322747465498',
	appId: '1:322747465498:web:f3aad33818fdeed197b6a3',
	measurementId: 'G-45R46MHL1B'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
