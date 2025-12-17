import Link from 'next/link'
import React from 'react'

const MyJourney = () => {
  return (
    <main className='container'>
        <section className='section-gap'>
            <div>
                <h1 className='text-2xl font-bold '>My Journey</h1>
            </div>
            <div>
                <Link href='/my-journey/new'>
                    <button className='btn-primary'>Create new Article</button>
                </Link>
            </div>
        </section>
    </main>
  )
}

export default MyJourney