import Link from 'next/link';
import styles from '../../styles/Alleviate.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useState, useEffect } from 'react'
import Stack from './Projecttools/Stack';
import Apiintegration from './Projecttools/Apiintegration';
import Backendlibrary from './Projecttools/Backendlibrary';
import Frontendlibrary from './Projecttools/Frontendlibrary';
import { nextecomApiTools, nextecomBackLibTools, nextecomFrontLibTools, nextecomStackTools } from '../Projecttools';
import Nextecomdesc from './Description/Nextecomdesc';




export default function Nextecom () {

  const [typedText, setTypedText] = useState('');
  const [typedPause, setTypedPause] = useState(false);
  const text = "E--Commerce Basket";


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
                    <Link className={styles.github_code_link} target='_blank' href={`https://github.com/KZ-Clint/dashboardtask`} >
                      <GitHubIcon style={{color:"black"}} />
                      <p> View Code </p>  
                    </Link>
                    <div className={styles.alleviate_live_link_wrapper} >
                        <h3> Live hosted link: </h3>
                        <Link className={styles.live_link} target='_blank' href={`https://dashboardtask-eta.vercel.app/`} >
                            https://dashboardtask-eta.vercel.app/
                        </Link>
                    </div>
                </div>
                <div className={styles.toolsgrid} >
                    <Stack stackTools={nextecomStackTools} />
                    <Apiintegration apiTools={nextecomApiTools} />
                    <Frontendlibrary frontLibTools={nextecomFrontLibTools} />
                    <Backendlibrary backLibTools={nextecomBackLibTools} />
                </div>    
                <Nextecomdesc/>
            </div>
          </div>
      </div>
    </>
  )
}