/// <reference types="jquery" />

interface Furniture {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  };
}

export async function getFurnitures(): Promise<Furniture[]> {
  return $.ajax({
    url: "https://api.escuelajs.co/api/v1/products/?categoryId=3",
    type: "GET",
    dataType: "json",
  });
}
