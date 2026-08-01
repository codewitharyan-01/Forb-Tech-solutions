import * as React from "react"

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string
  className?: string
  containerClassName?: string
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className = "", containerClassName = "", id, children, ...props }, ref) => {
    return (
      <section
        id={id}
        ref={ref}
        className={`py-16 md:py-24 lg:py-32 ${className}`}
        {...props}
      >
        <div className={`container mx-auto px-4 md:px-6 ${containerClassName}`}>
          {children}
        </div>
      </section>
    )
  }
)
Section.displayName = "Section"

export { Section }
