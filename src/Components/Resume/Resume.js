import React from 'react';

const Resume = () => {
  return (
    <div>
      <Typewriter
    options={{
    strings: ['web developer', 'web designer', 'react developer'],
    autoStart: true,
    loop: true,
    }}
  />
    </div>
  );
};

export default Resume;