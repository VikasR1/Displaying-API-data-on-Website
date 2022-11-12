// alert(1)

// //Creating prmomices to fetch api data
// fetch("https://fakestoreapi.com/products").then((data)=> {
//     //let's show the data in the console
//     // console.log(data);
//     return data.json();
// })

fetch("https://fakestoreapi.com/products").then((data)=> {
    // converting data into json format
    return data.json();  // converted to object
}).then((objectData)=>{
    //let's show the data in the console
    console.log(objectData);
    let tableData="";
    objectData.map((values)=>{
        tableData += ` <tr>
        <td>${values.title}</td>
        <td>${values.description}</td>
        <td>${values.price}</td>
        <td><img src="${values.image}" /></td>
      </tr>`
    });

    document.getElementById("table_body").innerHTML = tableData;

}).catch((err)=>{
    console.log(err);
})

