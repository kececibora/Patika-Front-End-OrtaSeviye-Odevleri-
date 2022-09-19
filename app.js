import axios from "axios"
import {userId} from "./index.js"



async function getData() {
   
   const { data: userid2 } = await ( axios("https://jsonplaceholder.typicode.com/posts?id=" +`${userId}`));
   const { data: userid1 } = await ( axios("https://jsonplaceholder.typicode.com/users/" +`${userId}`));
   console.log(userid1);
   console.log(userid2);
};


export default getData;


