import Link from 'next/link';
import styles from '../../styles/Alleviate.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useState, useEffect } from 'react'
import Stack from './Projecttools/Stack';
import Apiintegration from './Projecttools/Apiintegration';
import Backendlibrary from './Projecttools/Backendlibrary';
import Frontendlibrary from './Projecttools/Frontendlibrary';
import { kcApiTools, kcBackLibTools, kcFrontLibTools, kcStackTools } from '../Projecttools';
import Koffeeclandesc from './Description/Koffeeclandesc';



export default function Koffeeclan () {

  const [typedText, setTypedText] = useState('');
  const [typedPause, setTypedPause] = useState(false);
  const text = "Kooffee clan";


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
                    <Link className={styles.github_code_link} target='_blank' href={`https://github.com/satyamagarwal99/koffeeclan`} >
                      <GitHubIcon style={{color:"black"}} />
                      <p> View Code </p>  
                    </Link>
                    <div className={styles.alleviate_live_link_wrapper} >
                        <h3> Live hosted link: </h3>
                        <Link className={styles.live_link} target='_blank' href={`https://www.koffeeclan.com`} >
                             https://www.koffeeclan.com
                        </Link>
                    </div>
                </div>
                <div className={styles.toolsgrid} >
                    <Stack stackTools={kcStackTools} />
                    <Apiintegration apiTools={kcApiTools} />
                    <Frontendlibrary frontLibTools={kcFrontLibTools} />
                    <Backendlibrary backLibTools={kcBackLibTools} />
                </div>    
                <Koffeeclandesc/>
            </div>
          </div>
      </div>
    </>
  )
}