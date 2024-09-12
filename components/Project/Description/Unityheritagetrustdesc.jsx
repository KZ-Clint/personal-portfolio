import Link from 'next/link';
import styles from '../../../styles/Alleviate.module.css';


export default function Unityheritagetrustdesc () {


  return (
    <>
       <div className={styles.desc_gen_wrapper} >
           <p className={styles.desc_p} >
              Unity Heritage Trust is a financial application that lets you use financial tools to facilitate your financial needs
              Unity Heritage Trust Incorporates various technologies to function ranging from storage, security and financials, My choice of Stack for this project took into consideration; Optimization, Responsiveness, Compatibility, Speed and Seamless Integration.
              Here&#39;s a detailed breakdown of each component:
           </p>
           <div className={styles.desc_tech_expl_wrapper} >
                <div>
                    <h1> Frontend Technologies: </h1>
                    <ul>
                       <li> <span> HTML, CSS3, JavaScript: </span> These form the foundational technologies for structuring, styling, and adding interactivity to web pages. </li>
                       <li> <span> Next.js: </span> A React framework used for server-side rendering (SSR) and generating static websites. </li>
                       <li> <span> Frontend Libraries (Fontawesome, Axios, Cookies-next, Tiny-mce ): </span> Fontawesome provides pre-designed components for a consistent UI, Axios handles HTTP requests, Cookie manages cookies for storing user data, Tiny-mce is a rich text editor that gives you powerful editing features for your text editings, email templates or blogs. </li>                      
                    </ul>                   
                </div>
                <div>
                    <h1> Backend Technologies: </h1>
                    <ul>
                       <li> <span> Python/Django: </span>  Python/Django is a powerful backend language for building applications. </li>             
                    </ul>                   
                </div>
                <div>
                    <h1> Database: </h1>
                    <ul>
                       <li> <span> MongoDB: </span> A NoSQL database used for its flexibility and scalability, suitable for handling varying types of data structures commonly encountered in web applications. </li> 
                    </ul>                   
                </div>
                <div>
                    <h1> Deployment and Hosting: </h1>
                    <ul>
                       <li> <span> AWS Amplify: </span>  AWS Amplify is a set of tools and services specifically designed to help developers build, deploy, and manage modern full-stack web and mobile applications. for our application it was used to host our frontend </li>              
                       <li> <span> AWS Elastic Beanstalk: </span>  AWS Elastic Beanstalk is a Platform as a Service (PaaS) that makes it easy to deploy, manage, and scale web applications and services. In our application it was used to host our backend. </li>            
                    </ul>                   
                </div>
                <div>
                    <h1> API Integration: </h1>
                    <ul>
                       <li> <span> Cloudinary: </span> A cloud-based service for managing and optimizing images and videos, enhancing media handling capabilities on the platform. </li> 
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
               <h2> Functionalities of Application </h2>
               <ul>
                  <li> Signup Users </li>
                  <li> Log In user/admin </li>
                  <li> Transfer </li>
                  <li> Cheque deposit </li>
                  <li> KYC </li>
                  <li> View analytics </li>
                  <li> Send email from dashboard </li>
                  <li> Suspend user </li>
               </ul>
           </div>
       </div>
    </>
  )
}