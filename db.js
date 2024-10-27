import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI

const dbConnect = async () => {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log(`[database]: connected to db`)
  } catch (err) {
    console.warn(`[database error]: ${err}`)
  }
}

export { dbConnect, mongoose }
