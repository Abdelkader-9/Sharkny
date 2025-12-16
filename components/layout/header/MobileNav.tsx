"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import { navLinks } from "./Navbar"
import { Button } from "@/components/ui/button"
import { MenuIcon } from "lucide-react"
import { useState } from "react"

const MobileNav = () => {
  const [open, setIsOpen] = useState(false);
  return (
    <div className="md:hidden flex items-center space-x-4">
        <Sheet open={open} onOpenChange={setIsOpen}>
  <SheetTrigger>
    <Button>
      <MenuIcon className="font-bold bg-none"/>
    </Button>
  </SheetTrigger>
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