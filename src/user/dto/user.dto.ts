import { ApiModelProperty} from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { Query } from "@nestjs/common";

export class CreateUserDTO {
    
    @ApiModelProperty({
        type: String
    })
    @IsNotEmpty()
    readonly firstName: string;

    @ApiModelProperty()
    readonly lastName: string;

    @ApiModelProperty()
    @IsEmail()
    readonly emailId: string;

    @ApiModelProperty()
    @IsNotEmpty()
    @MinLength(5)
    readonly password: string;

    @ApiModelProperty()
    readonly mobileNumber: string;
}

export class UpdateUserDTO {
    
    @ApiModelProperty()
    readonly isEmailVerified: boolean;

    @ApiModelProperty()
    readonly isMobileVerified: boolean;

    @ApiModelProperty()
    readonly isTermsAccepted: boolean;

    @ApiModelProperty()
    readonly aadharNumber: number;

    @ApiModelProperty()
    readonly isAadharVerified: boolean;

    @ApiModelProperty()
    readonly profilePictureURL: string;

    @ApiModelProperty()
    readonly description: string;

    // @ApiModelProperty()
    // readonly isDriver: boolean;

    // @ApiModelProperty()
    // readonly driverId: string;

    @ApiModelProperty()
    readonly isRegistered: boolean;
}