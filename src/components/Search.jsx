import React , {useState , useContext} from 'react'

import { collection, query, serverTimestamp, updateDoc, where, getDocs, getDoc, setDoc } from "firebase/firestore";
import { db } from '../firebase';
import { AuthContext } from './context/AuthContext';


const Search = () => {

   const [username , setUsername] = useState("");
   const {currentUser} = useContext(AuthContext);
   const [user , setUser] = useState(null);

   const [err , setErr] = useState(false)
  
    const handleSearch = async () => {

      const q =  query(collection(db, "users"), where("displayName", "==", username));
 
      try{

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setUser(doc.data());
        });
  }catch(err){
    setErr(true);
  }

    };
    
   const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
   };

   const handleSelect =  async() => {
    //check whether the group(chats in firestore) exists , if not create one
    
      const combinedId =   
      currentUser.uid > user.uid 
      ? currentUser.uid + user.uid 
      : user.uid + currentUser.uid;

      try {
        const res = await getDoc(doc(db , "chats", combinedId));
         
if(!res.exists()){  // firebase method to check whether the document exists

  //create a chat in chats collection
  await setDoc(doc(db, "chats", combinedId), {
    messages: []
  });

  //create user chats
 await updateDoc(doc(db, "userChat", currentUser.uid), {
  [combinedId+".userInfo"]: {
    uid: user.uid,
    displayName: user.displayName,
    photoURL: user.photoURL,
  },
  [combinedId+".date"]: serverTimestamp()
      
 });

 await updateDoc(doc(db, "userChat", user.uid), {
  [combinedId+".userInfo"]: {
    uid: currentUser.uid,
    displayName: currentUser.displayName,
    photoURL: currentUser.photoURL,
  },
  [combinedId+".date"]: serverTimestamp()
      
   });
  }
}     catch (err) {
  
        
      }
    //create user chats

   }


  return (
    <div className="search">
      <div className="searchbox">
        <input className='user-input'   type="text" placeholder='find a user' onKeyDown={handleKey}  onChange={e=>setUsername(e.target.value)}/>
      </div>
     {err && <span>User not found</span>}

      {user && <div className="userchat" onClick={handleSelect}>
        <img  className='userprofile'  src={user.photoURL} alt="user-profile" />
        <div className="userchatinfo">
          <span>{user.displayName}</span>
          
        </div>
      </div>
        }
    </div>
  );
};

export default Search