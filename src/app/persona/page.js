
import Image from "next/image"

const Persona = () => {




    return(
        <main className='flex flex-col min-h-screen font-poppins items-center text-xl'>
        <h1 className = 'text-3xl pt-10 pb-5'>
            Frugal Fiona
        </h1>
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
        <section className="pt-10 max-w-4xl px-10">
        <h1 className="text-3xl font-bold ">Challenges</h1>
        <li className="p-3">Leaves tap running when doing dishes</li>
        <li className="p-3">Takes longer showers than necessary</li>
        <li className="p-3">Sometimes uses dishwasher and washing machine for small loads</li>
        <li className="p-3">Often ignores minor leaks and drips</li>
        <li className="p-3">Unaware on how to save water</li>
        <li className="p-3">Difficult to convince kids to save water</li>
        </section>
        </main>
    )







}
export default Persona