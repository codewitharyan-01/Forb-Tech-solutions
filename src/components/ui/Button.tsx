import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "default" | "secondary" | "outline" | "ghost" | "glass"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // Base classes for iOS styling
    let baseClass = "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 "
    
    // Variants
    if (variant === "default") baseClass += "bg-primary text-white hover:bg-primary/90 ios-shadow hover:-translate-y-0.5 "
    if (variant === "secondary") baseClass += "bg-muted text-foreground hover:bg-muted/80 "
    if (variant === "outline") baseClass += "border border-border bg-transparent hover:bg-muted "
    if (variant === "ghost") baseClass += "hover:bg-muted hover:text-foreground "
    if (variant === "glass") baseClass += "glass hover:bg-white/20 dark:hover:bg-black/20 hover:scale-105 "
    
    // Sizes
    if (size === "default") baseClass += "h-11 px-6 py-2 "
    if (size === "sm") baseClass += "h-9 px-4 "
    if (size === "lg") baseClass += "h-14 px-8 text-base "
    if (size === "icon") baseClass += "h-11 w-11 "

    return (
      <Comp
        className={cn(baseClass, className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
