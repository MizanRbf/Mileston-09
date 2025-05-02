import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/data.json/categories.json").then((res) =>
  res.json()
);

const Categories = () => {
  const categoryData = use(categoryPromise);
  return (
    <div>
      {categoryData.map((singleCategory) => (
        <NavLink
          className="grid grid-cols-1 btn mb-3 border-none bg-white hover:bg-base-200"
          key={singleCategory.id}
          to={`/category/${singleCategory.id}`}
        >
          {singleCategory.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
