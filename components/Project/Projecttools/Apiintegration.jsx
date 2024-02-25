import styles from '../../../styles/Stack.module.css';


export default function Apiintegration ({apiTools}) {


  return (
    <>
       <div className={styles.api_wrapper} >
           <h3> API Integration </h3>
           <ul>
            { apiTools.map( (stack, index) => (
                  <li key={index}> {stack} </li>
             ) ) }
           </ul>
       </div>
    </>
  )
}