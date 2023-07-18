'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useRouter } from 'next/navigation'
import Link from 'next/link'




export default function Home() {

  const router = useRouter()
  return (

      <main className='flex min-h-screen bg-black flex-col items-center font-poppins text-white'>
        <div className='flex items-center flex-col justify-center w-screen  '>
          <h1 className = ' font-poppins font-medium  text-transparent text-5xl bg-clip-text bg-gradient-to-r from-blue-200 to-blue-700 mt-10 mb-2'>WaterWise</h1>
          <q className='font-poppins text-white mb-5'> Using Water, Wiser. </q>
        </div>
        <div className='flex flex-row flex-wrap justify-center max-w-xl'  > 
        <Image  src = '/waterwisePhone.png' className= "pr-5 " width={150} height={100} alt='image of WaterWise Splash' />
        <ReactPlayer width = {320} loop={true} playing = {true} url = "https://waterwisesip.s3.ap-southeast-1.amazonaws.com/3dmodel.mp4"></ReactPlayer>
        </div>
        <div className='flex flex-col mt-10'>
          <button onClick = {()=>{router.push('/journey')}} className='bg-blue-500 rounded-lg p-3 m-2'>See Our Journey Map!</button>
          <button onClick = {()=>{router.push('/persona')}}className='bg-blue-500 rounded-lg p-3 m-2'> Our Persona! </button>
        </div>
        <div className='flex flex-col px-10 max-w-screen pt-10'>
          <h2 className=' text-2xl font-poppins font-semibold'>About Us</h2> <br />
          <p>WaterWise is real-time water tracking app paired with a smart water monitor. </p> <br />
          <p>WaterWise solves our issue of the lack of information by having an app where people can share tips as well as access to our own curated water saving tips. <br /><br />As well as letting our users find their main contributors to their household water usage, through a simple set up process and user-friendly data visualisation.</p>
          <br />
        </div>
        <div className='flex flex-col px-10 max-w-screen pt-10'>
          <h2>Links:</h2><br />
          <button className='bg-purple-600 p-3 rounded-lg'><a href = 'https://www.figma.com/proto/mt1APKFh4XSEsquWywX7Cy/WaterWise?type=design&node-id=142-1244&t=kwvdSFEQK57b4rbw-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=262%3A1718&show-proto-sidebar=1'>App Prototype</a></button>
          <button className='bg-purple-600 mt-5 p-3 rounded-lg'><a href = 'https://docs.google.com/forms/d/e/1FAIpQLSeXE_luh1KXIgKyRz5s8bzH3LjHZ3pkzDohVYV_7OXH2tcJHg/viewform?usp=sharing'>Feedback Form</a></button>
        </div>

      </main>


  )
}
