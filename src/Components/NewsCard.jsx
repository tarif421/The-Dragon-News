import { FaEye, FaStar } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { BiBookmark } from "react-icons/bi";

const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    tags,
  } = news;

  return (
    <div className="card bg-base-100 shadow-md  rounded-2xl overflow-hidden">
      {/* Author & Header */}
      <div className="flex  bg-base-200 items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold">{author.name}</h2>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toDateString()}
            </p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-600">
          <BiBookmark className="text-xl cursor-pointer" />
          <IoShareSocialOutline className="text-xl cursor-pointer" />
        </div>
      </div>

      {/* Thumbnail */}
      <figure>
        <img src={thumbnail_url} alt={title} className="w-full h-60 object-cover" />
      </figure>

      {/* Content */}
      <div className="card-body">
        <h2 className="card-title text-lg font-bold">{title}</h2>
        <p className="text-sm text-gray-600">
          {details.slice(0, 150)}...
          <span className="text-primary font-semibold cursor-pointer">
            Read More
          </span>
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="badge badge-outline badge-sm capitalize text-gray-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4 border-t pt-3">
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-500" />
            <span className="font-medium">{rating.number}</span>
            <span className="text-xs text-gray-500 uppercase">
              {rating.badge}
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
