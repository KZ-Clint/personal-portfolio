import styles from '../styles/Firstsection.module.css';
import Body from './Firstsection/Body';
import Nav from './Firstsection/Nav';


export default function Firstsection () {


  return (
    <>
       <div className={styles.firstsection_gen_wrapper} >
            <Nav/>
            <Body/>
       </div>
    </>
  )
}