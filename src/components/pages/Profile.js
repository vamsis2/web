import React from 'react';
import './Profile.css';



 function Profile() {
  return( 
    <div>
  <h1 className='profile'>  WELLCOME TO PROFILE</h1>
  <form className='formm-conta'>
    <h1>Profile</h1>
 Name: <input type='text' placeholder='VAMSI'/>
 Email:<input type='text' placeholder='vamsi@gmail.com' />
 Contact Number: <input type='number' placeholder='889789228'/>
 Bio: <p>s..........................s</p>
  </form>

      </div>
  )
}
export default Profile;