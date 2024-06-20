import {v2 as cloudinary} from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})

const uploadOnCloudinary = async (localPath) => {
    try {

        if (!localPath) {
            throw new Error("Couldn't find localpathof food image!!!")
        }

        const resource = await cloudinary.uploader.upload(localPath,{
            resource_type:"auto"
        })

        fs.unlinkSync(localPath);
        return resource
    } catch (error) {
        fs.unlinkSync(localPath)
        throw new Error(error.message || "Error occured while uploading on cloudinary")
    }
}

export default uploadOnCloudinary