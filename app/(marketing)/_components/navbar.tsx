"use client"

import { useScrollTop } from "@/hooks/use-scroll-top"
import { cn } from "@/lib/utils"
import Logo from "./logo"
import { ModeToggle } from "@/components/mode-toggle"
import { useConvexAuth } from "convex/react"
import { SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/spinner"
import Link from "next/link"

const Navbar = () => {
    const scrolled = useScrollTop()
    const { isAuthenticated, isLoading } = useConvexAuth()

  return (
    <div className={cn("sticky inset-x-0 top-0 z-50 mx-auto flex w-full items-center bg-background p-6 dark:bg-[#1f1f1f]", 
        scrolled && "border-b shadow-sm"
    )}>
        <Logo />
        <div className="flex w-full items-center justify-between gap-x-2 md:ml-auto md:justify-end">
            {isLoading && (<Spinner />)}
            {!isAuthenticated && !isLoading && (
              <>
                <SignInButton mode="modal">
                  <Button variant="ghost" size="sm">Log in</Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button size="sm">Get MindForge free</Button>
                </SignUpButton>
              </>
            )}
            {isAuthenticated && !isLoading && (
              <>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/documents">Enter MindForge</Link>
                </Button>
                <UserButton />
              </>
            )}
            <ModeToggle />
        </div>
    </div>
  )
}

export default Navbar