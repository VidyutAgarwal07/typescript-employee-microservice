import mongoose from 'mongoose';
// import dbUrl from "../config/config"

async function connect() {
    console.log("Calling DB Service", process.env.local, process.env.prod)
    const dbConn = process.env.local || process.env.prod|| "";

    await mongoose.connect(dbConn)
        .then(() => console.log('Connected!'));
}

export { connect };