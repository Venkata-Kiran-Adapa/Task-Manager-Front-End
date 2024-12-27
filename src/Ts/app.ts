
export const username=document.querySelector('#username')! as HTMLInputElement;
export const password=document.querySelector('#password')! as HTMLInputElement;
export const disnone=document.querySelector('.display-none') as HTMLElement;
export const logged=document.querySelector('.logged') as HTMLElement;
export const loginbtn=document.querySelector('#login-submit') as HTMLButtonElement;
export const Welcome=document.querySelector('.welcome') as HTMLElement;

export const tasknamebtn=document.querySelector('#enterTask') as HTMLInputElement;
export const taskDesbtn=document.querySelector('#enterTaskDes') as HTMLInputElement;
export const taskdeadbtn=document.querySelector('#enterTaskDate') as HTMLInputElement;
export const taskSubmit=document.querySelector('#task-submit') as HTMLButtonElement;

export const viewTasks=document.querySelector('.displayhere') as HTMLElement;


export const allbtn=document.querySelector('.all') as HTMLButtonElement;
export const personalbtn=document.querySelector('.personal') as HTMLButtonElement;
export const homebtn=document.querySelector('.home') as HTMLButtonElement;
export const officebtn=document.querySelector('.office') as HTMLButtonElement;
export const collegebtn=document.querySelector('.college') as HTMLButtonElement;

import * as updateInterfaces from './updateInterface';
import * as functionalities from './functionalities';
export interface  accStructure{
    username:string;
    password:number;
    allTasks:Array<taskStructure>;
    personalTasks:Array<taskStructure>;
    homeTasks:Array<taskStructure>;
    officeTasks:Array<taskStructure>;
    collegeTasks:Array<taskStructure>;
}

export interface taskStructure{
    taskName:string;
    taskDescription:string;
    taskEnteredDate:string;
    taskDeadline:string;
}

const Account1:accStructure={
    username:'Venkat',
    password:1111,
    allTasks:[],
    personalTasks:[],
    homeTasks:[],
    officeTasks:[],
    collegeTasks:[],
}
const Account2:accStructure={
    username:'Revanth',
    password:2222,
    allTasks:[],
    personalTasks:[],
    homeTasks:[],
    officeTasks:[],
    collegeTasks:[],
}
const Account3:accStructure={
    username:'Akash',
    password:3333,
    allTasks:[],
    personalTasks:[],
    homeTasks:[],
    officeTasks:[],
    collegeTasks:[],
}
const Account4:accStructure={
    username:'Shanmukh',
    password:4444,
    allTasks:[],
    personalTasks:[],
    homeTasks:[],
    officeTasks:[],
    collegeTasks:[],
}
const Account5:accStructure={
    username:'Nithin',
    password:5555,
    allTasks:[],
    personalTasks:[],
    homeTasks:[],
    officeTasks:[],
    collegeTasks:[],
}
const Account6:accStructure={
    username:'Nagendra',
    password:6666,
    allTasks:[],
    personalTasks:[],
    homeTasks:[],
    officeTasks:[],
    collegeTasks:[],
}
const Account7:accStructure={
    username:'Sai',
    password:7777,
    allTasks:[],
    personalTasks:[],
    homeTasks:[],
    officeTasks:[],
    collegeTasks:[],
}
const Account8:accStructure={
    username:'Prasanth',
    password:8888,
    allTasks:[],
    personalTasks:[],
    homeTasks:[],
    officeTasks:[],
    collegeTasks:[],
}
 export let currentAcc:accStructure | undefined;


export const Accounts:Array<accStructure>=[Account1,Account2,Account3,Account4,Account5,Account6,Account7,Account8];


loginbtn.addEventListener('click',function(e){
       e.preventDefault();
        const userName=username.value;
        const pin=password.value;
        
        currentAcc=Accounts.find(acc=> acc.username.toLowerCase() === username.value);
        
        if(currentAcc?.password===+(pin)){
               disnone.classList.toggle('d-none');
               logged.classList.toggle('d-none');
               Welcome.textContent=`Welcome back ${currentAcc.username}...! to your unfinished Tasks`;  
               updateInterfaces.updateTasks("all");
               currentAcc=JSON.parse(localStorage.getItem(currentAcc!.username)!) ?? currentAcc;
               allbtn.classList.add('bg-success');
        }
        else{
            username.value='';
            password.value='';
            alert("Account Not Found...!  :(");
        }
})



taskSubmit.addEventListener('click',function(e){
        e.preventDefault();
        if(taskDesbtn.value && taskdeadbtn.value && tasknamebtn.value){
        const newTask:taskStructure= {
        taskName:tasknamebtn.value!,
        taskDescription:taskDesbtn.value!,
        taskEnteredDate:updateInterfaces.dateentered(),
        taskDeadline:taskdeadbtn.value!
        }
        const checkboxes = document.querySelectorAll('.form-check-input');
        const selectedValues: string[] = [];
        checkboxes.forEach(checkbox => {
            const inputElement = checkbox as HTMLInputElement;
            if (inputElement.checked) {        
                selectedValues.push(inputElement.value);
                inputElement.checked=false;
            }
        });
        let c=0,retrive;
        retrive=JSON.parse(localStorage.getItem(currentAcc!.username)!) ?? currentAcc;
        selectedValues.forEach(val=>{
            if(retrive){
            if(c==0) retrive?.allTasks.push(newTask);
            if(val==='personal') retrive?.personalTasks.push(newTask);
            if(val==='home') retrive?.homeTasks.push(newTask);
            if(val==='office') retrive?.officeTasks.push(newTask);
            if(val==='college') retrive?.collegeTasks.push(newTask);
            }
            c++;
        });
        localStorage.setItem(currentAcc!.username,JSON.stringify(retrive??currentAcc));
        currentAcc=JSON.parse(localStorage.getItem(currentAcc!.username)!);
        }
        else alert("Enter all Task Details..!")
        taskDesbtn.value=taskdeadbtn.value=tasknamebtn.value='';
        updateInterfaces.updateTasks("all");
        functionalities.AllColorChange();
       
})





