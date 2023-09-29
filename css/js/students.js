const tbody = document.querySelector(".tbody")
const add=  document.querySelector(".add-student")


getStudentsData()
function getStudentsData() {
    innerLouder()
    fetch("https://6427fbdc46fd35eb7c492488.mockapi.io/Students", {
        method: 'GET',
        headers: {
            "Content-type": "application/json"
        }
    }).then(res => res.json())
        .then(data => innerStudentData(data))

}

function innerStudentData(d) {
    tbody.innerHTML = ""

    if (d.length > 0) {
        d.forEach(element => {
            tbody.innerHTML += `
       <tr>
       <td> <img src='${element.url?element.url:"./img/avatar.webp"}' width='40px' height='40px' alt=''></td>
       <td>${element.name}</td>
       <td>${element.surname}</td>
       <td>${element.date}</td>
       <td>${element.address}</td>
       <td>${element.course}</td>
       <td>
       <button class="student-edit">edit</button>
       <button class="student-remove" onclick=removeStudent(${element.id})> remove</button>
       </td>
   </tr>
       `
        });
    }
    else{
        tbody.innerHTML=`
        <tr>
        <th colspan="6">
           <h1 style="padding:10px;margin-top:20px; color:red;  " >Student yo'q</h1>
           
        
        </th>
    </tr>
        `
    }


}



function removeStudent(id) {
    fetch(`https://6427fbdc46fd35eb7c492488.mockapi.io/Students/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    }).then(res => res.json())
        .then(data => getStudentsData())
}






































function innerLouder() {
    tbody.innerHTML = `
                           <tr>
                            <th colspan="7">
                                <div class="loader"></div>
                            </th>
                        </tr>
       `
}




add.addEventListener("click",function(){
   location.href  ="form.html"
})
