import nc from 'next-connect';
import { isAdmin, isAuth } from '../../../../utils/auth';
import Product from '../../../../models/Product';
import db from '../../../../utils/db';

const handler = nc();
handler.use(isAuth, isAdmin);

handler.get(async (req, res) => {
  await db.connect();
  const products = await Product.find({});
  await db.disconnect();
  res.send(products);
});

handler.post(async (req, res) => {
  await db.connect();
  const newProduct = new Product({
    name: 'sample name',
    slug: 'sample-slug-' + Math.random(),
    type: 'sample-type',
    description: 'product description short format',
    category: 'sample category',
    image: '/images/sample.jpg',
    style: 'style name',
    design: 'design name',
    price: 0,
    brand: 'brand name',
    reviews: [
      {
        user: '6107607c907918345cfabcfc',
        name: 'Shaimaa Elsayed',
        rating: 3,
        comment: 'user comment',
      },
    ],
    featuredImage: '/images/sample.jpg',
    isFeatured: 0,
    rating: 0,
    numReviews: 0,
    countInStock: 0,
    fullDescription: 'product description full details',
  });

  const product = await newProduct.save();
  await db.disconnect();
  res.send({ message: 'Product Created', product });
});

export default handler;
