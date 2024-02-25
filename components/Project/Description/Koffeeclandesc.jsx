import Link from 'next/link';
import styles from '../../../styles/Alleviate.module.css';


export default function Koffeeclandesc () {


  return (
    <>
       <div className={styles.desc_gen_wrapper} >
           <p className={styles.desc_p} >             
           Koffeeclan is a web application built for coffee enthusiasts, The web application is currently under reconstruction, it is going to be leveraging a stack primarily focused on frontend technologies and serverless architecture
            Here&#39;s a breakdown of the components involved:
           </p>
           <div className={styles.desc_tech_expl_wrapper} >
                <div>
                    <h1> Frontend Technologies: </h1>
                    <ul>
                       <li> <span> HTML, CSS3, JavaScript: </span> These form the foundational technologies for structuring, styling, and adding interactivity to web pages. </li>
                       <li> <span> React.js: </span>  A JavaScript library for building user interfaces. React.js allows for the creation of reusable UI components, facilitating efficient development and maintenance of the application. </li>
                       <li> <span> Frontend Libraries  (Axios, React-Router-Dom): </span> Axios is Used for making HTTP requests to interact with backend APIs. React-Router-Dom Provides declarative routing for React applications, enabling navigation between different components or pages. </li>                      
                    </ul>                   
                </div>
                <div>
                    <h1> Deployment and Hosting: </h1>
                    <ul>
                       <li> <span> AWS Amplify: </span>  AWS Amplify is used for deploying and hosting the website pages, providing features like continuous deployment, scalability, and integration with other AWS services. </li>     
                    </ul>                   
                </div>
                <div>
                    <h1> REST APIs: </h1>
                    <ul>
                       <li> RESTful architecture is employed for designing APIs, ensuring a standardized and predictable interface for communication between the frontend and backend components. </li>    
                    </ul>                   
                </div>
           </div>
       </div>
    </>
  )
}