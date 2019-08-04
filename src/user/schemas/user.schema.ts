import { Schema } from 'mongoose';


export const UserSchema = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  emailId: {
    type: String,
    required: true,
    unique: true
  },
  isEmailVerified: {
    type: Boolean,
    required: false,
    default: false
  },
  password: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: String,
    required: true,
    unique: true
  },
  isMobileVerified: {
    type: Boolean,
    required: false,
    default: false
  },
  isTermsAccepted: {
    type: Boolean,
    required: false,
    default: false
  },
  aadharNumber: {
    type: String,
    required: false,
    unique: true  
  },
  isAadharVerified: {
    type: Boolean,
    required: false,
    default: false
  },
  profilePictureURL: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false,
    default: 'Awesome user'
  },
  isDriver: {
    type: Boolean,
    required: false,
    default: false
  },
  driverId: {
    type: Number,
    required: false
  },
  isRegistered: {
    type: Boolean,
    required: false,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  modifiedAt: {
    type: Date
  }
});

export const ProductSchema = new Schema({
  name: {type: String, required: true},
  description: String,
  imageUrl: String,
  price: Number,
  createdAt: {
      type: Date,
      default: Date.now,
  },
});
