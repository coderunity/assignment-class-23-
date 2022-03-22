
// get elemrnt

import  Alert  from "./src/Alart.js";
import  Stroage from "./src/Stroage.js";

const form_add_data = document.getElementById('form_add_data');
const table_list_data = document.getElementById('table_list_data');



form_add_data.addEventListener('submit', function(e){

    e.preventDefault();

    let msg = document.getElementById('msg');

    let form_data = new FormData(e.target);

    let data = Object.fromEntries(form_data.entries());

    let {name, email, phone, location} = data;

    if(name == '' || email == '' || phone == '' || location == ''){

        msg.innerHTML = Alert.danger('All fields are required');


    }else{

        Stroage.set('Devs' , data );
        form_add_data.reset();
        getallDevs();
    }


});



getallDevs();
function getallDevs(){


    let data = Stroage.get('Devs');
  
    let list = '';

    
    data.map((data, index) =>{

        

        let { name, email, phone, location, photo } = data;
    
        list += `
        <tr>
            <td>${index + 1}</td>
            <td>${name}</td>
            <td>${email}</td>
            <td>${phone}</td>
            <td>${location}</td>
            <td> <img style="width: 50px; height: 50px; object-fit: cover;" src="${photo ? photo : 'all_file/image/avatar-3637425__340.png'}"> </td>
            <td>
                <button class="btn btn-info btn-sm"><i class="fas fa-eye"></i></button>
                <button class="btn btn-warning btn-sm "><i class="fas fa-edit"></i></button>
                <button class="btn btn-danger btn-sm "><i class="fas fa-trash"></i></button>
            </td>
        </tr> 
        
        
        `;
    
    });
    
    table_list_data.innerHTML = list;
    
}


