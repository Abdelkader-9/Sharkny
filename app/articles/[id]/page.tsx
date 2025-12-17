import { getArticle } from '@/lib/actions/blog.actions';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import Image from 'next/image';
interface ArticleDetailsProps {
    params: {
        id: string;
    }
}
const ArticleDetails = async ({params}:ArticleDetailsProps) => {
    const { id} = await params;
  const article  = await getArticle(id);
  const user = await currentUser();
  const { subtitle,title,description,topic} = article;
  if(!user) redirect('/sign-in');
  if(!title) redirect('/articles');
  return (
    <section>
        <article>
        <div className='container section-gap'>
                <div className='mb-6'>
                    <div className='mb-5'>
                <span className='text-md font-medium mb-2'>Topic: {topic}</span>
                <span className='text-md font-medium ml-4 mb-2'>Author: {user.firstName}</span>
                </div>
                <h1 className='text-4xl font-bold mb-2'>{title}</h1>
                <h2 className='text-2xl font-semibold mb-4'>{subtitle}</h2>
            </div>
            <div>
                <p className='text-lg leading-8 line-clamp-3'>{description}</p>
            </div>
            <div className='flex items-center gap-2'>
                <Image
                src={user.imageUrl}
                alt = {user.firstName || "User Image"}
                width={35}
                height={35}
                className="rounded-full mt-4"
                />
                <h4 className='font-medium mt-2'>{user.firstName} {user.lastName}</h4>
            </div>
        </div>
        </article>
    </section>
  )
}

export default ArticleDetails