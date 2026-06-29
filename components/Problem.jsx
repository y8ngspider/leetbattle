'use client'
import { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import problems from '@/data/problems'
import Timer from '@/components/Timer'

const MonacoEditor = dynamic(() => import('@monaco-editor/react'), { ssr: false })

export default function Problem() {
    const problem = problems[0]
    const [code, setCode] = useState(problem.starterCode)
    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(false)
    const [pyodideReady, setPyodideReady] = useState(false)
    const pyodideRef = useRef(null)

    // Load Pyodide (Python in the browser) once on mount
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://cdn.jsdelivr.net/pyodide/v0.27.0/full/pyodide.js'
        script.async = true
        script.onload = async () => {
            const py = await window.loadPyodide({
                indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.27.0/full/',
            })
            // Set up a reusable helper that runs code with a given stdin and captures stdout
            await py.runPythonAsync(`
import sys, io

def run_code(user_code, stdin_text):
    old_in, old_out = sys.stdin, sys.stdout
    sys.stdin = io.StringIO(stdin_text)
    sys.stdout = io.StringIO()
    try:
        exec(compile(user_code, '<student>', 'exec'), {})
        return sys.stdout.getvalue()
    finally:
        sys.stdin = old_in
        sys.stdout = old_out
`)
            pyodideRef.current = py
            setPyodideReady(true)
        }
        document.head.appendChild(script)
        return () => document.head.removeChild(script)
    }, [])

    async function handleSubmit() {
        setLoading(true)
        setResult(null)

        const py = pyodideRef.current
        const results = []

        for (const tc of problem.testCases) {
            try {
                const runCode = py.globals.get('run_code')
                const stdout = runCode(code, tc.stdin)
                const passed = stdout.trim() === tc.expected_output.trim()
                results.push({ passed, stdout: stdout.trim(), error: null })
            } catch (err) {
                results.push({ passed: false, stdout: null, error: err.message })
                break
            }
        }

        setResult({ passed: results.every(r => r.passed), results })
        setLoading(false)
    }

    return (
        <div className="border rounded-md p-6 mt-4">

            {/* title + difficulty + timer */}
            <div className="flex flex-row items-center">
                <div className="flex-1">
                    <h2 className="font-bold text-xl">{problem.title}</h2>
                </div>
                <div className="flex-1"></div>
                <div className="flex-1 flex justify-end gap-4">
                    <Timer difficulty={problem.difficulty} />
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

            {/* code editor */}
            <div className="mt-6 border rounded-md overflow-hidden">
                <MonacoEditor
                    height="320px"
                    language="python"
                    value={code}
                    onChange={(val) => setCode(val ?? '')}
                    theme="vs-dark"
                    options={{ minimap: { enabled: false }, fontSize: 14 }}
                />
            </div>

            {/* submit button */}
            <div className="mt-4 flex items-center justify-end gap-3">
                {!pyodideReady && (
                    <span className="text-sm text-gray-400">Loading Python runtime...</span>
                )}
                <button
                    onClick={handleSubmit}
                    disabled={loading || !pyodideReady}
                    className="bg-black text-white px-5 py-2 rounded-md font-medium disabled:opacity-50 hover:bg-gray-800"
                >
                    {loading ? 'Running...' : 'Submit'}
                </button>
            </div>

            {/* results */}
            {result && (
                <div className={`mt-4 p-4 rounded-md border ${result.passed ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                    <p className={`font-bold ${result.passed ? 'text-green-700' : 'text-red-700'}`}>
                        {result.passed ? 'All tests passed!' : 'Some tests failed'}
                    </p>
                    <div className="mt-2 space-y-1">
                        {result.results.map((r, i) => (
                            <div key={i} className="text-sm">
                                <span className={r.passed ? 'text-green-600' : 'text-red-600'}>
                                    Test {i + 1}: {r.passed ? 'Passed' : 'Failed'}
                                </span>
                                {!r.passed && r.stdout && (
                                    <span className="text-gray-500 ml-2">— got: {r.stdout}</span>
                                )}
                                {r.error && (
                                    <pre className="mt-1 text-red-500 font-mono text-xs whitespace-pre-wrap">{r.error}</pre>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}

        </div>
    )
}
