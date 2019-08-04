import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';
import { CreateUserDTO, UpdateUserDTO } from './dto/user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

    async getUsers(): Promise<User[]> {
        const users = await this.userModel.find();
        return users;
    }

    async createUser(createProductDto: CreateUserDTO): Promise<User> {
        const newUser = new this.userModel(createProductDto);
        return await newUser.save();
    }

    async getUserById(userId: string): Promise<User> {
        const user = this.userModel.findOne({_id: userId});
        return user;
    }

    async getUserByEmailId(emailId: string): Promise<User> {
        const user = this.userModel.findOne({emailId});
        return user;
    }

    async getUserByMobileNumber(mobileNumber: string): Promise<User> {
        const user = this.userModel.findOne({mobileNumber});
        return user;
    }


    async updateUser(userId: string, createProductDto: UpdateUserDTO): Promise<User> {
        const updatedUser = await this.userModel.findByIdAndUpdate(userId, createProductDto, { new: true });
        return updatedUser;
    }

    // async deleteProduct(productID: string): Promise<Product> {
    //     const deletedProduct = await this.productModel.findByIdAndDelete(productID);
    //     return deletedProduct;
    // }
}
