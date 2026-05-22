import {fetchPosts} from "./fetch";
import saveToLocal from "./storage";

async function initApp(){
    try{
        const posts = await fetchPosts();
        const topFive = posts.slice(0,5);
        topFive.forEach((posts, index) = {
            console.log('Post ${index + 1}');
            console.log('Title: ${post.title}');
            console.log('Body: ${post.body}');
        });  
        
        await saveToLocal(topFive);
    }
       catch(error){
       console.log("Error initializing app", error);
    };
}

initApp();
