'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


export default function Home() {
  const router = useRouter()
  return (

      <main className='flex min-h-screen bg-black flex-col items-center font-poppins text-white'>
        <div className='flex items-center flex-col justify-center w-screen  '>
          <h1 className = ' font-poppins font-medium  text-transparent text-5xl bg-clip-text bg-gradient-to-r from-blue-200 to-blue-700 mt-10 mb-2'>WaterWise</h1>
          <q className='font-poppins text-white mb-5'> Using Water, Wiser. </q>
        </div>
        <div className='flex flex-row justify-center w-screen'  > 
        <Image  src = '/waterwisePhone.png' width={150} height={100} alt='image of WaterWise Splash' />
        </div>
        <div className='flex flex-col mt-10'>
          <button onClick = {()=>{router.push('/journey')}} className='bg-blue-500 rounded-lg p-3 m-2'>See Our Journey Map!</button>
          <button className='bg-blue-500 rounded-lg p-3 m-2'> Our Persona! </button>
        </div>
        <div className='flex flex-col px-10 max-w-screen pt-10'>
          <h2 className=' text-2xl font-poppins font-semibold'>About Us</h2> <br />
          <p>WaterWise is real-time water tracking app paired with a smart water monitor. </p> <br />
          <p>WaterWise solves our issue of the lack of information by having an app where people can share tips as well as access to our own curated water saving tips. <br /><br />As well as letting our users find their main contributors to their household water usage, through a simple set up process and user-friendly data visualisation.</p>
          <br />
        </div>

      </main>


  )
}
