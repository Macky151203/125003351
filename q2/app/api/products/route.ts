import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){
  const data=await fetch('http://localhost:3000/api/categories/Laptop/products/100/3')
  const alldata=await data.json()
  console.log(alldata)
  return NextResponse.json({"products":alldata})
}