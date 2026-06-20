import {Geist} from 'next/font/google'

const geist = Geist({ subsets: ['latin'] })  

export default function LandingPage() {
    return (
        <div className={geist.className}>
            {/* Navbar */}
            <div className="container mx-auto flex flex-row m-3 mt-5">
                <h1 className="flex-1 font-bold">LeetBattle</h1>
                <div className="flex-1 flex-row gap-6 flex justify-center items-center">
                    <button className="p-1 bg-transparent rounded-md font-medium hover:bg-black hover:text-white">Features</button>
                    <button className="p-1 bg-transparent rounded-md font-medium hover:bg-black hover:text-white">FAQs</button>
                    <button className="p-1 bg-transparent rounded-md font-medium hover:bg-black hover:text-white">Play Now</button>
                </div>
                <div className='flex-1 flex justify-end'>
                    <button className="p-1 bg-transparent rounded-md font-medium hover:bg-black hover:text-white">Log in</button>
                </div>
            </div>
            {/* Body */}
            <div className="container mx-auto screen p-4">
                {/* Hero Card */}
                <div className="grid grid-cols-6 gap-4">
                    <div className="col-start-2 col-end-6 p-4 bg-white border rounded-md h-64">
                        <h1 className="text-7xl text-center font-medium">Built by Gamers, for Gamers.</h1>
                        <h2 className="text-2xl text-center">Code. Compete. Grind.</h2>
                        <h2 className="text-2xl text-center">Get hired while playing.</h2>
                        {/* CTA button */}
                        <div className='grid justify-center m-3'>
                            <button className=" p-2 pt-1 pb-1 bg-transparent border border-black rounded-md font-medium hover:bg-black hover:text-white">Play Now</button>
                        </div>
                        
                    </div>
                </div>
                <div className="grid grid-cols-6 gap-4">
                    <div className="col-start-2 col-end-6 bg-white border rounded-md h-64">
                    </div>
                </div>
            </div>
        </div>
    )
}