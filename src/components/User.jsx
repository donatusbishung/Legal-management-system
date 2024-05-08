import * as React from 'react';
import Avatar from '@mui/material/Avatar';


export default function ImageAvatars({userClass, userSrc, userOuterClass}) {

  return (
      <>
      <div className={userOuterClass}>
      <Avatar className={userClass} alt="Remy Sharp" src={userSrc}/>
      </div>
      </>
  );
} 
