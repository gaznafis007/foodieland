import { recipes } from "@/data/data";
import { NextResponse } from "next/server";

export function GET(){
    const featuredRecipes = recipes.filter(recipe => recipe?.featured === true);
    return NextResponse.json(featuredRecipes);
}