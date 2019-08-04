import { Document } from 'mongoose';
export interface User extends Document {
    readonly firstName: string;
    readonly lastName: string;
    readonly emailId: string;
    readonly password: string;
    readonly mobileNumber: string;

    // readonly isEmailVerified: boolean;
    // readonly isMobileVerified: boolean;
    // readonly isTermsAccepted: boolean;
    // readonly aadharNumber: number;
    // readonly isAadharVerified: boolean;
    // readonly profilePictureURL: string;
    // readonly description: string;
    // readonly isDriver: boolean;
    // readonly driverId: string;
    // readonly isRegistered: boolean;
}
