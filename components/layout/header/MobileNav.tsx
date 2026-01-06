"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import { MenuIcon } from "lucide-react"
import {  useState } from "react";
import { navLinks } from "@/constans";
const MobileNav = () => {
  const [open, setIsOpen] = useState(false);
  return (
    <div className="md:hidden flex items-center space-x-4">
        <Sheet open={open} onOpenChange={setIsOpen}>
  <SheetTrigger>
     <MenuIcon className="font-bold bg-none"/>
  </SheetTrigger>
  <SheetTitle className="hidden">Menu</SheetTitle>
  <SheetContent aria-describedby={undefined}>
    <div className="flex flex-col space-y-4 mt-8 p-8">
      {navLinks.map((link)=>(
        <Link
        key={link.name}
        href={link.href}
        onClick={()=>setIsOpen(false)}
        >
          {link.name}
        </Link>
      ))}
    </div>
  </SheetContent>
</Sheet>
    </div>
  
  )
}

export default MobileNav