export async function GET() {

    await mongoose.connect(connectionToDb)
    const data = await Service.find()
    return NextResponse.json({result:data})
    const result = await Service.find()
    return NextResponse.json(result)
}