"use client"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { topics } from "@/constans"
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

const Filter = () => {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const query = searchParams.get("topic") || ""
  const params = searchParams.toString()

  const [searchQuery, setSearchQuery] = useState(query)

  useEffect(() => {
    setSearchQuery(query)
  }, [query])

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchQuery) {
        const newUrl = formUrlQuery({
          params,
          key: "topic",
          value: searchQuery,
        })

        router.push(newUrl, { scroll: false })
      } else {
        const newUrl = removeKeysFromUrlQuery({
          params,
          keysToRemove: ["topic"],
        })

        router.push(newUrl, { scroll: false })
      }
    }, 300)

    return () => clearTimeout(timeout)
  }, [searchQuery, router, pathname]) 

  return (
    <div className="flex items-center gap-2">
      <h4>Filter</h4>

      <Select
        value={searchQuery}
        onValueChange={(value) => setSearchQuery(value)}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by topic" />
        </SelectTrigger>

        <SelectContent>
          {topics.map((topic) => (
            <SelectItem key={topic} value={topic}>
              {topic}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default Filter
