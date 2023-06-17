
import type {NextApiRequest,NextApiResponse} from 'next'
import query from '../../lib/queryApi'
import { adminDB } from '../../firebaseAdmin';
import admin from 'firebase-admin'

type Data={
    answer:string
}
export default async function handler(
    req:NextApiRequest,
    res:NextApiResponse<Data>
){
    //taking the prompt from the body
    const {prompt,chatId,model,session}= req.body;
    console.log(prompt,chatId,model)
    if(!prompt){
        res.status(400).json({answer:"Please Provide a Prompt!"});
        return;
    }
    if(!chatId){
        res.status(400).json({answer:"Please Provide a Prompt!"});
        return;
    }
   
    //chatGpt Query
    const response = await query(prompt,chatId,model);
    console.log(response)
    const message:Message={
        text:response || 'Chatgpt was unable to find an answer!',
        // createdAt:admin.firestore.Timestamp.now(),
        createdAt:new Date(),
        user:{
            _id:'ChatGPT',
            name:'ChatGPT',
            avatar:'https://links.papareact.com/89k'
        }
    }
    await adminDB.collection('users').doc(session?.user?.email).collection('chats').doc(chatId).collection('messages').add(message);
    res.status(200).json({
       answer:message.text
    })
    console.log(message.text)
}