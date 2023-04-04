import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="w-full inline-block py-2 relative">
        <div className="md:float-left block">
          <Link href="/">

            <img className="cursor-pointer w-auto h-36"
          src="/title.png"

          alt="The Sports Keg"
        ></img>
          </Link>
        </div>
        <div className="absolute flex flex-row justify-end w-auto right-24 bottom-0">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer text-lg">{category.name}</span></Link>
          ))}
          <Link href={`/picks`}><span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer text-lg">Picks</span></Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
