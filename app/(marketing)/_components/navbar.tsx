"use client"
import { useScrollTop } from "@/hooks/use-scroll-top"
import { cn } from "@/lib/utils"
import Logo from "./logo"
import { ModeToggle } from "@/components/mode-toggle"

const Navbar = () => {
    const scrolled = useScrollTop()

  return (
    <div className={cn("sticky inset-x-0 top-0 z-50 mx-auto flex w-full items-center bg-background p-6 dark:bg-[#1f1f1f]", 
        scrolled && "border-b shadow-sm"
    )}>
        <Logo />
        <div className="flex w-full items-center justify-between gap-x-2 md:ml-auto md:justify-end">
            <ModeToggle />
        </div>
    </div>
  )
}

export default Navbar