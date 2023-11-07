
import { NextResponse } from "next/server";

import dbConnect from "../../../../config/dbConnect";

import Case from "../../../../models/case";



export async function PUT(request, { params }) {
    const { id } = params;
    const { newTitle: title, newDescription: description } = await request.json();
    await dbConnect();
    await Case.findByIdAndUpdate(id, { title, description });
    return NextResponse.json({ message: "Topic updated" }, { status: 200 });
  }


  export async function GET(request, { params }) {
    const { id } = params;
    await dbConnect();
    const x = await Case.findOne({ _id: id });
    return NextResponse.json({ x }, { status: 200 });
  }