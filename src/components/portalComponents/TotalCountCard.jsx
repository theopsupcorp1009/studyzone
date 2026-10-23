import React from 'react';
import { RxAvatar } from "react-icons/rx";

const TotalCountCard = ({count, text}) => {
    return (
        <div className="flex items-center justify-start gap-3 bg-blue-100 p-5 rounded-xl border border-gray-300">
          <RxAvatar className="text-5xl" />
          <div>
            <h2 className="text-xl font-bold">{count}</h2>
            <p className="text-[12px] text-gray-500">{text}</p>
          </div>
        </div>
    );
};

export default TotalCountCard;