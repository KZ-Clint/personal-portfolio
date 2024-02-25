import Link from 'next/link';
import styles from '../../styles/Card.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function Card ({p}) {


  return (
    <>
       <div className={styles.card_gen_wrapper} >
           <div className={styles.card_header} >
               <h1> {p.project_name} </h1>
           </div>
           <div className={styles.card_body}  >
               <h3> {p.project_type} </h3>
               <h6> {p.description} </h6>
               <Link className={styles.view_code_link} target='_blank' href={`/project/${p.project_name}`} >
                   <GitHubIcon style={{color:"white"}} />
                   <p> View Code </p>  
               </Link>
           </div>
       </div>
    </>
  )
}