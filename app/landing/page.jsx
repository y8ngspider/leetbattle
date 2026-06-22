"use client";
import { useState, useEffect } from "react";
import { Geist } from "next/font/google";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"


const items = [
  {
    value: "item-1",
    trigger: "How do battles work?",
    content:
      `You and a friend are given the same LeetCode problem at the same time. First one to solve it wins elo points. No cheating, just skill.`,
  },
  {
    value: "item-2",
    trigger: "What problems are available?",
    content:
      "All LeetCode problems are available. You can pick the difficulty before starting a battle.",
  },
  {
    value: "item-3",
    trigger: "Can I play with strangers?",
    content:
      "Yes! You can challenge friends directly or get matched with a random player at your skill level.",
  },
]

export function AccordionBorders() {
  return (
    <Accordion
      type="single"
      collapsible
      className="rounded-lg border border-black justify-center"
      defaultValue="billing"
    >
      {items.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          className="border-b px-4 last:border-b-0"
        >
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

const geist = Geist({ subsets: ["latin"] });
const phrases = [
  "Built by Gamers, for Gamers.",
  "Code. Compete. Grind.",
  "Beat your friends.",
];

export default function LandingPage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className={geist.className}>
      {/* Navbar */}
      <div className="container mx-auto flex flex-row p-3 mt-5">
        <h1 className="flex-1 font-bold">LeetBattle</h1>
        <div className="flex-1 flex-row gap-6 flex justify-center items-center">
          <Link href="#features" className="p-1 rounded-md font-medium hover:bg-black hover:text-white">Features</Link>
          <Link href="#faqs" className="p-1 rounded-md font-medium hover:bg-black hover:text-white">FAQs</Link>
          <Link href="/play" className="p-1 rounded-md font-medium hover:bg-black hover:text-white">Play Now</Link>
        </div>
        <div className="flex-1 flex justify-end">
            <Link href="/login" className="p-1 rounded-md font-medium hover:bg-black hover:text-white">Log in</Link>
        </div>
      </div>
      {/* Body */}
      <div className="container mx-auto p-4">
        {/* Hero Card */}
        <div className="grid grid-cols-6">
          <div className="col-start-2 col-end-6 p-4 bg-white  rounded-md h-80">
            <h1 className="text-7xl text-center font-medium">
              {phrases[index]}
            </h1>
            <h2 className="text-2xl text-center">Get hired while playing.</h2>
            {/* CTA button */}
            <div className="flex justify-center m-3">
              <Link href="/play" className=" p-2 pt-1 pb-1 bg-black border border-black rounded-md font-medium text-white">
                Play Now
              </Link>
            </div>
          </div>
        </div>
        {/* Features */}
        <div id="features" className="grid grid-cols-6 mt-4">
          <div className="col-start-2 col-end-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="border border-black rounded-md p-4">
                <h3 className="font-bold  text-center">Leetcode Battles</h3>
                <p className="text-gray-500 text-sm text-center">Solve your favorite problems while challenging your friends. First to solve wins.</p>
              </div>
              <div className="border border-black rounded-md p-4">
                <h3 className="font-bold text-center">Ranking System</h3>
                <p className="text-gray-500 text-sm text-center">Earn elo when you win, lose it when you don't.</p>
              </div>
              <div className="border border-black rounded-md p-4">
                <h3 className="font-bold text-center">Track Your Stats</h3>
                <p className="text-gray-500 text-sm text-center">Win rate, solve time, problems solved.</p>
              </div>
            </div>
          </div>
        </div>
        {/* FAQs */}
        <div id="faqs" className="grid grid-cols-6 mt-10 h-30">
            <div className="col-start-2 col-end-6">
                <h1 className="m-1 text-2xl font-bold">Frequently Asked Questions</h1>
                <AccordionBorders></AccordionBorders>
            </div>
        </div>
      </div>
    </div>
  );
}
