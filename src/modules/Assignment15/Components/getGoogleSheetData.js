import React, { useEffect, useState } from "react";
import Tabletop from "tabletop";
import { GridList } from "@material-ui/core";
import GridListTile from "@material-ui/core/GridListTile";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
// import CardData from "./carddata";

export default function App() {
  const [data, setData] = useState([]);
  const history = useHistory();
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
    history.push("/CardData/"+iD);
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
      <div className={classes.root}>
        <h2>People & Society</h2>
        <GridList cellHeight={160} cols={3} className={classes.GridList}>
          {data.map((item, i) => (
            <>
              <GridListTile className={"grid"}>
                <div>
                  <img
                    className={"image"}
                    alt={"pic"}
                    src={item.image_url}
                    onClick={() => imageClick(item.id)}
                  ></img>
                </div>
                <div className={"title"}>Title - {item.post_title}</div>
                <div>{item.categories}</div>
                <div>{item.publishedby}</div>
                <div>{item.views}views</div>
              </GridListTile>
            </>
          ))}
        </GridList>
      </div>
    </>
  );
}
