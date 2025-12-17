import NewArticleForm from '@/components/features/my-journey/NewArticleForm'
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
const NewArticle = async () => {
    const {userId} = await auth();
  if (!userId) redirect("/sign-in");
  return (
    <section className='section-gap container'>
        <div>
            <h1 className='text-3xl font-bold text-center'>Create New Article</h1>
        </div>
        <NewArticleForm />
    </section>
  )
}

export default NewArticle