import React from 'react'
import Logo from './logo'
import { Button } from '@/components/ui/button'

const Footer = () => {
  return (
    <div className="flex bg-background dark:bg-[#1f1f1f] z-50 w-full p-6">
        <Logo />
        <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
            <Button variant="ghost" size="sm">Privacy Policy</Button>
            <Button variant="ghost" size="sm">Terms & Conditions</Button>
        </div>
    </div>
  )
}

export default Footer