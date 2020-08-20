import * as firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDPynLol0aOcPnTWOVF8m-ns2jTHhhuQ2E",
  authDomain: "edmark-649ec.firebaseapp.com",
  databaseURL: "https://edmark-649ec.firebaseio.com",
  projectId: "edmark-649ec",
  storageBucket: "edmark-649ec.appspot.com",
  messagingSenderId: "715773735286",
  appId: "1:715773735286:web:01644b567c1b401ceb4a57",
  measurementId: "G-VCHH0H1RD3",
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL, uid } = user

  return {
    avatar: photoURL,
    username: displayName,
    email,
    uid,
  }
}

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null

    onChange(normalizedUser)
  })
}

export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase.auth().signInWithPopup(githubProvider)
}

export const logOut = () => {
  return firebase.auth().signOut()
}
