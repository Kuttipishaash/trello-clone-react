import {firestore} from './firebase';

export const addUser = (user) => {
    firestore.collection('users')
    .add(user)
    .then((docRef) => {console.log(docRef.id);})
    .catch((error) => {console.log("Error while adding document", error);});
}