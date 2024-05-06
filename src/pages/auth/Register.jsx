import React, { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {

  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  // const navigate = useNavigate();

  const [ clear, setClear ] = useState("")
  const [ clearTwo, setClearTwo ] = useState("")
  const [ clearThree, setClearThree ] = useState("")

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    setClear("")
    setClearTwo("")
    setClearThree("")

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            
          } catch (errr) {
          }
        });
      }); 

    } catch (err) {
      setErr(true);
      setLoading(false);
    }

    // if (setLoading) {
    //   navigate('/RegSuccess')
    // }
  };

  

  return (
    <div>
      <div>
        <div>
          <div className="--flex-center">
          </div>
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>

            <input type="text" placeholder="Name" value={clear} onChange={(e) => setClear(e.target.value)} required name="name" /> <br />
            <input type="email" placeholder="Email" value={clearTwo} onChange={(e) => setClearTwo(e.target.value)} required name="email" /> <br />
            <input type="password" placeholder="Password" value={clearThree} onChange={(e) => setClearThree(e.target.value)} required name="password" /> <br />
            <label htmlFor="profile" style={{fontSize: '15px', color: 'green'}}>Add Profile Picture</label> <br />
            <input required style={{marginTop: '10px', marginBottom: '10px' }} type="file" id="file" /> 

            <button type="submit" className="--btn --btn-primary --btn-block">
              Register
            </button>
            {loading && "Registration Successfull"}
            {/* {loading && <h3 style={{color: 'blue', fontSize: '15px', marginTop: '10px'}}>loading...</h3>} */}
          </form>
          <span style={{display: 'flex', marginTop: '15px'}}>
            <p> &nbsp;Already have an Account? &nbsp;</p>
            <h3 style={{marginTop: '-10px'}}><Link to="/login">Login</Link></h3>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
