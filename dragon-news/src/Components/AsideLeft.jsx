import React, { Suspense } from "react";
import Categories from "./Categories";
const AsideLeft = () => {
  return (
    <div>
      <h1 className="mb-4">All Categories</h1>
      <Suspense fallback={<span>Loading...</span>}>
        <Categories></Categories>
      </Suspense>
    </div>
  );
};

export default AsideLeft;
