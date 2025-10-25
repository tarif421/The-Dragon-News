import React from "react";
import { Link } from "react-router";

const DetailsCard = ({ news }) => {
  console.log(news);

  return<>
        <div className="p-5 space-y-5">
          <img src={news.image_url} alt="" />
        <h2 className="text-2xl font-bold mb-4">{news.title}</h2>
        <h2>{news.details}</h2>

        <Link
          className="bg-secondary text-white p-2 rounded-xs btn"
          to={`/category/${news.category_id}`}
        >
          {" "}
          Back To Category
        </Link>
      </div>
  </>
  

};

export default DetailsCard;
