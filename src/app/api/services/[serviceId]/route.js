import mongoose from "mongoose";
import { NextResponse } from "next/server";


export const GET = async (req, res) => {
    await connectionToDb()
    const id = req.url.split("/services/")[1]
    console.log("hello");
    console.log(id);
    const ObjectId = new mongoose.Types.ObjectId(id)
    const result = await Service.findOne({_id: ObjectId})
    console.log("Result", result);
    return NextResponse.json(result)
}