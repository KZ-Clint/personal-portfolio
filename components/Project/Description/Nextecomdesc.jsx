import Link from 'next/link';
import styles from '../../../styles/Alleviate.module.css';


export default function Nextecomdesc () {


  return (
    <>
       <div className={styles.desc_gen_wrapper} >
           <p className={styles.desc_p} >             
               For the mini e-commerce store project, the technology stack revolves around creating a simple and user-friendly test e-commerce experience. Here&#39;s a breakdown of the components involved:
           </p>
           <div className={styles.desc_tech_expl_wrapper} >
                <div>
                    <h1> Frontend Technologies: </h1>
                    <ul>
                       <li> <span> HTML, CSS3, JavaScript: </span> These form the foundational technologies for structuring, styling, and adding interactivity to web pages. </li>
                       <li> <span> Next.js: </span> A React framework used for server-side rendering (SSR) and generating static websites. </li>
                       <li> <span> Frontend Libraries (Axios, React-Router-Dom, Redux Toolkit, Material-UI Icons): </span> Axios is Used for making HTTP requests to interact with backend APIs, React-Router-Dom enables navigation within the React application, allowing users to move between different pages seamlessly. Redux Toolkit is a state management library for managing complex application states efficiently. Useful for handling shopping cart state, user authentication, and other global states. Material-UI Icons provides a set of pre-designed icons for enhancing the user interface. </li>                      
                    </ul>                   
                </div>
                <div>
                    <h1> Deployment and Hosting: </h1>
                    <ul>
                       <li> <span> Vercel: </span>  Vercel is a popular platform for deploying and hosting static websites offering features like continuous deployment and scaling. </li>              
                    </ul>                   
                </div>
                <div>
                    <h1> REST APIs: </h1>
                    <ul>
                       <li> RESTful architecture is employed for designing APIs, ensuring a standardized and predictable interface for communication between the frontend and backend components. </li>    
                    </ul>                   
                </div>
           </div>
           <div className={styles.funct_wrapper} >
               <h2> Functionalities of Project </h2>
               <ul>
                  <li> Add to Cart </li>
                  <li> Add to Wishlist </li>
                  <li> Delete from Cart </li>
                  <li> Dynamic Pagination </li>
               </ul>
           </div>
       </div>
    </>
  )
}