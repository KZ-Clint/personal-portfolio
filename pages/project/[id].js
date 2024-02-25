import Alleviate from "@/components/Project/Alleviate";
import Koffeeclan from "@/components/Project/Koffeeclan";
import Nextecom from "@/components/Project/Nextecom";
import Sleepyweb from "@/components/Project/Sleepyweb";
import Socials from "@/components/Project/Socials";
import Head from "next/head";
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'



export default function Project () {

    const router = useRouter()

    useEffect( () => {
        if (router.isReady) { 
         document.title =  `${router.query.id}`;
    }  
     },[router.isReady] )

  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
        { (Object.keys(router.query).length > 0 && router.query.id === "Alleviate") && <Alleviate/> }
        { (Object.keys(router.query).length > 0 && router.query.id === "Sleepyweb") && <Sleepyweb/> }
        { (Object.keys(router.query).length > 0 && router.query.id === "E-Commerce Basket") && <Nextecom/> }
        { (Object.keys(router.query).length > 0 && router.query.id === "Socials") && <Socials/> }
        { (Object.keys(router.query).length > 0 && router.query.id === "Koffee Clan") && <Koffeeclan/> }

    </>
  )
}
