import Link from "next/link";

interface postCradProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
}
const PostCard = ({id , title , subtitle, description} : postCradProps) => {
  return (
    <div className="post-card-inner">
      <div>
        <h2 className='post-title'>{title}</h2>
        <h3 className='text-lg font-semibold pb-0.5'>{subtitle}</h3>
        <p className='text-md'>{description}</p>
      </div>
      <Link 
      href={`/articles/${id}`} >
        <button className="btn-primary px-2 py-1 mt-4">
        Read More
      </button>
      </Link>
    </div>
  )
}

export default PostCard