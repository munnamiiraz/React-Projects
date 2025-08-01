import React, { useEffect, useState } from 'react';

function Github() {
  const [data, setData] = useState({}); 

  useEffect(() => {
    fetch('https://api.github.com/users/munnamiiraz')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className='text-center m-5 flex justify-between px-[50px] text-xl font-semibold p-4 bg-gray-200 text-black'>
      <img  className = "  h-[100px] w-auto rounded-full" src={data.avatar_url} alt="image" />
      Github Followers: {data.followers}
    </div>
  );
}

export default Github;
