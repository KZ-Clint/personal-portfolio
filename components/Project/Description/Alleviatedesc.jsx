import Link from 'next/link';
import styles from '../../../styles/Alleviate.module.css';


export default function Alleviatedesc () {


  return (
    <>
       <div className={styles.desc_gen_wrapper} >
           <p className={styles.desc_p} >
              Alleviate is a fundraising website that I built using a comprehensive stack of technologies to ensure a seamless and secure user experience.
               Alleviate Incorporates various technologies to function ranging from storage, security, media and financials, My choice of Stack for this project took into consideration; Optimization, Responsiveness, Compatibility, Speed and Seamless Integration.
              Here&#39;s a detailed breakdown of each component:
           </p>
           <div className={styles.desc_tech_expl_wrapper} >
                <div>
                    <h1> Frontend Technologies: </h1>
                    <ul>
                       <li> <span> HTML, CSS3, JavaScript: </span> These form the foundational technologies for structuring, styling, and adding interactivity to web pages. </li>
                       <li> <span> Next.js: </span> A React framework used for server-side rendering (SSR) and generating static websites. </li>
                       <li> <span> Frontend Libraries (Material UI-Icon, Axios, Cookie, React-quill): </span> Material UI-Icon provides pre-designed components for a consistent UI, Axios handles HTTP requests, Cookie manages cookies for storing user data, and React-quill is a rich text editor component. </li>                      
                    </ul>                   
                </div>
                <div>
                    <h1> Backend Technologies: </h1>
                    <ul>
                       <li> <span> Node.js/Express.js: </span>  Node.js is a JavaScript runtime used for server-side operations, and Express.js is a web application framework for Node.js, simplifying the process of building APIs and web servers. </li>
                       <li> <span> Backend Libraries (Bcrypt, Axios, Body-parser, Cors, Dotenv, Jsonwebtoken, Morgan, Nodemon): </span> These libraries cover various functionalities such as encryption (Bcrypt), middleware for handling HTTP requests (Body-parser, Cors, Morgan), environment variable management (Dotenv), JWT authentication (Jsonwebtoken), and automatic server restarts (Nodemon). </li>              
                    </ul>                   
                </div>
                <div>
                    <h1> Database: </h1>
                    <ul>
                       <li> <span> MongoDB: </span>  A NoSQL database used for its flexibility and scalability, suitable for handling varying types of data structures commonly encountered in web applications. </li>              
                    </ul>                   
                </div>
                <div>
                    <h1> Deployment and Hosting: </h1>
                    <ul>
                       <li> <span> Vercel, Netlify: </span>  Vercel and Netlify are popular platforms for deploying and hosting static websites and serverless functions, offering features like continuous deployment and scaling. </li>              
                    </ul>                   
                </div>
                <div>
                    <h1> API Integration: </h1>
                    <ul>
                       <li> <span> Stripe: </span> A payment processing platform used for handling transactions securely. </li>    
                       <li> <span> Coinbase: </span>  An API integration for handling cryptocurrency transactions, providing flexibility in payment options. </li>           
                       <li> <span> Coinlayer: </span> An API for cryptocurrency exchange rates, ensuring accurate currency conversions. </li>    
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
               <h2> Functionalities of Project </h2>
               <ul>
                  <li> Sign Up Users </li>
                  <li> Log In Users </li>
                  <li> Log Out Users </li>
                  <li> Like, Follow, Rate Cause </li>
                  <li> Donate to Cause using Stripe </li>
                  <li> Donate to cause using Coinbase </li>
                  <li> Update Profile </li>
                  <li> Create Cause </li>
               </ul>
           </div>
       </div>
    </>
  )
}