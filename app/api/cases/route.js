
// import dbConnect from "../../config/dbConnect";
// import { NextResponse } from "next/server";
// import Case from ".../../../models/case";

import dbConnect from "../../../config/dbConnect";
import Case from "../../../models/case"
import {NextResponse} from "next/server"


export async function POST(request){
    const {title, description} = await request.json();
    await dbConnect();
    await Case.create({title, description});
    return NextResponse.json({message: "topic created"}, {status:201});
}

export async function GET() {
    await dbConnect();
    const cases = await Case.find();
    return NextResponse.json({cases});
}


export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id");
    await dbConnect();
    await Case.findByIdAndDelete(id);
    return NextResponse.json({message: "topic deleted"},
    {status: 200}
    )
}


