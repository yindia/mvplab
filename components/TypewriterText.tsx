"use client";

import { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  className?: string;
  cursor?: boolean;
}

export default function TypewriterText({
  text,
  speed = 50,
  className = "",
  cursor = true,
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, isInView } = useScrollAnimation();

  useEffect(() => {
    if (!isInView) return;

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed, isInView]);

  return (
    <span ref={ref as any} className={className}>
      {displayedText}
      {cursor && (
        <span className={`inline-block w-0.5 h-6 bg-current ml-1 ${
          currentIndex < text.length ? 'animate-pulse' : 'opacity-0'
        }`} />
      )}
    </span>
  );
}