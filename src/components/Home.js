import React from "react";

import EditableMenu from "./EditableMenu/EditableMenu";

const Home = () => {

  return (
    <div className="mx-auto sm:flex gap-2 bg-gray-800 flex-wrap justify-center h-full">
      <EditableMenu/>
    </div>
  );
};

export default Home;
