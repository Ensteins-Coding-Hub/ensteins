import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

export async function GET() {
  try {
    const result = await cloudinary.api.resources({
      type: "upload",
      max_results: 100,
    });

    const images = result.resources.map((img) => ({
      id: img.public_id,
      url: img.secure_url,
      display_name: img.display_name
    }));

    return NextResponse.json(images);
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
