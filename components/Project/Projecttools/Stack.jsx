import styles from '../../../styles/Stack.module.css';


export default function Stack ({stackTools}) {

  return (
    <>
       <div className={styles.stack_wrapper} >
           <h3> Stack </h3>
           <ul>
             { stackTools.map( (stack, index) => (
                  <li key={index}> {stack} </li>
             ) ) }
           </ul>
       </div>
    </>
  )
}