import Link from 'next/link'
import Image from 'next/image';
import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { getUserArticles, getUserArticlesHistory } from '@/lib/actions/blog.actions';
import { CircleCheckBig } from 'lucide-react';
import PostCard from '@/components/features/articles/PostCard';

const MyJourney = async() => {

    const user = await currentUser();
    if(!user) redirect('/sign-in');
   const  articles = await getUserArticles(user.id);
  return (
    <main className='container'>
        <section className='section-gap flex items-center justify-between'>
            <div>
                <h1 className='text-2xl font-bold '>My Journey</h1>
            </div>
            <div>
                <Link href='/my-journey/new'>
                    <button className='btn-primary'>Create new Article</button>
                </Link>
            </div>
        </section>
        <section className="flex justify-between gap-4 max-sm:flex-col items-center">
        <div className="flex gap-4 items-center">
          <Image
            src={user.imageUrl}
            alt={user.firstName!}
            width={110}
            height={110}
            className='rounded-md'
          />
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-2xl">
              {user.firstName} {user.lastName}
            </h1>
            <p className="text-sm text-muted-foreground">
              {user.emailAddresses[0].emailAddress}
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="border border-gray-300 rounded-lg p-3 gap-2 flex flex-col h-fit">
            <div className="flex gap-2 items-center">
              <CircleCheckBig className="text-green-500 h-6 w-6" />
              <p className="text-2xl font-bold">{articles.length}</p>
            </div>
            <div>Articles created</div>
          </div>
        </div>
      </section>
        <section className='section-gap'>
        <h2 className='text-2xl font-bold mb-5'>My Articles</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {articles.length === 0 ? (
                <p>No articles created yet.</p>
            ) : (
              articles.map((article) => (
                <PostCard 
                key={article.id} 
                {...article} 
                />
              ))
            )}
        </div> 
        </section>
    </main>
  )
}

export default MyJourney