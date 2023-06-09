import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { FaFacebookF }  from 'react-icons/fa' 

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <BsLinkedin />
            <a href="https://www.naver.com"></a>
        </div>
        <div>
            <BsGithub />
        </div>
        <div>
            <FaFacebookF />
        </div>
    </div>
  )
}

export default SocialMedia