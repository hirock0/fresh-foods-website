import { NextRequest, NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinay/cloudinary";
import { ProductStr } from "@/lib/Schema/model";
import { DB_Connect } from "@/lib/DB_Connect/dbConnect";
export async function POST(request: NextRequest) {
  await DB_Connect();
  try {
    const reqBody = await request.json();
    const {
      productName,
      productPrice,
      productCategory,
      productSku,
      productTaq,
      productWeight,
      productQuality,
      productType,
      productBrand,
      productCollection,
      productImage,
      productImages,
      productDescriptions,
      productDiscount,
      productAvailability,
      productStock,
      // ----------
      companyName,
      companyAddress,
      companyContactNumber,
      companyWebsite,
      // -------------
      calories,
      protein,
      carbohydrates,
      fats,
      sugar,
      fiber,
      sodium,
    } = reqBody;

    const AllMapImages = await productImages.map((img: any) =>
      cloudinary.uploader.upload(img.toString(), {
        folder: "Fresh_Foods/products",
      })
    );

    const uploadImages = await Promise.all(AllMapImages);
    const OtherProjectImages: any = [];
    uploadImages?.forEach((item: any, index: any) => {
      const ArrayData = {
        productUrl: item?.secure_url,
        publicId: item?.public_id,
      };

      OtherProjectImages.push(ArrayData);
    });

    const uploadResponse = await cloudinary.uploader.upload(
      productImage.toString(),
      {
        folder: "Fresh_Foods/products",
      }
    );

    const nutritionalInfo = {
      calories: calories,
      protein: protein,
      carbohydrates: carbohydrates,
      fats: fats,
      sugar: sugar,
      fiber: fiber,
      sodium: sodium,
    };

    const manufacturerDetails = {
      companyName: companyName,
      companyAddress: companyAddress,
      companyContactNumber: companyContactNumber,
      companyWebsite: companyWebsite,
    };
    const projectImageData = {
      productUrl: uploadResponse?.secure_url,
      publicId: uploadResponse?.public_id,
    };

    const preUploadData = await new ProductStr({
      productName,
      productImage: projectImageData,
      productImages: OtherProjectImages,
      productPrice,
      productDiscount,
      productCategory,
      productSku,
      productTaq,
      productWeight,
      productStock,
      productType,
      productQuality,
      productDescriptions,
      productAvailability,
      productBrand,
      productCollection,
      nutritionalInfo: nutritionalInfo,
      manufacturerDetails: manufacturerDetails,
      likes: [],
      comments: [],
      rating: "",
      recentField: new Date().toLocaleDateString(),
    });
    await preUploadData.save();
    return NextResponse.json({ message: "Data is uploaded", success: true });
  } catch (error: any) {
    return NextResponse.json({
      message: "Data is not uploaded",
      success: false,
    });
  }
}

export async function GET(){
  try{
    const Products =  await ProductStr.find().sort({createdAt:-1})
    return NextResponse.json({message:"Data is got",success:true,Products})
  }catch(error:any){
    return NextResponse.json({message:"data is not found",success:false})
  }
}