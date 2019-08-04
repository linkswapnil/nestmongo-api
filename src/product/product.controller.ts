import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { CreateProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService) {}

    @Post('/create')
    async createPost(@Res() res, @Body() createProductDTO: CreateProductDTO ) {
        const product = await this.productService.createProduct(createProductDTO);
        return  res.status(HttpStatus.OK).json({
            mensaje: 'Producto Creado',
            product,
        });
    }

    @Get('/getAll')
    async getProducts(@Res() res) {
        const products = await this.productService.getProducts();
        return res.status(HttpStatus.OK).json({
            mensaje: 'Productos',
            products,
        });
    }

    @Get('/get/:productID')
    async getProduct(@Res() res, @Param('productID') productID: string) {
        const product = await this.productService.getProduct(productID);
        if (!product) { throw new NotFoundException('El producto no existe'); }
        return res.status(HttpStatus.OK).json({
            mensaje: 'Producto solicitado',
            product,
        });
    }

    @Delete('/delete')
    async deleteProduct(@Res() res, @Query('productID') productID: string) {
        const deletedProduct = await this.productService.deleteProduct(productID);
        if (!deletedProduct) { throw new NotFoundException('El producto no se eliminó o no se encontró'); }
        return res.status(HttpStatus.OK).json({
            mensaje: 'Producto eliminado',
            deletedProduct,
        });
    }

    @Put('/update')
    async updateProduct(@Res() res, @Body() createProductDTO: CreateProductDTO, @Query('productID') productID: string) {
        const updatedProduct = await this.productService.updateProduct(productID, createProductDTO);
        if (!updatedProduct) { throw new NotFoundException('El producto no se actualizó o no se encontró'); }
        return res.status(HttpStatus.OK).json({
            mensaje: 'Producto actualizado',
            updatedProduct,
        });
    }
}
