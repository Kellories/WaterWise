'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"

const Persona = () => {


    const router = useRouter()

    return(
        <main className='flex flex-col min-h-screen font-poppins items-center text-xl'>
        <div className="flex flex-row justify-center items-center">
        <svg className='mr-5 mt-5' onClick={() => { router.push('../') }} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24" >
            <path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z"></path>
        </svg>
        <h1 className = 'text-3xl pt-10 pb-5'>
            Frugal Fiona
        </h1>
        </div>
        <div className="flex flex-row">
        <Image src = "/Fiona.png" width = {200} height = {50}></Image>
        </div>
        <q className = "p-4 text-center">As long as I put in the effort, I can make anything happen.</q>
        {/* demomgraphic */}
        <section className="max-w-4xl"> 
        <div>
        <div className = 'flex flex-row justify-between'>
        <h1 className="pr-10 font-medium">Age, Gender </h1>
        <h1> 53, Female</h1>
        </div>
        <div className = 'flex flex-row justify-between'>
            <h1 className="pr-10 font-medium">Occupation</h1>
            <h1> Homemaker </h1>
        </div>
        <div className="flex flex-row justify-between">
            <h1 className = 'pr-10 font-medium'> Marital Status</h1>
            <h1>Married</h1>
        </div>
        <div className="flex flex-row justify-between">
            <h1 className="pr-10 font-medium"> Housing</h1>
            <h1>4-Room HDB</h1>
        </div>
        <div>

        </div>
        </div>
        </section>

        {/* challenges */}
        <section className="pt-10 max-w-xl px-10">
        <h1 className="text-3xl font-bold ">Challenges</h1>
        <li className="p-3">Leaves tap running when doing dishes</li>
        <li className="p-3">Takes longer showers than necessary</li>
        <li className="p-3">Sometimes uses dishwasher and washing machine for small loads</li>
        <li className="p-3">Often ignores minor leaks and drips</li>
        <li className="p-3">Unaware on how to save water</li>
        <li className="p-3">Difficult to convince kids to save water</li>
        </section>
        <section className="pt-10 max-w-xl px-10">
        <h1 className="text-3xl font-bold">Needs</h1>
        <li className="p-3"><q>I need motivation to help me save water.</q></li>
        <li className="p-3"><q>I need information on how to save water.</q></li>
        <li className="p-3"><q>I need reminders to save water.</q></li>
        </section>
        </main>
    )







}
export default Persona