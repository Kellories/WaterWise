'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


export default function Home() {
  const router = useRouter()
  return (

      <main className='flex min-h-screen bg-black flex-col items-center font-poppins text-white'>
        <div className='flex items-center flex-col justify-center w-screen h-32 '>
          <h1 className = ' font-poppins font-medium  text-transparent text-5xl bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 '>WaterWise</h1>
          <q className='font-poppins text-white '> Your solution to reducing water sustainably </q>
        </div>
        <div className='flex flex-row justify-center w-screen'  > 
        <Image  src = '/waterwisePhone.png' width={150} height={100} alt='image of WaterWise Splash' />
        </div>

        <div className='flex flex-col px-10 pt-10'>
          <h2 className=' text-2xl font-poppins font-semibold'>About Us</h2> <br />
          <p>WaterWise is an app with real-time water tracking paired with a smart water monitor. </p> <br />
          <p>WaterWise solves our issue of the lack of information by having an app where people can share tips as well as access to our own curated water saving tips.</p>
          <br />
        </div>
        <div>
          <button onClick = {()=>{router.push('/journey')}} className='bg-blue-500 rounded-lg p-3'>See Our Journey Map</button>
          <button></button>
        </div>
      </main>


  )
}
