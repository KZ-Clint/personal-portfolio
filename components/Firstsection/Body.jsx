import Link from 'next/link';
import styles from '../../styles/Body.module.css';
import Emoji from '../Emoji';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Wheel from './Body/Wheel';
import { useState, useEffect } from 'react'


export default function Body () {

   const [typedText, setTypedText] = useState('');
   const text = "I''m a Web Developer";

   const [typedText2, setTypedText2] = useState('');
   const text2 = "II build things for the Web";

   useEffect(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        setTypedText((prevText) => prevText + text[currentIndex]);
        currentIndex++;
        if (currentIndex + 1 === text.length) {
          clearInterval(interval);
        }
      }, 100 );
     
      return () => clearInterval(interval);
    }, []);

    useEffect(() => {
     const timeout =  setTimeout(() => {
         let currentIndex2 = 0;
         const interval2 = setInterval(() => {
           setTypedText2((prevText) => prevText + text2[currentIndex2]);
           currentIndex2++;
           if (currentIndex2 + 1 === text2.length) {
             clearInterval(interval2);
           }
         }, 100 );
         return () => clearInterval(interval2);
       }, 2000); 

       return () => clearTimeout(timeout);
    }, []);

  return (
    <>
       <div className={styles.body_wrapper} >
          <div className={styles.body_center_wrapper} >
                <div className={styles.left_body_wrapper} >
                    <div className={styles.left_body_header_wrapper} >
                        <h3> Hello </h3>
                        <Emoji symbol="👋" label="waving" />
                    </div>
                    <h1> {typedText} </h1>
                    <p> {typedText2} </p>
                    <div className={styles.right_body_wrapper} >
                        <Link target='_blank' href={""} className={styles.right_body_wrapper_div} >
                           <TwitterIcon/>
                        </Link>
                        <Link target='_blank' href={"https://github.com/Kz-Clint"} className={styles.right_body_wrapper_div} >
                           <GitHubIcon/>
                        </Link>
                        <Link target='_blank' href={"https://www.linkedin.com/in/ogbonna-clinton-20106022a"} className={styles.right_body_wrapper_div} >
                           <LinkedInIcon/>
                        </Link>
                    </div>
                </div>
                <Wheel/>    
          </div>
       </div>
    </>
  )
}