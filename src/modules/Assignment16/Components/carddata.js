import React, { useEffect, useState } from "react";
import Tabletop from "tabletop";
import { makeStyles } from "@material-ui/core/styles";
// import Header from "Header";
import "../index.css";
export default function App() {
  const [data, setData] = useState([]);
  const itemID = window.location.pathname.substring(
    window.location.pathname.lastIndexOf("/") + 1
  );
  console.log(itemID);
  const useStyles = makeStyles({
    GridList: {
      width: "90%",
      height: "100%",
    },
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
    },
  });
  const classes = useStyles();
  const imageClick = (iD) => {
    console.log(iD);
  };
  useEffect(() => {
    Tabletop.init({
      key: "1GQrF3I_qJPDY7Nx_5GJB9GfVQ4kFkt--5jw60eJBSnQ",
      simpleSheet: true,
    })
      .then((data) => setData(data))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <>
      <div>
        {/* <Header /> */}
        <h2>People & Society</h2>

        {data.map((item, i) => (
          <>
            <div className={"xyz"}>
              {item.id === itemID ? 
                <div>
                    <img
                      className={"image2"}
                      alt={"pic"}
                      src={item.image_url}
                    ></img>
                    <div className={"content"}>{item.content}</div>                  
               </div>
               : 
                <div className={"align"}>
                      <h3>RECOMMENDED</h3>
                      <img
                        className={"image"}
                        alt={"pic"}
                        src={item.image_url}
                      ></img>
                    <div className={"title"}>Title - {item.post_title}</div>
                  </div>
              }
            </div>
          </>
        ))}
      </div>
    </>
  );
}
