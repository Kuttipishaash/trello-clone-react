import { firestore, authentication } from './firebase';

export const addCard = (boardId, cardId, card) => {
    const userId = authentication.currentUser.uid;
    firestore.collection('users')
    .doc(userId)
    .collection('boards')
    .doc(boardId)
    .collection('cards')
    .doc(cardId)
    .set(card)
    .then(() => {return true})
    .catch((error) => {
        console.error(error);   
        return false;
    });
}