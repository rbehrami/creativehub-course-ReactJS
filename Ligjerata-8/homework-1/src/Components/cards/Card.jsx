import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ kategoria, image }) => {
  return (
    <Link
      to={`/kategorit/${kategoria.toLowerCase()}`}
      className="relative block w-full overflow-hidden rounded shadow-lg group">
      <img src={image} alt={kategoria} className="w-full h-full object-cover" />
      <div className="absolute bottom-4 left-4">
        <h3 className="text-white text-xl font-semibold group-hover:text-gray-200 transition duration-200">
          {kategoria}
        </h3>
      </div>
    </Link>
  );
};

export default Card;
