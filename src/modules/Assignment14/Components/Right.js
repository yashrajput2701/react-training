import { Button, makeStyles, Paper ,Modal ,Fade} from "@material-ui/core";
import {React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, resetProducts } from "../action";
import { Product } from "./Product";
import { codeGenerator } from "./codeGenerator";
import Card from "./Card";

const styles = makeStyles({
  right: {
    width: "80%",
  },
  paper: {
    padding: "20px",
    margin: "20px",
  },
  productCards: {
    display: "flex",
    flexWrap: "wrap",
  },

modal: {
  overflow: "auto",
},
  button: {
    textTransform: "none",
    fontWeight: "900",
    backgroundColor: "#177fe4",
    color: "#fff",
    fontSize: "16px",
    margin: "10px",
    "&:hover": {
      backgroundColor: "#2a2a2a",
    },
  },
  
});

const initialValues = {
  id: Math.floor(Math.random() * 10000),
  title: "",
  titlePoints: "",
  tag: "",
  tagPoints: "",
  link: "",
  linkPoints: "",
  imageLink: "",
};

export const Right = () => {
  const classes = styles();
  const dispatch = useDispatch();
  const { products, color } = useSelector((state) => state.productReducer);
  const [open, setOpen] = useState(false);
  const handleModal = () => {
    setOpen(!open);
  };
  return (
    <div className={classes.right}>
      <Paper elevation={3} className={classes.paper}>
        {products &&
          products.length > 0 &&
          products.map((product, index) => {
            return <Product key={index + 1} id={index} />;
          })}
        <Button
          style={{ backgroundColor: color }}
          className={classes.button}
          onClick={() => {
            dispatch(addProduct(initialValues));
          }}
        >
          {"Add Product"}
        </Button>
        <Button
          style={{ backgroundColor: color }}
          className={classes.button}
          onClick={() => {
            dispatch(resetProducts());
          }}
        >
          {"Reset Table"}
        </Button>
        <Button style={{ backgroundColor: color }} className={classes.button}
        onClick={handleModal}>
          {"Generate Code"}
        </Button>
        <Modal
          className={classes.modal}
          open={open}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <Fade in={open}>
            <codeGenerator handleModal={handleModal} />
          </Fade>
        </Modal>
        <div className={classes.productCards}>
          {products &&
            products.length > 0 &&
            products.map((product, index) => {
              return (
                <Card
                  key={index + 1}
                  id={index}
                  title={product.title}
                  titlePoints={product.titlePoints}
                  tag={product.tag}
                  tagPoints={product.tagPoints}
                  link={product.link}
                  linkPoints={product.linkPoints}
                />
              );
            })}
        </div>
      </Paper>
    </div>
  );
};
