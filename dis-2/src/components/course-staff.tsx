import React from 'react';

type CourseStaffProps = {
  name: string;
  title: string;
  rating: number;
};

export default function CourseStaff({ name, title, rating }: CourseStaffProps) {
  return (
    <div
      style={{
        backgroundColor: '#e0f7fa',
        padding: '1rem',
        margin: '0.5rem 0',
        borderRadius: '8px',
      }}
    >
      <h2>{name}</h2>
      <p>{title}</p>
      <p>Rating: {rating} / 100</p>
    </div>
  );
}
