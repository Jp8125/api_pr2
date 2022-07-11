import axios from "axios";
import React, { useState } from "react";
import Display from "./display";
import Search from "./search";
const configObj = {
  client_id: "Jp8125",
  client_secret: "",
  repos_count: 5,
  repos_sort: "created: asc",
  token: "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",
};

export const User = () => {
  const { userData, setUserData } = useState({});
  const fetchUserDetails = async (seachkey) => {
    const { data } = await axios.get(
      "https://api.github.com/users/${searchkey?client_id={configobj.client_id}&client_secret={configobj.client_secret}}",
      { headers: { Authorization: configObj.token } }
    );
    setUserData(data);
  };
  return (
    <div>
      <Search fetchUserDetails={fetchUserDetails}/>
      <Display userData={userData}/>
    </div>
  );
};


