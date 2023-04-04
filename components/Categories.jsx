import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="relative">
      <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-30 from-gray-700 via-gray-900 to-gray-900 w-full h-full"></div>
     <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-40 from-blue-900 via-blue-900 to-black w-full h-full"></div>
    <div className=" shadow-lg rounded-lg p-8 pb-12 mb-8 text-white">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <span className={`cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0 z-100 relative' : 'border-b z-100 relative border-gray-500'} pb-3 mb-3`}>{category.name}</span>
        </Link>
      ))}
    </div></div>
  );
};

export default Categories;
