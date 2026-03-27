import { useEffect, useState } from "react";
import { animate, useInView, motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

interface CountUpProps {
  from: number;
  to: number;
  duration?: number;
  delay?: number;
  format?: (value: number) => string;
  className?: string;
}

export function CountUp({
  from = 0,
  to,
  duration = 2,
  delay = 0,
  format = (v) => Math.round(v).toString(),
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => format(latest));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, {
        duration,
        delay,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [count, inView, to, duration, delay]);

  return <motion.span ref={ref} className={className}>{rounded}</motion.span>;
}
