
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


export const signUp = (fullName, email, phoneNumber, password) =>{
  if(fullName !== ''){
    if(phoneNumber.length == 10){
      auth() 
      .createUserWithEmailAndPassword(email, password)
      .then(async (data) => {
        createUser(data.user.uid, fullName, email, phoneNumber)
        alert('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          alert('That email address is already in use!');
        }
    
        if (error.code === 'auth/invalid-email') {
          alert('That email address is invalid!');
        }
    
        console.log(error);
      });
    } else {
      alert('Phone number invalid')
    }
  } else {
    alert('Full name is empty')
  }

}

export const login = (email, password) =>{
  let user ;
  auth()
    .signInWithEmailAndPassword(email, password)
    .then((data) => {
      const dbUser = getUser(data.user.uid)
      user = {
        fullName:dbUser.fullName,
        email:dbUser.email,
        phoneNumber:dbUser.phoneNumber
      }
    })
    .catch(error => {
      if (error.code === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
  return user ;
}

export const createUser = (userId, fullName, email, phoneNumber) =>{
  const usersCollection = firestore().collection('Users');
  const user = {
    fullName:fullName,
    email:email,
    phoneNumber:phoneNumber
  }
  usersCollection.doc(userId).set(user).then(() =>{
    console.log('user added to db')
  }).catch((err) =>{
    console.error(err)
  })
}

export const getUser = async (userId) =>{
  const userRef = firestore().collection('Users').doc(userId);
  const doc = await userRef.get();
  const userData = doc.data();
  return userData
}


