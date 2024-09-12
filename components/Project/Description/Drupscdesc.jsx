import Link from 'next/link';
import styles from '../../../styles/Alleviate.module.css';


export default function Drupscdesc () {


  return (
    <>
       <div className={styles.desc_gen_wrapper} >
           <p className={styles.desc_p} >
              Drupsc is an Indian educational web application that I built with a team of 4 software developers using a comprehensive stack of technologies to ensure a seamless and secure user experience.
               Drupsc Incorporates various technologies to function ranging from storage, security, media and financials, My choice of Stack for this project took into consideration; Optimization, Responsiveness, Compatibility, Speed and Seamless Integration.
              Here&#39;s a detailed breakdown of each component:
           </p>
           <div className={styles.desc_tech_expl_wrapper} >
                <div>
                    <h1> Frontend Technologies: </h1>
                    <ul>
                       <li> <span> HTML, CSS3, JavaScript: </span> These form the foundational technologies for structuring, styling, and adding interactivity to web pages. </li>
                       <li> <span> Next.js: </span> A React framework used for server-side rendering (SSR) and generating static websites. </li>
                       <li> <span> Frontend Libraries (Material UI-Icon, Axios, Cookies-next, Shakaplayer, React-pdf, Razorpay): </span> Material UI-Icon provides pre-designed components for a consistent UI, Axios handles HTTP requests, Cookie manages cookies for storing user data, react-pdf is used to view pdf in the website, Razorpay is the payment gateway for processing in app purchases and Shaka player is used for hls streaming in the website for our lecture videos. </li>                      
                    </ul>                   
                </div>
                <div>
                    <h1> Backend Technologies: </h1>
                    <ul>
                       <li> <span> Java: </span>  Java is a powerful backend language for building applications. </li>             
                    </ul>                   
                </div>
                <div>
                    <h1> Database: </h1>
                    <ul>
                       <li> <span> SQL: </span> SQL is used to manage data especially in a relational database management. </li> 
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
                       <li> <span> Google Tag: </span> Google Tag Manager (GTM) is a free tool that allows you to manage and deploy marketing and analytics tags (like Google Analytics, Facebook Pixel) on your website without modifying the code. </li>    
                       <li> <span> Cloudfare Calls: </span>  Cloudflare’s RTC APIs allow developers to build real-time communication features like video calls, audio calls, and chats with low latency and strong security. </li>           
                       <li> <span> HLS Streaming: </span> It’s widely used for live and on-demand video streaming and supports adaptive bitrate streaming (the video quality adjusts based on the user’s network conditions). </li>    
                       <li> <span> Razorpay: </span> Razorpay is an Indian-based payment gateway that allows businesses to accept, process, and disburse payments online. </li> 
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
                  <li> Sign Up Users </li>
                  <li> Log In Users </li>
                  <li> Send OTP </li>
                  <li> Stream Video</li>
                  <li> Purchase Courses </li>
                  <li> Track video  </li>
               </ul>
           </div>
       </div>
    </>
  )
}