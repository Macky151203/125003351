import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest,{params}:{params:{"categoryname":string,"n":number,"perpage":number}}){
  const data={
    "companyName": "Greatcompany",
    "clientID": "5dff23eb-544a-4ad5-81f4-2d2d9aa0ccd0",
    "clientSecret": "AgWitDmzxZfLaKQk",
    "ownerName": "Subramaniyan S",
    "ownerEmail": "125003351@sastra.ac.in",
    "rollNo": "125003351"
  }
  const categoryname=params['categoryname']
  const n=params['n']
  const perpage=params['perpage']
  const getauth=async()=>{
    const res=await fetch('http://20.244.56.144/test/auth',{
      method:'POST',
      body:JSON.stringify(data)
    })
    const d=await res.json();
    //console.log(d)
    return d.access_token
  }
 const tok= await getauth();
 console.log("TOKENlelo- ",tok)
 
  const comp=["AMZ", "FLP", "SNP", "ΜΥΝ", "ΑΖΟ"]
  const cat=[ "Phone", "Computer", "TV", "Earphone", "Tablet", "Charger", "Mouse", "Keypad", "Bluetooth", "Pendrive", "Remote", "Speaker", "Headset", "Laptop", "PC"]
  const ammzres=await fetch(`http://20.244.56.144/test/companies/AMZ/categories/${categoryname}/products?top=${n}&minPrice=1&maxPrice=10000`,{
    headers:{
      'Authorization': `Bearer ${tok}`,
    }
  })
  const flres=await fetch(`http://20.244.56.144/test/companies/FLP/categories/${categoryname}/products?top=${n}&minPrice=1&maxPrice=10000`,{
    headers:{
      'Authorization': `Bearer ${tok}`,
    }
  })
  const snpres=await fetch(`http://20.244.56.144/test/companies/SNP/categories/${categoryname}/products?top=${n}&minPrice=1&maxPrice=10000`,{
    headers:{
      'Authorization': `Bearer ${tok}`,
    }
  })
  const mynres=await fetch(`http://20.244.56.144/test/companies/MYN/categories/${categoryname}/products?top=${n}&minPrice=1&maxPrice=10000`,{
    headers:{
      'Authorization': `Bearer ${tok}`,
    }
  })
  const azcres=await fetch(`http://20.244.56.144/test/companies/AZC/categories/${categoryname}/products?top=${n}&minPrice=1&maxPrice=10000`,{
    headers:{
      'Authorization': `Bearer ${tok}`,
    }
  })
  
  const amzdata=await ammzres.json();
  const fldata=await flres.json();
  const snpdata=await snpres.json();
  const myndata=await mynres.json();
  const azcdata=await azcres.json();
  const alldata=[...amzdata,...fldata,...snpdata,...myndata,azcdata]
  console.log("all data",alldata)
  alldata.sort((p)=>{
    return p["rating"]
  })
  const start=(perpage-1)*10
  const end=(start+10)
  const finaldata=alldata.slice(start,end)
  return NextResponse.json({allproducts:finaldata})
}