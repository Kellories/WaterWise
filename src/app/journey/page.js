'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'


const JourneyMap = () => {
    const router = useRouter()
    return (
        <main className='flex flex-col min-h-screen items-center text-xl'>
            <section className='flex min-h-screen flex-col items-center font-poppins p-10  text-black max-w-4xl' >
                <div className="flex flex-row justify-center items-center mb-10">
                    <svg className='mr-3' onClick={() => { router.push('../') }} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24" >
                        <path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z"></path>
                    </svg>
                    <h1 className='text-3xl'>Journey Map</h1>
                </div>
                    <p className="text-2xl font-bold">Beginning</p>
                    <Image src = "/image9.png" width={800} height = {50} className='p-10' alt = "looking at bill sad"></Image>
                    <p className="p-0">Frugal Fiona notices that her water bills are higher than her friends. Worried about the costs, she wants to reduce it.
                        However, she does not know the section cause of the high water bills.</p>
            </section>

            <section className='flex min-h-screen flex-col items-center font-poppins p-10 text-black max-w-4xl' style={{ backgroundColor: '#FFFFFF' }}>
                <h1 className="text-3xl font-bold">Discovery</h1>
                <Image src = "/image16.png" alt = "looking at noticeboard" width={800} height = {50} className='p-10'></Image>
                <p>One day, she noticed a flyer for WaterWise at her HDB block on the way home from grocery shopping.
                    It claims to be a solution for managing household water usage and even has Incentives to be won. </p>
            </section>

            <section className='flex min-h-screen flex-col items-center font-poppins p-10 text-black max-w-4xl' style={{ backgroundColor: '#FFFFFF' }}>
                <h1 className="text-3xl font-bold">Exploration</h1>
                <Image src = "/image3.png" alt = "scanning qr code" width={800} height = {50} className='p-10'></Image>
                <p>Intrigued by the information, she scans the QR code on the flyer which brings her to the App Store.

                    She finds out about the app’s features that help to monitor water consumption and give tips to save water.

                    It also awards vouchers to users who manage to sectiontain a low usage. She decides to install the app.</p>
            </section>

            <section className='flex min-h-screen flex-col items-center font-poppins p-10 text-black max-w-4xl' style={{ backgroundColor: '#FFFFFF' }}>
                <h1 className="text-3xl font-bold">Set Up</h1>
                <Image src = "/image1.png" alt = "picture of family" width={800} height = {50} className='p-10'></Image>
                <p>Invested, Frugal Fiona sets up a Family Group and invites her family members to join. She also sets a Saving Goal and Reminders to keep the family on track.</p>
            </section>

            <section className='flex min-h-screen flex-col items-center font-poppins p-10 text-black max-w-4xl' style={{ backgroundColor: '#FFFFFF' }}>
                <h1 className="text-3xl font-bold">Realisation</h1>
                <Image src = "/image15.png" alt = "water tap running" width={800} height = {50} className='p-10'></Image>
                <p>On several occasions, she notices that the household receives Notifications from the app, informing them that their daily water usage limit has almost been reached. This prompts them to be more mindful of how they use water that day and also compensate by using less water the next day.

                    Additionally, a floor plan with how much water % that unit is using may urge users to manage water usage there better.</p>
            </section>

            <section className='flex min-h-screen flex-col items-center font-poppins p-10 text-black max-w-4xl' style={{ backgroundColor: '#FFFFFF' }}>
                <h1 className="text-3xl font-bold">Benefits</h1>
                <Image src = "/image17.png"alt = 'money' width={800} height = {50} className='p-10'></Image>
                <p>Due to the family’s efforts, they were eligible for Rebates offered by WaterWise. They noticed a huge decrease in water bills due to the rebates and reduced water usage.</p>
            </section>

            <section className='flex min-h-screen flex-col items-center font-poppins p-10 text-black max-w-4xl' style={{ backgroundColor: '#FFFFFF' }}>
                <h1 className="text-3xl font-bold">Benefits</h1>
                <Image src = "/image10.png" alt = 'group of friends' width={800} height = {50} className='p-10'></Image>
                <p>Frugal Fiona also learnt about water saving tips which contributed to the reduction of water consumption. She shared about WaterWise with all her friends in the neighbourhood.</p>
            </section>

            <section className='flex min-h-screen flex-col items-center font-poppins p-10 text-black max-w-4xl' style={{ backgroundColor: '#FFFFFF' }}>
                <h1 className="text-3xl font-bold">Popularity</h1>
                <Image src = "/image18.png" alt = ' group of people' width={800} height = {50} className='p-10'></Image>
                <p>Due to the app’s enticing benefits and usefulness, WaterWise soon gained popularity and became a well-known app in Singapore, used by all members of the household.</p>
            </section>

            <section className='flex min-h-screen flex-col items-center font-poppins p-10 text-black max-w-4xl' style={{ backgroundColor: '#FFFFFF' }}>
                <h1 className="text-3xl font-bold">End</h1>
                <Image src = "/image5.png" alt = 'happy person looking at bills'width={800} height = {50} className='p-10'></Image>
                <p>Frugal Fiona and her neighbours effectively reduced their water bills and inculcated Good Water Saving Habits through the WaterWise app.</p>
            </section>
        </main>

    )
}
export default JourneyMap