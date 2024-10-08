import Alleviate from "@/components/Project/Alleviate";
import Bluecargotrust from "@/components/Project/Bluecargotrust";
import Drupsc from "@/components/Project/Drupsc";
import Koffeeclan from "@/components/Project/Koffeeclan";
import Nextecom from "@/components/Project/Nextecom";
import Sleepyweb from "@/components/Project/Sleepyweb";
import Socials from "@/components/Project/Socials";
import Unitedgrandtrust from "@/components/Project/Unitedgrandtrust";
import Unityheritagetrust from "@/components/Project/Unityheritagetrust";
import Upsfastlogistics from "@/components/Project/Upsfastlogistics";
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
        { (Object.keys(router.query).length > 0 && router.query.id === "DrUpsc") && <Drupsc/> }
        { (Object.keys(router.query).length > 0 && router.query.id === "Blue Cargo Trust") && <Bluecargotrust/> }
        { (Object.keys(router.query).length > 0 && router.query.id === "UPS Fast Logistics") && <Upsfastlogistics/> }
        { (Object.keys(router.query).length > 0 && router.query.id === "Unity Heritage Trust") &&  <Unityheritagetrust/> }
        { (Object.keys(router.query).length > 0 && router.query.id === "United Grand Trust") &&  <Unitedgrandtrust/> }

    </>
  )
}
