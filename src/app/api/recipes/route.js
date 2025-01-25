import { test } from "@/data/data"
import { NextResponse } from "next/server"

export async function GET(){
    return NextResponse.json(test)
}