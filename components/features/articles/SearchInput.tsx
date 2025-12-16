import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

const SearchInput = () => {
  return (
    <div className='search-wrapper   '>
        <Search className='search-icon'/>
        <input
        type='text'
        placeholder='Search articles...'
        className='search'
        /> 
    </div>
  )
}

export default SearchInput