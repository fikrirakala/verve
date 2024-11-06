import * as React from "react";

import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default:
          "text-muted-foreground gap-2 bg-white/[0.02] px-3 py-1 text-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),_inset_0_2px_12px_rgba(255,255,255,0.04)] backdrop-blur-xl",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, children, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      <img src="/icons/badge.svg" alt="" className="size-5" />
      {children}
    </div>
  );
}

export { Badge, badgeVariants };
