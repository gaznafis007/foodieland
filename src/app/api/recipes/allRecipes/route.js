import { recipes } from "@/data/data";
import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json(recipes)
}