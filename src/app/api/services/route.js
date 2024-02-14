import { connectionToDb } from "@/lib/db"
import { Service } from "@/lib/model/service"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export async function GET() {

    await mongoose.connect(connectionToDb)
    const services = await Service.find()
    return NextResponse.json(services)
}