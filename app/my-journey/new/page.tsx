import NewArticleForm from '@/components/features/my-journey/NewArticleForm'
const NewArticle = () => {
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