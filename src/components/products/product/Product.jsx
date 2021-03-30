import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  CardActions,
} from "@material-ui/core";

import { AddShoppingCart } from "@material-ui/icons";

import useStyles from "./styles";

function Product({ product, onAddToCart }) {
  const classes = useStyles();
  console.log(product);
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.media.source}
        title={product.name}
      />
      <div className={classes.cardContent}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">
            {product.price.formatted_with_symbol}
          </Typography>
          <Typography
            dangerouslySetInnerHTML={{ __html: product.description }}
            variant="body2"
          />
        </CardContent>
        <CardActions disableSpacing className={classes.cardAction}>
          <IconButton
            aria-label="Add to Cart"
            onClick={() => onAddToCart(product.id, 1)}
          >
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </div>
    </Card>
  );
}

export default Product;
