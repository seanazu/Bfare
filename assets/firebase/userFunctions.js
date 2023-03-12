
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


export const signUp = (fullName, email, phoneNumber, password, dispatchUser) =>{
  let user; 
  if(fullName !== ''){
    if(phoneNumber.length == 10){
      auth() 
      .createUserWithEmailAndPassword(email, password)
      .then(async (data) => {
        createUser(data.user.uid, fullName, email, phoneNumber)
        user = {
          fullName:fullName,
          email:email, 
          phoneNumber:phoneNumber
        }
        dispatchUser(user)
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

export const login = (email, password, dispatchUser) =>{
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(async (data) => {
      const dbUser = await getUser(data.user.uid)
      dispatchUser(dbUser)
    })
    .catch(error => {
      if (error.code === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
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
  try{
    const userObj = await firestore().collection('Users').doc(userId).get();
    const user = userObj._data;
    return user
  } catch (err) {
    console.error(err)
  }
}


