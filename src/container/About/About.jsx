import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import './About.scss'
import { urlFor, client } from '../../client'
import { AppWrap } from '../../wrapper'

const About = () => {

  const [abouts, setAbouts] = useState([])

  useEffect(()=>{
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <div className='app__about'>
      <h2 className='head-text'>About me</h2>


      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration: 0.5, type: 'tween'}}
            className='app__profile-item'
            key={about.title + index}
          >
            <h2 className='bold-text' style={{marginTop: 20, fontSize: 24}}>{about.title}</h2>
            <p className='p-text' style={{marginTop: 10, fontSize: 16}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AppWrap(About, 'about');