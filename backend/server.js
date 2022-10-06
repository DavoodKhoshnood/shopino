import express from "express";
import data from "./data.js";

const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/api/products/slug/:slug", (req, res) => {
  const { slug } = req.params;
  const product = data.products.find((prod) => prod.slug === slug);
  if (product) {
    res.status(200).send(product);
  } else {
    res.status(404).send({ message: "Product not found!" });
  }
});

app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const product = data.products.find((prod) => prod._id == id);
  console.log(id, product);
  if (product) {
    res.status(200).send(product);
  } else {
    res.status(404).send({ message: "Product not found!" });
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is listening on port ${port}`));
