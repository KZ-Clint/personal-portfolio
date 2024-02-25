import styles from '../../../styles/Stack.module.css';


export default function Frontendlibrary ({frontLibTools}) {


  return (
    <>
       <div className={styles.flibrary_wrapper} >
           <h3> Frontend Libraries </h3>
           <ul>
             { frontLibTools.map( (stack, index) => (
                  <li key={index}> {stack} </li>
             ) ) }
           </ul>
       </div>
    </>
  )
}