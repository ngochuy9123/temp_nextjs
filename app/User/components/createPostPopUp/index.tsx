"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "@/app/User/components/createPostPopUp/style.module.scss";
import Image from "next/image";
import dynamic from "next/dynamic";

interface CreatePostProps {
  user: {
    name: string;
    profilePicture: string;
  };
}

const CreatePostPopUp = ({ user }: CreatePostProps) => {
  const [text, setText] = useState("");
  const [showPrev, setShowPrev] = useState(false);
  const [picker, setPicker] = useState(false);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const [cursorPosition, setCursorPosition] = useState();
  useEffect(() => {
    textRef.current.selectionEnd = cursorPosition || 0;
  }, [cursorPosition]);
  const handleEmoji = (e, { emoji }) => {
    const ref = textRef.current;
    ref.focus();
    const start = text.substring(0, ref.selectionStart);
    const end = text.substring(ref.selectionStart);
    const newText = start + emoji + end;
    setText(newText);
    setCursorPosition(start.length + emoji.length);
  };
  return (
    <div className={` `}>
      <div className={`${styles.postBox}`}>
        <div className={styles.box_header}>
          <div className="small_circle">
            <i className="exit_icon"></i>
          </div>
          <span>Create Post</span>
        </div>
        <div className={styles.box_profile}>
          <Image
            src={user.profilePicture}
            alt=""
            width={38}
            height={38}
            className={styles.box_profile_img}
          />
          <div className={styles.box_col}>
            <div className={styles.box_profile_name}>{user.name}</div>
            <div className={styles.box_privacy}>
              <Image
                src={"/images/icons/public.png"}
                alt=""
                width={20}
                height={20}
              />
              <span>Public</span>
              <i className="arrowDown_icon"></i>
            </div>
          </div>
        </div>
        {!showPrev && (
          <>
            <div className={styles.flex_center}>
              <textarea
                ref={textRef}
                maxLength={100}
                value={text}
                placeholder={`What's on your mind, ${user.name}`}
                className={styles.post_input}
                onChange={(e) => setText(e.target.value)}
              ></textarea>
            </div>
          </>
        )}
        <div className={styles.post_emojis_wrap}>
          {picker && (
            <div className={` ${styles.comment_emoji_picker} ${styles.rlmove}`}>
              <Picker onEmojiClick={handleEmoji} />
            </div>
          )}
          <Image
            src={"/images/icons/colorful.png"}
            alt=""
            width={39}
            height={39}
          />
          <i
            className="emoji_icon_large"
            onClick={() => {
              setPicker((prev) => !prev);
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default CreatePostPopUp;
