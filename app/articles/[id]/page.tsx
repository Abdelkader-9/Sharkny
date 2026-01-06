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
    <section className='section-gap'>
          <article className="mx-auto max-w-3xl px-4">
        
        {/* Meta info */}
        <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-gray-500">
          <span className="rounded-full bg-gray-500  text-white px-3 py-1 font-medium">
            {topic}
          </span>
          <span>•</span>
          <span>By {user.firstName}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold leading-tight mb-4">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <h2 className="text-xl  mb-8 leading-relaxed">
            {subtitle}
          </h2>
        )}

        {/* Content */}
        <div className="prose prose-lg max-w-none  leading-relaxed">
          <p>{description}</p>
        </div>

        {/* Author */}
        <div className="mt-12 flex items-center pb-6 gap-4 border-t pt-6">
          <Image
            src={user.imageUrl}
            alt={user.firstName || 'User Image'}
            width={48}
            height={48}
            className="rounded-full"
          />
          <div>
            <p className="font-medium">
              {user.firstName} {user.lastName}
            </p>
            <p className="text-sm text-gray-500">
              Article Author
            </p>
          </div>
        </div>

      </article>
    </section>
  )
}

export default ArticleDetails