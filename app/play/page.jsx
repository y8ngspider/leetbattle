import { Geist } from "next/font/google";
import Link from "next/link"
import Problem from '@/components/Problem'

const geist = Geist({ subsets: ["latin"] });

export default function Play() {
    return (
        <div className={geist.className}>
            <div className="container mx-auto flex flex-row p-3 mt-5">
                <h1 className="flex-1 font-bold">LeetBattle</h1>
                <div className="flex-1 flex-row gap-6 flex justify-center items-center">
                </div>

                <div className="flex flex-1 justify-end">
                    <Link href="/landing" className="p-1 rounded-md font-medium hover:bg-black hover:text-white">Leave Game</Link>
                </div>
            </div>
            <div className="container mx-auto p-4">
                <Problem />
            </div>
            
        </div>
        

    )
}