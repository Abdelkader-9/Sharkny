import {GraduationCap ,Code ,SearchCode  } from 'lucide-react'
export const featuresData = [
    {
        title :'Learn by Explaining',
        description :'Writing forces clarity.When you explain what you’re learning in your own words, concepts stick longer and understanding goes deeper.',
        icon:GraduationCap,
    },
    {
        title :'Learn from Other Developers',
        description :'Read how others break down problems, share insights, and approach topics differently — learning doesn’t stop with your own posts.',
        icon:Code,
    },
    {
        title :'Discover New Topics',
        description :'Explore ideas, tools, and concepts you didn’t even know existed, shared by developers learning in public.',
        icon:SearchCode,
    },
]
const Features = () => {
  return (
    <section className='section-gap container'>
        <div className=' '>
            <div className=' text-center mb-10'>
                <h1 className='text-2xl font-bold pb-3'>Why Sharkny Works for Developers</h1>
                <p className='font-semibold'>Learn deeper by explaining, grow faster by reading, and discover what you didn’t know you needed.</p>
            </div>
            <div className='featured  grid grid-cols-1 md:grid-cols-3 gap-6'>
                {featuresData.map((feature,index)=>(
                    <div 
                    key={index}
                    className='featured-card'
                >
                        <div className='flex items-center justify-center'>
                            <feature.icon
                            className=' icon '
                            />
                        </div>
                        <div className='featured-text'>
                            <h4 className='font-semibold text-lg pb-2'>{feature.title}</h4>
                            <p className='text-muted-foreground'>{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Features