import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { grpahCMSImageLoader } from '../util';
import { getSimilarPosts, getRecentPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div className="relative">
      <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-30 from-gray-700 via-gray-900 to-gray-900 w-full h-full"></div>
     <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-40 from-blue-900 via-blue-900 to-black w-full h-full"></div>
    <div className="shadow-lg rounded-lg p-8 pb-12 mb-8">
      
      <h3 className="text-xl mb-8 font-semibold border-b pb-4 text-white">{slug ? 'Related Posts' : 'Recent Posts'}</h3>
      {relatedPosts.map((post, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <Image
              loader={grpahCMSImageLoader}
              alt={post.title}
              height="60px"
              width="60px"
              unoptimized
              className="align-middle rounded-full"
              src={post.featuredImage.url}
            />
          </div>
          <div className="flex-grow ml-4 relative z-100">
            <p className="text-gray-400 font-xs font-semibold">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
            <Link href={`/post/${post.slug}`} key={index} className="z-100 relative"><p className="text-gray-300 cursor-pointer">{post.title}</p></Link>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default PostWidget;
