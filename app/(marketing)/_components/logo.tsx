import Image from "next/image"
import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"

const font = Poppins({
    subsets: ["latin"],
    weight: ["400", "600"]
});

const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
        <Image src="/logo.svg" className="dark:hidden" width="40" height="40" alt="logo-dark" />
        <Image src="/logo-dark.svg" className="hidden dark:block" width="40" height="40" alt="logo-dark" />
        <p className={cn("font-semibold", font.className)}>MindForge</p>
    </div>
  )
}

export default Logo