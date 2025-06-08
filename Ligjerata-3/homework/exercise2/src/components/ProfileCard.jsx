import React from 'react';

function ProfileCard({ name, age, bio }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Biography: {bio}</p>
    </div>
  );
}

export default ProfileCard;
