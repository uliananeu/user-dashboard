import React from 'react';
import styles from './UserCard.module.scss';
import { User } from '../services/api';

interface UserCardProps {
    user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
    return (
      <div className={styles.userCard}>
        <h3 className={styles.userName}>{user.name}</h3>
        <p><span className={styles.label}>Email: </span><span className={styles.value}>{user.email}</span></p>
        <p><span className={styles.label}>Phone: </span><span className={styles.value}>{user.phone}</span></p>
        <p><span className={styles.label}>Website: </span><span className={styles.value}>{user.website}</span></p>
        <p>
          <span className={styles.label}>Address: </span>
          <span className={styles.value}>{user.address.street}, {user.address.city}, {user.address.zipcode}</span>
        </p>
      </div>
    );
  };
  
export default UserCard;