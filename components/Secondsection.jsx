import Image from 'next/image';
import styles from '../styles/Secondsection.module.css';
import { useState, useEffect } from 'react'


export default function Secondsection () {

  const [ increasedNumb, setIncreasedNumb] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300 && !hasScrolled) {
        setHasScrolled(true);
        // let numb = 0;
        // const interval = setInterval(() => {
        //   if (numb + 1 < 5) {
        //     numb++;
        //     console.log(numb)
        //     setIncreasedNumb(prevCount => prevCount + 1);
        //   } else {
        //     clearInterval(interval);
        //   }
        // }, 200); 
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasScrolled]);


  return (
    <>
       <div className={styles.secondsection_gen_wrapper} >
            <div className={styles.secondsection_centered_wrapper} >
               <div className={styles.yrs_xpwrap} >
                    <div className={styles.yrs_of_xp_wrapper} >
                        <h1> 3 </h1>
                        <h4> YEARS OF EXPERIENCE </h4>
                    </div>
                    <div className={styles.prj_completed_wrapper} >
                        {/* <h1> {`>${increasedNumb}`} </h1> */}
                        <div className={styles.numbwrap} >
                            <p className={hasScrolled ? styles.increase : ""}> 4 </p>
                            <p className={hasScrolled ? styles.increase : ""} > 3 </p>
                            <p className={hasScrolled ? styles.increase : ""} > 2 </p>
                            <p className={hasScrolled ? styles.increase : ""} > 1 </p>
                            <p className={hasScrolled ? styles.increase : ""} > 0 </p>
                        </div>
                        <h4> PROJECTS COMPLETED </h4>
                    </div>
                </div>
                <div className={styles.skill_img_wrapper} >
                    <Image src="/assets/javascript.svg" width={40} height={40}  alt="javascript" style={{objectFit: "contain"}} />
                    <Image src="/assets/css3.svg" width={40} height={40}  alt="css" style={{objectFit: "contain"}} />
                    <Image src="/assets/html5.png" width={40} height={40}  alt="html5" style={{objectFit: "contain"}} />
                    <Image src="/assets/react.svg" width={40} height={40}  alt="react.js" style={{objectFit: "contain"}} />
                    <Image src="/assets/nextjs.svg" width={40} height={40}  alt="next.js" style={{objectFit: "contain"}} />
                    <Image src="/assets/nodejs.svg" width={40} height={40}  alt="node.js" style={{objectFit: "contain"}} />
                    <Image src="/assets/express.svg" width={40} height={40}  alt="express.js" style={{objectFit: "contain"}} />
                    <Image src="/assets/mongodb.svg" width={40} height={40}  alt="mongodb" style={{objectFit: "contain"}} />
                    <Image src="/assets/aws-s3.svg" width={40} height={40}  alt="aws s3" style={{objectFit: "contain"}} />
                    <Image src="/assets/aws-amplify.svg" width={40} height={40}  alt="aws amplify" style={{objectFit: "contain"}} />
                </div>
            </div>
       </div>
    </>
  )
}