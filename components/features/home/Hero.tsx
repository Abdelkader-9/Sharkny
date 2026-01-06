
import Link from 'next/link'

const Hero = () => {
  return (
    <section className='section-gap'>
      <div className='container flex flex-col-reverse lg:flex-row justify-between items-center gap-10'>
            <div className='hero '>
            <h1 className='hero-title'>Knowledge Grows When You Share It</h1>
            <p className='hero-subtitle'>Write article. Clarify ideas. Help others learn.</p>
         <div className=' flex justify-center items-center mt-6 '>
            <Link href='/articles'>
            <button className='btn-primary'>Share Now !</button>
            </Link>
        </div>
        </div>
        <div className="relative hidden lg:flex justify-center items-center">
                        <div className= "w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl absolute -top-10 -right-10"></div>
                        <div className="w-96 h-96 bg-gradient-to-tl from-secondary/30 to-primary/30 rounded-2xl transform rotate-6 shadow-2xl"></div>
        </div>
      </div>
     
    </section>
  )
}

export default Hero
