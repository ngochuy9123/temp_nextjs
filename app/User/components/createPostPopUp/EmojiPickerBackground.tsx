"use client";
import React, { useState } from "react";

interface EmojiPickerBackgroundProps {
  textProps: {
    text: string;
    setText: (text: string) => void;
    texRef: React.RefObject<HTMLTextAreaElement>;
  };
}

const EmojiPickerBackground = ({
  text,
  setText,
  textRef,
}: EmojiPickerBackgroundProps) => {
  const [picker, setPicker] = useState(false);
  const [cursorPosition, setCursorPosition] = useState<number | undefined>();

  return <div></div>;
};

export default EmojiPickerBackground;
