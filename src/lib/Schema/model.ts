import mongoose from "mongoose";

const FoodProductSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: false,
    trim: true,
  },

  productImage: {
    type: Object,
    required: false,
  },

  productImages: {
    type: Array,
    required: false,
  },

  productPrice: {
    type: String,
    required: false,
  },

  productDiscount: {
    type: String,
    required: false,
  },
  productCategory: {
    type: String,
    required: false,
  },
  productSku: {
    type: String,
    required: false,
  },
  productTaq: {
    type: String,
    required: false,
  },
  productWeight: {
    type: String,
    required: false,
  },
  productStock: {
    type: String,
    required: false,
  },
  productType: {
    type: String,
    required: false,
  },

  productQuality: {
    type: String,
    required: false,
  },
  productDescriptions: {
    type: String,
    required: false,
  },
  productAvailability: {
    type: String,
    required: false,
  },

  productBrand: {
    type: String,
    required: false,
  },
  productCollection: {
    type: String,
    required: false,
  },
  nutritionalInfo: {
    type: Object,
    required: false,
  },
  manufacturerDetails: {
    type: Object,
    required: false,
  },
  recentField: {
    type: String,
    required: true,
  },
  expiryDate: {
    type: Date,
    required: false,
  },
  isVegetarian: {
    type: Boolean,
    required: false,
    default: false,
  },
  isVegan: {
    type: Boolean,
    required: false,
    default: false,
  },

  likes: { type: Array, required: false },
  comments: { type: Array, required: false },
  rating: { type: String, required: false },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const ProductStr =
  mongoose.models.products || mongoose.model("products", FoodProductSchema);
