import React from 'react'

const Display = ({userData}) => {

  return (
   <div className="usercontainer">
    <div className="userprofile">
      <div className="imagecontainer">
        <img src={userData?.avtarurl} alt='image-user'/>
      </div>
      <div className='btncontainer'>
        <button>
          <a href={userData?.url}>profile</a>
        </button>
      </div>
    </div>
    <div className="userinfo">
      <div className="metadata">
        <span className='publicrepo'>
          publicrepo : {userData?.public_repos}
        </span>
        <span className='gists'>public gits:{userData?.public_gists}</span>
        <span className='followers'>followers:{userData?.followers}</span>
        <span className='following'>following:{userData?.following}</span>
      </div>
      <div className="userDetails">
        <p>Name:{userData?.name}</p>
        <p>loacation:{userData?.location}</p>
        <p>email:{userData?.email}</p>
        <p>created date:{userData?.created_at}</p>
      </div>
    </div>
   </div>
  )
}

export default Display
