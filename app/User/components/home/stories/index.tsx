"use client";
import { useEffect, useState } from "react";
import { ArrowRight, Plus } from "@/public/images/svg";
import styles from "@/app/User/styles/stories.module.scss";
import Story from "./Story";
import { stories } from "@/app/User/data/home";
import React from "react";
import Image from "next/image";

const Stories = () => {
  const [max, setMax] = useState(stories.length);

  useEffect(() => {
    const updateMax = () => {
      if (window.innerWidth <= 1030) {
        setMax(5);
      } else if (window.innerWidth <= 1175) {
        setMax(4);
      } else {
        setMax(stories.length);
      }
    };

    updateMax(); // Check on mount
    window.addEventListener("resize", updateMax); // Add resize listener
    return () => window.removeEventListener("resize", updateMax); // Cleanup listener
  }, []);

  return (
    <div className={styles.stories}>
      <div className={styles.create_story_card}>
        <Image
          src="/images/images/default_pic.png"
          alt="Default Profile"
          className={styles.create_story_img}
          width={100}
          height={100}
        />
        <div className={styles.plus_story}>
          <Plus color="#fff" />
        </div>
        <div className={styles.story_create_text}>Create Story</div>
      </div>
      {stories.slice(0, max).map((story, i) => (
        <Story
          key={i}
          image={story.image}
          profile_picture={story.profile_picture}
          profile_name={story.profile_name}
        />
      ))}
      <div className={styles.white_circle}>
        <ArrowRight color="#65676b" />
      </div>
    </div>
  );
};

export default Stories;
