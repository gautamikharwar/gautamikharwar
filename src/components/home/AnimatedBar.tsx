"use client";

import { motion } from "framer-motion";

export default function AnimatedBar({ progress }: { progress: number }) {
  return (
    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-base bg-surface">
      <motion.div
        className="h-full rounded-base bg-foreground"
        initial={{ width: 0 }}
        whileInView={{ width: `${progress}%` }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      />
    </div>
  );
}
