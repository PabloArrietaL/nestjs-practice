import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/modules/products/entities/product.entity';
import {
  CreateProductDto,
  UpdateProductDto,
} from 'src/modules/products/dtos/product.dto';

@Injectable()
export class ProductsService {
  private counter = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description 1',
      price: 120,
      stock: 10,
      image: '',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (!product) throw new NotFoundException(`Product #${id} not found`);
    return product;
  }

  create(payload: CreateProductDto) {
    const newProduct = {
      id: ++this.counter,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id);
    console.log(product);
    if (product) {
      const index = this.products.findIndex((item) => item.id === product.id);
      this.products[index] = {
        ...product,
        ...payload,
      };
      return this.products[index];
    }

    return null;
  }

  delete(id: number) {
    const product = this.findOne(id);
    const index = this.products.indexOf(product);
    this.products.splice(index, 1);
    return product;
  }
}
