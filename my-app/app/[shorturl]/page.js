import { redirect } from "next/navigation"
const { MongoClient } = require('mongodb'); 

export default async function Page({params}) {

  const shorturl =(await params).shorturl
  const urll = process.env.MONGO_URI;
  const client = new MongoClient(urll);
  client.connect();
  const db = client.db('linkIT')
  const collection = db.collection('url')

  const doc = await collection.findOne({shorturl : shorturl});
  if(doc){
      redirect(doc.url)
  }else{
    redirect(`${process.env.NEXT_HOST}`)
  }

  return <p>Page: {shorturl}</p>
}