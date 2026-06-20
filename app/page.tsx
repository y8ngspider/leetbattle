// just redirect to landing for now
import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/landing')
}
