import styles from "./ProfileCard.module.css";

const ProfileCard = ({ params }) => {
  console.log("params Profile card", params);

  const {
    name,
    bio,
    email,
    avatarUrl,
    // avatarUrl = "https://placehold.co/400x400", for line 31
  } = params;

  return (
    <div className={styles.profileCard}>
      <div className={styles.avatarContainer}>
        {/* {avatarUrl ? (
          <img src={avatarUrl} alt={name} className={styles.avatar} />
        ) : (
          <img
            src="https://placehold.co/400x400"
            alt="not found"
            // className={styles.avatar}
          />
        )} */}
        <img
          src={avatarUrl ? avatarUrl : "https://placehold.co/400x400"}
          alt={name}
          className={styles.avatar}
        />
        {/* <img src={avatarUrl} alt={name} className={styles.avatar} /> */}
      </div>
      <div className={styles.cardBody}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.bio}>{bio}</p>
        <a href={`mailto:${email}`} className={styles.email}>
          {email}
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
