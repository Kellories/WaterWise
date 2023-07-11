import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className='flex bg-gradient-to-b from-blue-500 to-blue-300 items-center flex-col justify-center w-screen h-44 '>
        <h1 className = ' font-poppins font-medium text-5xl text-white p-3 '>WaterWise</h1>
        <p className='font-poppins text-white '>"Your solution to reducing water sustainably"</p>
      </div>
      <div className='flex flex-row justify-center pt-5 w-screen'  > 
      <Image  src = "/waterwisePhone.png" width={150} height={100} />
      </div>
      <div className='flex flex-col p-10'>
        <h2 className='text-black text-2xl font-poppins font-semibold'>About Us</h2>
        <p>WaterWise is an app with real-time water tracking paired with a smart water monitor. </p> <br />
        <p>WaterWise solves our issue of the lack of information by having an app where people can share tips as well as access to our own curated water saving tips.</p>
        <br />
        <p> With a reward system that rewards users who meet their water saving goal or users who complete the challenges curated by us, we effectively give them a goal and motivator to work towards reducing the water usage</p>
      </div>
    </main>
  )
}
