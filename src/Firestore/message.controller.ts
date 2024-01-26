import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase.config';

export const add_message = async (data: any) => {
	console.log(`🚀 ~ constadd_message= ~ data:`, data);
	try {
		const docRef = await addDoc(collection(db, 'messages'), data);
		console.log('Document written with ID: ', docRef.id);
		return {
			success: true
		};
	} catch (e) {
		console.error('Error adding document: ', e);
		return {
			success: false
		};
	}
};
