export function fetchPosts(){
    return fetch("https://jsonplaceholder.typicode.com/posts")
  
    .then((response)=>{
      if(!response.ok){
        console.log("Failed to fetch posts")
        throw new Error("Failed to fetch")
      }
      return response.json();
    })
  
    .then((data)=>{
      console.log(data)
      return data;
    })
  
    .catch((error)=>{
      console.log(error);
      return [];
    });
  }
  
  fetchPosts()