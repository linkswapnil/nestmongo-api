import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { CreateUserDTO, UpdateUserDTO } from './dto/user.dto';
import { UserService } from './user.service';
import { ApiResponse, ApiImplicitQuery } from '@nestjs/swagger';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) {}

    @Post('/create')
    @ApiResponse({ status: 201, description: 'Successful Login' })
    @ApiResponse({ status: 400, description: 'Bad Request' })
    async createPost(@Res() res, @Body() CreateUserDTO: CreateUserDTO ) {
        const user = await this.userService.createUser(CreateUserDTO);
        return  res.status(HttpStatus.CREATED).json({
            id: user._id
        });
    }

    @Get('/getAll')
    @ApiResponse({ status: 200, description: 'User found successfully' })
    @ApiResponse({ status: 204, description: 'User not found' })
    async getUsers(@Res() res) {
        const users = await this.userService.getUsers();
        if (!users) { return res.status(HttpStatus.NO_CONTENT).json(); }
        return res.status(HttpStatus.OK).json(users);
    }

    @Get('/get/:userID')
    @ApiResponse({ status: 200, description: 'User found successfully' })
    @ApiResponse({ status: 204, description: 'User not found' })
    async getProduct(@Res() res, @Param('userID') userID: string) {
        const user = await this.userService.getUserById(userID);
        if (!user) { return res.status(HttpStatus.NO_CONTENT).json(); }
        return res.status(HttpStatus.OK).json(user);
    }

    @Get('/get')
    @ApiImplicitQuery({ name: 'mobileNumber', required: false, type: String })
    @ApiImplicitQuery({ name: 'emailId', required: false, type: String })
    @ApiResponse({ status: 200, description: 'User found successfully' })
    @ApiResponse({ status: 204, description: 'User not found' })
    async getUser(@Res() res, @Query('mobileNumber') mobileNumber: string, @Query('emailId') emailId: string) {
        let user;
        if(mobileNumber){
            user = await this.userService.getUserByMobileNumber(mobileNumber);
        }
        else if(emailId){
            user = await this.userService.getUserByEmailId(emailId);
        }
        if (!user) { return res.status(HttpStatus.NO_CONTENT).json(); }
        return res.status(HttpStatus.OK).json(user);
    }

    @Put('/update/:userId')
    @ApiResponse({ status: 200, description: 'User updated successfully' })
    @ApiResponse({ status: 204, description: 'User not found' })
    async updateUser(@Res() res, @Body() updateUserDTO: UpdateUserDTO, @Param('userId') userId: string) {
        const updatedUser = await this.userService.updateUser(userId, updateUserDTO);
        if (!updatedUser) { return res.status(HttpStatus.NO_CONTENT).json(); }
        return res.status(HttpStatus.OK).json(updatedUser);
    }

    // @Delete('/delete')
    // async deleteProduct(@Res() res, @Query('productID') productID: string) {
    //     const deletedProduct = await this.productService.deleteProduct(productID);
    //     if (!deletedProduct) { throw new NotFoundException('El producto no se eliminó o no se encontró'); }
    //     return res.status(HttpStatus.OK).json({
    //         mensaje: 'Producto eliminado',
    //         deletedProduct,
    //     });
    // }

}
