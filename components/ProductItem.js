import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@material-ui/core';
import React from 'react';
import NextLink from 'next/link';
import Rating from '@material-ui/lab/Rating';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';

export default function ProductItem({ product, addToCartHandler }) {
  return (
    <Card>
      <NextLink href={`/product/${product.slug}`} passHref>
        <CardActionArea>
          <CardMedia
            component='img'
            image={product.image}
            title={product.name}
          ></CardMedia>
          <CardContent>
            <Typography>{product.name}</Typography>
            <Rating value={product.rating} readOnly></Rating>
          </CardContent>
        </CardActionArea>
      </NextLink>
      <CardActions>
        <Typography>EGP {product.price}</Typography>
        <IconButton
          size='small'
          color='primary'
          onClick={() => addToCartHandler(product)}
        >
          <AddShoppingCartOutlinedIcon></AddShoppingCartOutlinedIcon>
        </IconButton>

        {/* <Button
          size='small'
          color='primary'
          onClick={() => addToCartHandler(product)}
        >
          Add to cart
        </Button> */}
      </CardActions>
    </Card>
  );
}
