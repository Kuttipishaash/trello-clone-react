import { authentication, firestore } from './firebase';

const currentUser = authentication.currentUser;

const registerUser = (email, password) => {
    authentication.createUserWithEmailAndPassword(email, password)
        .then(() => {
            const registeredUser = authentication.currentUser;
            let user = {
                // displayName: currentUser.displayName,
                userid: registeredUser.uid,
                email: registeredUser.email,
                // photoUrl: currentUser.photoUrl,
                // emailVerified = currentUser.emailVerified
            };
            firestore.collection('users')
                .doc(user.userid)
                .set(user)
                .then(() => {
                    console.log("User registered");
                    return true;
                })
                .catch((error) => {
                    console.error("Error entering user details to firestore database");
                    console.error(error.message);
                    return false;
                });
        })
        .catch((error) => {
            console.error("Error code : ", error.code);
            console.error("Firebase Auth Error message :", error.message);
            return false;
        });
};

const loginUser = (email, password) => {
    authentication.signInWithEmailAndPassword(email, password)
        .then(() => {
            let user = authentication.currentUser;

            console.log("Successfully logged in as ", user.email);
        })
        .catch((error) => {
            console.error("User login failed");
            console.error(error.message);
        });
};
const logoutUser = authentication.signOut()
    .then(function () {
        console.log("Successfully logged out");
    })
    .catch(function (error) {
        console.error("User logout failed");
        console.error(error.message);
    });
export { currentUser, registerUser, loginUser, logoutUser };