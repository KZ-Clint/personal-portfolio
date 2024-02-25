import Link from 'next/link';
import styles from '../../../styles/Alleviate.module.css';


export default function Socialsdesc () {


  return (
    <>
       <div className={styles.desc_gen_wrapper} >
           <p className={styles.desc_p} >             
           The socials web app is a platform designed for users to interact with each other in real-time, sharing content, engaging in conversations, and connecting with friends. It leverages a modern stack comprising Node.js/Express.js on the backend and Socket.io for real-time communication. Node.js, paired with Express.js, provides a robust and scalable backend infrastructure for handling the server-side logic and API endpoints. Node.js&#39;s event-driven architecture aligns well with the real-time nature of the application, while Express.js streamlines the development process with its minimalist approach and extensive middleware ecosystem.
            Here&#39;s a breakdown of the components involved:
           </p>
           <div className={styles.desc_tech_expl_wrapper} >
                <div>
                    <h1> Frontend Technologies: </h1>
                    <ul>
                       <li> <span> HTML, CSS3, JavaScript: </span> These form the foundational technologies for structuring, styling, and adding interactivity to web pages. </li>
                       <li> <span> Next.js: </span> A React framework used for server-side rendering (SSR) and generating static websites. </li>
                       <li> <span> Frontend Libraries  (Axios, Cookie, Moment, Socket.io-client, React-share): </span> Axios is Used for making HTTP requests to interact with backend APIs. Cookie manages cookies for storing user data or session information allowing users to move between different pages seamlessly. Moment is a library for parsing, validating, manipulating, and displaying dates and times. Socket.io-client facilitates real-time bidirectional event-based communication between the client and server using WebSockets. React-share provides social media sharing buttons and functionality for sharing content across various platforms. </li>                      
                    </ul>                   
                </div>
                <div>
                    <h1> Backend Technologies: </h1>
                    <ul>
                       <li> <span> Node.js/Express.js: </span>  Node.js is a JavaScript runtime used for server-side operations, and Express.js is a web application framework for Node.js, simplifying the process of building APIs and web servers. </li>
                       <li> <span> Backend Libraries (Socket.io, Bcrypt, Axios, Body-parser, Cors, Dotenv, Jsonwebtoken, Morgan, Nodemon): </span> These libraries cover various functionalities such as encryption Socket.io enables real-time bidirectional event-based communication between clients and the server, facilitating features like chat, notifications, and live updates (Bcrypt), middleware for handling HTTP requests (Body-parser, Cors, Morgan), environment variable management (Dotenv), JWT authentication (Jsonwebtoken), and automatic server restarts (Nodemon). </li>              
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
               <h2> Functionalities of Project </h2>
               <ul>
                  <li> Sign Up Users </li>
                  <li> Log In Users </li>
                  <li> Log Out Users </li>
                  <li> Create Post in real-time </li>
                  <li> Create Comment in real-time </li>
                  <li> Follow and Unfollow friends in real-time </li>
                  <li> Like, Unlike, Delete, Bookmark Post in real-time </li>
                  <li> Like, Unlike, Delete, Bookmark Comment in real-time </li>
                  <li> Follow Friends </li>
                  <li> Real time Notification, Posts, Comments </li>
                  <li> Suggest Friends </li>
                  <li> Create Cause </li>
               </ul>
           </div>
       </div>
    </>
  )
}