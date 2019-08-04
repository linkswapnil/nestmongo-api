import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './interfaces/product.interface';
import { CreateProductDTO } from './dto/product.dto';

@Injectable()
export class ProductService {
    constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {}

    async getProducts(): Promise<Product[]> {
        const products = await this.productModel.find();
        return products;
    }

    async getProduct(productID: string): Promise<Product> {
        const product = this.productModel.findOne({name:'abc'});
        return product;
    }

    async createProduct(createProductDto: CreateProductDTO): Promise<Product> {
        const newProduct = new this.productModel(createProductDto);
        return await newProduct.save();
    }

    async updateProduct(productID: string, createProductDto: CreateProductDTO): Promise<Product> {
        const updatedProduct = await this.productModel.findByIdAndUpdate(productID, createProductDto, { new: true });
        return updatedProduct;
    }

    async deleteProduct(productID: string): Promise<Product> {
        const deletedProduct = await this.productModel.findByIdAndDelete(productID);
        return deletedProduct;
    }
}
