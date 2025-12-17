import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { topics } from "@/constans"
const Filter = () => {
  return (
    <div className="flex items-center gap-2">
          <div>
        <h4>Filter</h4>
    </div>
    <div>
        <Select>
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
    </div>
  
  )
}

export default Filter