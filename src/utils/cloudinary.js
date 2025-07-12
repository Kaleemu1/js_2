import { v2 as cloudinary } from "cloudinary"
import { response } from "express";
import fs from "fs"


// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

//file uploading process
const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //upload on cloudinary
        const response = await cloudinary.uploader.upload
            (localFilePath, {
                resource_type: "auto"//read doc on cloudinary site for more methods/types
            })
        //file has been uploaded
        console.log("File is uploaded on Cloudinary", response.url)
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath)// remove the locally saved file as the upload operation failed
        return null
    }
}
export {uploadOnCloudinary}



