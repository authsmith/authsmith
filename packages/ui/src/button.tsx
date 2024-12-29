import { Slot } from "@radix-ui/react-slot";
import { forwardRef } from "react";
import { cva, VariantProps } from "@authsmith/cva";
import { cn } from "./cn.js";

const buttonVariants = cva({
  base: "inline-flex items-center justify-center whitespace-nowrap rounded-[1.5px] text-xs font-mono font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 duration-150 ease-linear",
  variants: {
    variant: {
      default: "bg-accent text-light hover:bg-accent/90",

      // outline:
      //   "bg-none border border-default text-default hover:text-inverted hover:bg-inverted",
      secondary: "bg-light text-accent hover:bg-light/85",
      // warn: "bg-warn text-warn hover:bg-warn/90",
      // inverted: "bg-inverted text-inverted hover:bg-inverted/90",
      // "inverted-outline":
      //   "border border-inverted bg-none text-inverted hover:bg-default hover:text-default",
      // void: "bg-none text-default",
      // link: "bg-none text-default underline-offset-4 hover:underline",
      // "gradient-outline": "gradient-outline",
    },
    size: {
      default: "h-9 px-4 py-1",
      sm: "h-9 px-4",
      lg: "h-10 w-32 px-8",
      icon: "h-10 w-10",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({
            variant,
            size,
            className,
          }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button };
