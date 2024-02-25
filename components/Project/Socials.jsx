import Link from 'next/link';
import styles from '../../styles/Alleviate.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useState, useEffect } from 'react'
import Stack from './Projecttools/Stack';
import Apiintegration from './Projecttools/Apiintegration';
import Backendlibrary from './Projecttools/Backendlibrary';
import Frontendlibrary from './Projecttools/Frontendlibrary';
import { socialsApiTools, socialsBackLibTools, socialsFrontLibTools, socialsStackTools } from '../Projecttools';
import Socialsdesc from './Description/Socialsdesc';



export default function Socials () {

  const [typedText, setTypedText] = useState('');
  const [typedPause, setTypedPause] = useState(false);
  const text = "Soocials";


  useEffect(() => {
     let currentIndex = 0;
     const interval = setInterval(() => {
       setTypedText((prevText) => prevText + text[currentIndex]);
       currentIndex++;
       setTypedPause(true)
       if (currentIndex + 1 === text.length) {
         setTypedPause(false)
         clearInterval(interval);
       }
     }, 300 );
    
     return () => clearInterval(interval);
   }, []);

  return (
    <>
      <div className={styles.alleviate_wrapper} >
        <div className={styles.alleviate_center_wrapper} >
            <div className={styles.alleviate_header} >
                <p> {typedText.length > 0 && typedText}{typedPause && "_"} </p>
            </div>
            <div className={styles.alleviate_body_wrapper} >
                <div className={styles.alleviate_links_wrapper} >
                    <Link className={styles.github_code_link} target='_blank' href={`https://github.com/KZ-Clint/social-frontend`} >
                      <GitHubIcon style={{color:"black"}} />
                      <p> View Code Frontend </p>  
                    </Link>
                    <Link className={styles.github_code_link} target='_blank' href={`https://github.com/KZ-Clint/social`} >
                      <GitHubIcon style={{color:"black"}} />
                      <p> View Code Backend </p>  
                    </Link>
                    <div className={styles.alleviate_live_link_wrapper} >
                        <h3> Live hosted link: </h3>
                        <Link className={styles.live_link} target='_blank' href={``} >
                            Not Available Yet
                        </Link>
                    </div>
                </div>
                <div className={styles.toolsgrid} >
                    <Stack stackTools={socialsStackTools} />
                    <Apiintegration apiTools={socialsApiTools} />
                    <Frontendlibrary frontLibTools={socialsFrontLibTools} />
                    <Backendlibrary backLibTools={socialsBackLibTools} />
                </div>    
                <Socialsdesc/>
            </div>
          </div>
      </div>
    </>
  )
}