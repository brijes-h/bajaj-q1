import React from 'react';
import List from './List';

function Card({ data }: any) {
  return (
    <div className="w-80 h-96 bg-green-300 m-4 rounded-lg p-8 text-black">
      <div className="h-24 flex items-center">
        <div className="w-20 h-20 rounded-full bg-white"></div>
        <div className="ml-4 flex flex-col text-left">
          <div className="text-black">{data.name}</div>
          <div className="text-gray-700">{data.designation}</div>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap">
        {data.skills.map((skill: string) => {
          return <List skill={skill} key={skill} />;
        })}
      </div>
    </div>
  );
}

export default Card;
