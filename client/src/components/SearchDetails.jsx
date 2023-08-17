import React, { useEffect, useState } from "react";
import "../styles/searchdetails.css";
import { AiFillPlayCircle } from "react-icons/ai";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SearchDetails = ({ data, search, design }) => {
  const { meanings, license, sourceUrls, phonetics, word, phonetic } = data[0];
  const { color, setColor } = design;
  const [userpref, setUserpref] = useState("noun");
  const [finalData, setfinalData] = useState([]);

  useEffect(() => {
    const filtered = meanings.filter((item) => item.partOfSpeech === userpref);
    setTimeout(() => {
      setfinalData(filtered);
    }, 2000);
  }, [search]);

  const handleUserpref = (e) => {
    setUserpref(e);
    // filter the meanings array havibg part of speech as in userpref
    const filtered = meanings.filter((item) => item.partOfSpeech === e);
    setTimeout(() => {
      setfinalData(filtered);
    }, 2000);
    setColor(!color);
  };
  console.log(color);

  return (
    <>
      <div className="details_con">
        <div className="details_icon_header">
          <div className="icon">{<AiFillPlayCircle size={"25"} />}</div>
          <span className="structure">{phonetic}</span>
        </div>
        <div className="middle_section">
          <button onClick={() => handleUserpref("noun")}>noun</button>
          <button onClick={() => handleUserpref("verb")}>verb</button>
        </div>
        <div className="details">
          {finalData.map((item) => {
            const { definitions } = item;
            return (
              <>
                {definitions.map((e, key) => {
                  return (
                    <>
                      <li>
                        <span>{key + 1}.&nbsp; </span>
                        {e.definition}
                      </li>
                    </>
                  );
                })}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SearchDetails;
