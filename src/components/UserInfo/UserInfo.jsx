import React from 'react';
import dayjs  from "dayjs";
import { BsLink45Deg, BsTwitter, BsBuilding } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import { useSelector } from "react-redux";
import styles from './UserInfo.module.css';

function UserInfo(props) {
  const { userData, userDataRequestStatus } = useSelector((state) => state.user);

  if(userDataRequestStatus.isPending) {
    return <h1>Loading...</h1>
  }

  if(userDataRequestStatus.isError) {
    return <h1>{userDataRequestStatus.errorMessage}</h1>
  }

  if (!userData) {
    return null;
  }

  const avatarUrl = userData?.avatar_url || 'Not available';
  const userDataBio = userData?.bio || 'Not available';
  const userDataLocation = userData?.location || 'Not available';
  const userDataBlog = userData?.blog || 'Not available';
  const userDataTwitterUsername = userData?.twitter_username || 'Not available';
  const userDataCompany = userData?.company || 'Not available';
  const createdAt = dayjs(userData?.created_at).format("DD MMM YYYY");

  return (
    <div className={styles.userInfo}>
      <div className={styles.userInfoHeader}>
        <img src={avatarUrl} alt="avatar"/>
        <div>
          <h5>{userData.name}</h5>
          <h6>{userData.login}</h6>
          <span>Joined {createdAt}</span>
        </div>
      </div>
      <p className={styles.userInfoText}>
        {userDataBio}
      </p>
      <div className={styles.userInfoStatistics}>
        <div>
          <h4>Repos</h4>
          <span>{userData.public_repos}</span>
        </div>
        <div>
          <h4>Followers</h4>
          <span>{userData.followers}</span>
        </div>
        <div>
          <h4>Following</h4>
          <span>{userData.following}</span>
        </div>
      </div>
      <ul className={styles.userInfoSocials}>
        <li>
          <MdLocationOn/>
          <a href="/#">{userDataLocation}</a>
        </li>
        <li>
          <BsLink45Deg/>
          <a href="/#">{userDataBlog}</a>
        </li>
        <li>
          <BsTwitter/>
          <a href="/#">{userDataTwitterUsername}</a>
        </li>
        <li>
          <BsBuilding/>
          <a href="/#">{userDataCompany}</a>
        </li>
      </ul>
    </div>
  );
}

export default UserInfo;