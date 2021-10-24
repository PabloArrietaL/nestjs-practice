import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from '../products/products.module';

//Controllers
import { CustomersController } from './controllers/customers/customers.controller';
import { UsersController } from './controllers/users/users.controller';

//Services
import { CustomersService } from './services/customers/customers.service';
import { UsersService } from './services/users/users.service';

//Entities
import { Customer } from './entities/customer.entity';
import { User } from './entities/user.entity';
import { Order } from './entities/order.entity';

@Module({
  imports: [ProductsModule, TypeOrmModule.forFeature([Customer, User, Order])],
  controllers: [UsersController, CustomersController],
  providers: [UsersService, CustomersService],
})
export class UsersModule {}
