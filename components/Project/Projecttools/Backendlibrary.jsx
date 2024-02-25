import styles from '../../../styles/Stack.module.css';


export default function Backendlibrary ({backLibTools}) {


  return (
    <>
       <div className={styles.blibrary_wrapper} >
           <h3> Backend Libraries </h3>
           <ul>
             { backLibTools.map( (stack, index) => (
                  <li key={index}> {stack} </li>
             ) ) }
           </ul>
       </div>
    </>
  )
}