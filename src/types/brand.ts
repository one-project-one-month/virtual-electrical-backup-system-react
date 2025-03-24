export type Category = {
  _id: string,
  name: string
}

export type APIBrand = {
  _id: string,
  name: string,
  category: string
}

export type Brands = {
  _id: string;
  name: string;
  category: string | Category;
};
