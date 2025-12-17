import Filter from "@/components/features/articles/Filter"
import PostCard from "@/components/features/articles/PostCard"
import SearchInput from "@/components/features/articles/SearchInput"
import { getAllArticles } from "@/lib/actions/blog.actions";


const Articles = async () => {
    const articles = await getAllArticles({limit:9});
  return (
    <main className='container'>
      <section className='section-gap'>
        <div className="flex items-center justify-between gap-2">
          <div>
          <h1 className='font-bold text-3xl py-2'>Articles</h1>
          <p className='font-medium text-xl'>Explore articles written by developers</p>
          </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4 mt-6">
          <SearchInput/>
          <Filter/>
            </div>
        </div>
      </section>
      <section>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {articles.map((article) => (
            <PostCard 
            key={article.id}
            {...article}/>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Articles