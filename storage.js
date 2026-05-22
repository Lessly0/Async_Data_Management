async function saveToLocal(data) {
    try{
        const convertedData = JSON.stringify(data);
        localStorage.setItem("userPosts", convertedData);

        console.log("Data saved to localStorage");
    }

    catch(error){
        console.log("Failed to save data to localStorage", error);
    }
}

export default saveToLocal;

saveToLocal([{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}]);

