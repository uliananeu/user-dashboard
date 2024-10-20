import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';
import { fetchUsers, User } from '../services/api';
import styles from './UserList.module.scss';

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [sortField, setSortField] = useState<'name' | 'email'>('name');

  useEffect(() => {
    const loadUsers = async () => {
      const usersData = await fetchUsers();
      setUsers(usersData);
      setFilteredUsers(usersData);
    };

    loadUsers();
  }, []);

  useEffect(() => {
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  const sortUsers = (field: 'name' | 'email') => {
    const sorted = [...filteredUsers].sort((a, b) => {
      const aField = a[field].toLowerCase();
      const bField = b[field].toLowerCase();
      return sortOrder === 'asc' ? aField.localeCompare(bField) : bField.localeCompare(aField);
    });
    setFilteredUsers(sorted);
    setSortField(field);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className={styles.userList}>
      <div className={styles.controls}>
        <input
          type="text"
          placeholder="Search by name or email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={() => sortUsers('name')}>Sort by Name</button>
        <button onClick={() => sortUsers('email')}>Sort by Email</button>
      </div>
      <div className={styles.cards}>
        {filteredUsers.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;