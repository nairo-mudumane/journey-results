import React from "react";
import { TypierProps } from "./@types";

export function Typier({ text, speed = 50 }: TypierProps) {
  const [displayText, setDisplayText] = React.useState("");
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else clearInterval(typingInterval);
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentIndex, text, speed]);

  return <span>{displayText}</span>;
}
