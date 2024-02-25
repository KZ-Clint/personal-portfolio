import Link from 'next/link';
import styles from '../../styles/Nav.module.css';
import Image from 'next/image';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HomeIcon from '@mui/icons-material/Home';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import BuildIcon from '@mui/icons-material/Build';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { useState, useEffect } from 'react'


export default function Nav () {

  const [ mailClick, setMailClick ] = useState(false)

  useEffect(() => {
     if(mailClick) {
      setTimeout( () => {
         setMailClick(false)
      }, 2000);
     }
  }, [mailClick]);

 

  return (
    <>
       <div className={styles.nav_gen_wrapper} >
           <div className={styles.name_wrapper} >
               <h2> Ogbonna </h2>
               <h5> Eze Clinton </h5>
           </div>
           <ul className={styles.desk_list_wrapper} >
              <Link href={`/`} >
                 <li> Home </li>
              </Link>
              <Link href="/#about"  >
                 <li> About </li>
              </Link>
              <Link href="/#skills" >
                  <li> Skills </li>
              </Link>
              <Link href="/#projects" >
                 <li> Projects </li>
              </Link>           
           </ul>
           <div className={styles.mobile_list_wrapper} >
               <Link href={`/`} className={styles.mob_item} >
                  <HomeIcon style={{ color:'white' }} fontSize="small" />
               </Link>
               <Link href={`/#about`}  className={styles.mob_item} >
                  <PermIdentityIcon style={{ color:'white' }} fontSize="small" />
               </Link>
               <Link href={`/#skills`}  className={styles.mob_item} >
                  <BuildIcon style={{ color:'white' }} fontSize="small" />
               </Link>
               <Link href={`/#projects`}  className={styles.mob_item} >
                  <BusinessCenterIcon style={{ color:'white' }} fontSize="small" />
               </Link>
          
              <Link href={`mailto:ezeclinton3@gmail.com`} className={ mailClick ? styles.mail_button_click : styles.mail_button } onClick={ () => { setMailClick(true) } } >
                    <MailOutlineIcon style={{ color:'#291C3A' }} fontSize="small" />
                    <p> Hire Me </p>
              </Link>
           </div>
       </div>
    </>
  )
}