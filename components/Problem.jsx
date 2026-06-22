import problems from '@/data/problems'
import Timer from '@/components/Timer'
export default function Problem() {

    // grab first problem for now
    // later you'll pass this in as a prop
    const problem = problems[0]

    return (
        <div className="border rounded-md p-6 mt-4">

            {/* title + difficulty */}
            <div className="flex flex-row items-center">
                <div className='flex-1'>
                    <h2 className="font-bold text-xl">{problem.title}</h2>
                </div>
                <div className='flex-1'>

                </div>
                <div className='flex-1 flex justify-end gap-4'>
                    <Timer difficulty={problem.difficulty}></Timer>
                    <span className="bg-green-100 text-green-700 rounded-full px-3 py-1 text-sm">
                        {problem.difficulty}
                    </span>
                </div>
                

                
            </div>

            {/* description */}
            <p className="mt-4 text-gray-700">{problem.description}</p>

            {/* examples */}
            <div className="mt-4">
                {problem.examples.map((example, i) => (
                    <div key={i} className="mt-2 bg-gray-100 rounded-md p-3 text-sm">
                        <p><span className="font-bold">Input: </span>{example.input}</p>
                        <p><span className="font-bold">Output: </span>{example.output}</p>
                        <p><span className="font-bold">Explanation: </span>{example.explanation}</p>
                    </div>
                ))}
            </div>

            {/* constraints */}
            <div className="mt-4">
                <p className="font-bold">Constraints:</p>
                {problem.constraints.map((constraint, i) => (
                    <p key={i} className="text-gray-500 text-sm">• {constraint}</p>
                ))}
            </div>

        </div>
    )
}