const addBtn = document.getElementById('add_btn');
addBtn.addEventListener('click', ()=>{
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const empID = document.getElementById('empID').value; 
    const department = document.getElementById('department').value;
    const contact = document.getElementById('contact').value;
    const dateEmployed = document.getElementById('dateEmployed').value;  
    const data = {
        "employee": {
            "name":name,
            "email":email,
            "empid":empID,
            "department":department,
            "contact":contact,
            "dateemployed":dateEmployed
        }
    }
    
    fetch("https://api.sheety.co/53f2995a194d7d77a4e6cbf9e945a319/untitledSpreadsheet/employee",
    {
        "method":"POST",
        "body": JSON.stringify(data),
        "headers": {
            // "Authorization": "Bearer thisisasecretkeyforthisapi",
            "Content-Type" : "application/json" //We pass data in JSON format
        }
    })
    .then(response => response.json())
    .then(data =>{
        alert("Data succesfully added")
    }).catch(err =>{
        alert("There was an error")
        console.log(err);
    })
})

