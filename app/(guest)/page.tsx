import Image from 'next/image'
import dbConnection from '@/DatabasePool'
import Hero from './components/Hero';
import SkillsAndExpererience from './components/SkillsAndExpererience';


export default async function Home() {
  console.log((await dbConnection.query('SELECT 1 as "test";')).fields);

  return (
    <main >
      <Hero />
      <SkillsAndExpererience />
    </main>
  )
}
