import Link from 'next/link';
import styles from '../../../styles/Alleviate.module.css';


export default function Sleepywebdesc () {


  return (
    <>
       <div className={styles.desc_gen_wrapper} >
           <p className={styles.desc_p} >
              Sleepyweb is a startup that provides Web services ranging from Website Design, Logo and Branding Design, Social Media Marketing e.t.c This is the website page of the startup still in production, My choice of Stack for this project took into consideration; Scale or Size, Utility, Responsiveness, Compatibility, Speed and Seamless Integration.
              Here&#39;s a detailed breakdown of each component:
           </p>
           <div className={styles.desc_tech_expl_wrapper} >
                <div>
                    <h1> Frontend Technologies: </h1>
                    <ul>
                       <li> <span> HTML, CSS3, JavaScript: </span> These form the foundational technologies for structuring, styling, and adding interactivity to web pages. </li>
                       <li> <span> React.js: </span>  A JavaScript library for building user interfaces. React.js facilitates the development of reusable UI components and helps in managing the application&#39;s state efficiently. </li>
                       <li> <span> Frontend Libraries (Axios, React-Router-Dom, Dotenv): </span> Axios is used for making HTTP requests to fetch data from APIs, React-Router-Dom enables navigation within the React application, and Dotenv manages environment variables for enhanced security. </li>                      
                    </ul>                   
                </div>
                <div>
                    <h1> Backend Technologies: </h1>
                    <ul>
                       <li> <span> Java/SpringBoot: </span> Java is a widely used programming language known for its portability and performance. Spring Boot is a popular framework for building Java-based web applications, providing features like dependency injection, configuration management, and simplified setup. </li>
                       <li> <span> Backend Libraries (Cors, Dotenv): </span>  Cors (Cross-Origin Resource Sharing) is employed to allow secure communication between the frontend and backend servers. Dotenv handles environment variables for configuring the backend environment. </li>              
                    </ul>                   
                </div>
                <div>
                    <h1> Deployment and Hosting: </h1>
                    <ul>
                       <li> <span> AWS Amplify: </span>  AWS Amplify is used for deploying and hosting the website pages, providing features like continuous deployment, scalability, and integration with other AWS services. </li>    
                       <li> <span> Railway: </span>  Railway is used for additional deployment, database and hosting features in the backend, specific to our project </li>                        
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