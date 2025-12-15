
import Link from 'next/link'

const Hero = () => {
  return (
    <section className='section-gap'>
        <div className='hero'>
            <h1 className='hero-title'>Knowledge Grows When You Share It</h1>
            <p className='hero-subtitle'>Write article. Clarify ideas. Help others learn.</p>
         <div className=' flex justify-center items-center mt-6 '>
            <Link href='/articles'>
            <button className='btn-primary  '>Share Now !</button>
            </Link>
        </div>
        </div>
        
    </section>
  )
}

export default Hero
