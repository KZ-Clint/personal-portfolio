import styles from '../styles/Thirdsection.module.css';
import Image from 'next/image';
import { projectData } from './Projectdata';
import Card from './Thirdsection/Card';
import { useState, useEffect } from 'react'


export default function Thirdsection () {

   const [hasScrolled1, setHasScrolled1] = useState(false);
   const [hasScrolled2, setHasScrolled2] = useState(false);

   useEffect(() => {
     const handleScroll = () => {
      const scrollTop = window.scrollY;
      const screenWidth = window.innerWidth;
      
      setHasScrolled1(scrollTop > 600 )
      setHasScrolled2(scrollTop > 700 )
     };
 
     window.addEventListener('scroll', handleScroll);
     return () => {
       window.removeEventListener('scroll', handleScroll);
     };
   }, []);

  return (
    <>
       <div className={styles.thirdsection_gen_wrapper} >
           <div className={styles.third_centered_wrapper} >
               <div className={styles.about_me_wrapper} id='about'  >
                   <div className={styles.about_me_wrapper2} >
                       <h1> About Me </h1>
                       <p className={ ` ${styles.about_me_wrapper2_p} ${hasScrolled1 ? styles.aboutappear : ""}`} > As a Web Developer, I am responsible for designing and developing Web pages. My Primary focus is to create 
                        Responsive, Optimized and User-Friendly websites that meet the needs of a diverse online audience.  </p>
                   </div>
               </div>
               <div className={styles.my_skills_wrapper} id="skills"  >
                   <div className={styles.my_skills_wrapper2} >
                       <h1> My Skills </h1>
                       <p> Technologies I&#39;ve been working with recently </p>
                       <div className={`${styles.my_skills_logo_wrapper} ${hasScrolled2 ? styles.skillsappear : ""}`} >
                            <div>
                               <Image src="/assets/javascript.svg" width={40} height={40}  alt="javascript" style={{objectFit: "contain"}} />
                            </div>
                            <div>
                               <Image src="/assets/css3.svg" width={40} height={40}  alt="css" style={{objectFit: "contain"}} />
                            </div>
                            <div>
                               <Image src="/assets/html5.png" width={40} height={40}  alt="html5" style={{objectFit: "contain"}} />
                            </div>
                            <div>
                               <Image src="/assets/react.svg" width={40} height={40}  alt="react.js" style={{objectFit: "contain"}} />
                            </div>
                            <div>
                               <Image src="/assets/nextjs.svg" width={40} height={40}  alt="next.js" style={{objectFit: "contain"}} />
                            </div>
                            <div>
                               <Image src="/assets/nodejs.svg" width={40} height={40}  alt="node.js" style={{objectFit: "contain"}} />
                            </div>
                            <div>
                               <Image src="/assets/express.svg" width={40} height={40}  alt="express.js" style={{objectFit: "contain"}} />
                            </div>
                            <div>
                               <Image src="/assets/mongodb.svg" width={40} height={40}  alt="mongodb" style={{objectFit: "contain"}} />
                            </div>
                            <div>
                               <Image src="/assets/aws-s3.svg" width={40} height={40}  alt="aws s3" style={{objectFit: "contain"}} />
                            </div>
                            <div>
                               <Image src="/assets/aws-amplify.svg" width={40} height={40}  alt="aws amplify" style={{objectFit: "contain"}} />
                            </div>
                       </div>
                   </div>
               </div>
               <div className={styles.my_projects_wrapper} id="projects" >
                   <div className={styles.my_projects_wrapper2} >
                       <h1 className={styles.my_projects_wrapper2_h1} > My Projects </h1>
                       <p className={styles.my_projects_wrapper2_p} > Some Things I&#39;ve built so far </p>
                       <div className={styles.my_projects_grid} >
                           { projectData.map( (p) => (
                                <Card p={p} key={p.description} />
                           ) ) }
                       </div>
                   </div>
               </div>
           </div>
       </div>
    </>
  )
}