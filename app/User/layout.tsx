import UserHeader from "./components/header/header";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import LeftHome from "./components/home/left";
import RightHome from "./components/home/right";
import Stories from "./components/home/stories";
import styles from "@/app/User/styles/homeLayout.module.scss";
import CreatePost from "./components/createPost";
import CreatePostPopUp from "./components/createPostPopUp";
config.autoAddCss = false;

const layout = () => {
  const user = {
    name: "Nguyen Huy",
    profilePicture: "/images/images/default_profile.png", // or a real URL
  };
  return (
    <>
      <CreatePostPopUp user={user}></CreatePostPopUp>
      <div className={styles.home}>
        <UserHeader user={user}></UserHeader>
        <LeftHome user={user} />
        <div className={styles.home_middle}>
          <Stories />
          <CreatePost user={user} />
        </div>
        <RightHome user={user} />
      </div>
    </>
  );
};

export default layout;
