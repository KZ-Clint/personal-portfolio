import Link from 'next/link';
import styles from '../../styles/Alleviate.module.css';
import Emoji from '../Emoji';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useState, useEffect } from 'react'
import Stack from './Projecttools/Stack';
import Apiintegration from './Projecttools/Apiintegration';
import Backendlibrary from './Projecttools/Backendlibrary';
import Frontendlibrary from './Projecttools/Frontendlibrary';
import { uhtApiTools, uhtBackLibTools, uhtFrontLibTools, uhtStackTools } from '../Projecttools';
import Unityheritagetrustdesc from './Description/Unityheritagetrustdesc';



export default function Unityheritagetrust () {

  const [typedText, setTypedText] = useState('');
  const [typedPause, setTypedPause] = useState(false);
  const text = "Unnity Heritage Trust";

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
                    <Link className={styles.github_code_link} target='_blank' href={`https://github.com/KZ-Clint/`} >
                      <GitHubIcon style={{color:"black"}} />
                      <p> Repository Is Private </p>  
                    </Link>
                    <div className={styles.alleviate_live_link_wrapper} >
                        <h3> Live hosted link: </h3>
                        <Link className={styles.live_link} target='_blank' href={`https://www.unityheritagetrust.com`} >
                           https://www.unityheritagetrust.com
                        </Link>
                    </div>
                </div>
                <div className={styles.toolsgrid} >
                    <Stack stackTools={uhtStackTools} />
                    <Apiintegration apiTools={uhtApiTools} />
                    <Frontendlibrary frontLibTools={uhtFrontLibTools} />
                    <Backendlibrary backLibTools={uhtBackLibTools} />
                </div>   
                <Unityheritagetrustdesc/>
            </div>
          </div>
      </div>
    </>
  )
}