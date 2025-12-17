"use client";
import { Search } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { formUrlQuery, removeKeysFromUrlQuery } from '@jsmastery/utils';
const SearchInput = () => {
  const pathname =  usePathname();
    const router =  useRouter();
    const searchParams = useSearchParams();
   const query =   searchParams.get('title') || '';

   const [searchQuery ,setSearchQuery]=  useState('');

    useEffect(()=>{
        const delayDebounceFn = setTimeout(()=>{
            if(searchQuery){
        const newUrl = formUrlQuery({
            params: searchParams.toString(),
            key: "title",
            value: searchQuery,
});

router.push(newUrl,{scroll:false});
    }else{
        if(pathname === '/articles'){
            const newUrl = removeKeysFromUrlQuery({
            params: searchParams.toString(),
            keysToRemove: ["title"],
});

router.push(newUrl, { scroll: false });
        }
    }
        },500)
    },[searchQuery, router , searchParams , pathname]);
  return (
    <div className='search-wrapper   '>
        <Search className='search-icon'/>
        <input
        type='text'
        placeholder='Search articles...'
        className='search'
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
        /> 
    </div>
  )
}

export default SearchInput