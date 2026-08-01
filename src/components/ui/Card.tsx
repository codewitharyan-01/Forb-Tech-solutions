import * as React from "react"
import { cn } from "@/lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, glass = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-[2rem] text-card-foreground transition-all duration-500",
          glass ? "glass-card" : "bg-card border border-border shadow-sm",
          "hover:shadow-lg hover:-translate-y-1 hover:border-primary/20",
          className
        )}
        {...props}
      />
    )
  }
)
Card.displayName = "Card"

export { Card }
