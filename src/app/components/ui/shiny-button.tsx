"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const animationProps = {
  initial: { "--x": "100%", scale: 0.8 } as any,
  animate: { "--x": "-100%", scale: 1 } as any,
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
};

type ShinyButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
  };

const ShinyButton = React.forwardRef<HTMLButtonElement, ShinyButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        {...(animationProps as any)}
        {...props}
        className={cn(
          "relative rounded-lg px-6 py-2 font-medium backdrop-blur-xl transition-shadow duration-300 ease-in-out hover:shadow",
          "dark:bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/10%)_0%,transparent_60%)]",
          "dark:hover:shadow-[0_0_20px_hsl(var(--primary)/10%)]",
          className
        )}
      >
        {/* TEXT */}
        <span
          className="relative block w-full h-full text-sm uppercase tracking-wide text-[rgba(0,0,0,0.65)] dark:text-[rgba(255,255,255,0.9)]"
          style={{
            WebkitMaskImage:
              "linear-gradient(-75deg,hsl(var(--primary)) calc(var(--x) + 20%), transparent 30%), hsl(var(--primary)) 100%",
            maskImage:
              "linear-gradient(-75deg,hsl(var(--primary)) calc(var(--x) + 20%), transparent 30%), hsl(var(--primary)) 100%",
          }}
        >
          {children}
        </span>

        {/* SHINE BORDER */}
        <span
          className="absolute inset-0 z-10 block rounded-[inherit] p-px"
          style={{
            background:
              "linear-gradient(-75deg,hsl(var(--primary)/10%) calc(var(--x)+20%), hsl(var(--primary)/50%) calc(var(--x)+25%), hsl(var(--primary)/10%) calc(var(--x)+100%))",
            WebkitMask:
              "linear-gradient(#000,#000) content-box, linear-gradient(#000,#000)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />
      </motion.button>
    );
  }
);

ShinyButton.displayName = "ShinyButton";

export default ShinyButton;