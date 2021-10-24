import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

import { Product } from 'src/modules/products/entities/product.entity';
import { User } from './user.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  date: Date;
  user: User;
  products: Product[];
}
