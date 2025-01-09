
const { MongoClient } = require('mongodb'); 
export async function POST(request) {

    const body =await request.json()
    const urll = process.env.MONGO_URI;
    const client = new MongoClient(urll);
    client.connect();
    const db = client.db('linkIT')
    const collection = db.collection('url')

    const doc = await collection.findOne({shorturl:body.shorturl});
    if(doc){
        return Response.json({success:false, error:true , message:'URL already exists' })
    }

    const result = await collection.insertOne({
        url : body.url,
        shorturl : body.shorturl
    })

    return Response.json({success:true, error:false , message:'URL generated succesfully' })
}