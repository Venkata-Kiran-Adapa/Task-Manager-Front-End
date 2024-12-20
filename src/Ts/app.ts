const username=document.querySelector('#username')! as HTMLInputElement;
const password=document.querySelector('#password')! as HTMLInputElement;
const disnone=document.querySelector('.display-none') as HTMLElement;
const logged=document.querySelector('.logged') as HTMLElement;
const loginbtn=document.querySelector('#login-submit') as HTMLButtonElement;
const Welcome=document.querySelector('.welcome') as HTMLElement;

const tasknamebtn=document.querySelector('#enterTask') as HTMLInputElement;
const taskDesbtn=document.querySelector('#enterTaskDes') as HTMLInputElement;
const taskdeadbtn=document.querySelector('#enterTaskDate') as HTMLInputElement;
const taskSubmit=document.querySelector('#task-submit') as HTMLButtonElement;

const viewTasks=document.querySelector('.displayhere') as HTMLElement;


const allbtn=document.querySelector('.all') as HTMLButtonElement;
const personalbtn=document.querySelector('.personal') as HTMLButtonElement;
const homebtn=document.querySelector('.home') as HTMLButtonElement;
const officebtn=document.querySelector('.office') as HTMLButtonElement;
const collegebtn=document.querySelector('.college') as HTMLButtonElement;

interface  accStructure{
    username:string;
    password:number;
    allTasks:Array<taskStructure>;
    personalTasks:Array<taskStructure>;
    homeTasks:Array<taskStructure>;
    officeTasks:Array<taskStructure>;
    collegeTasks:Array<taskStructure>;

}
interface taskStructure{
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
let currentAcc:accStructure | undefined;


const Accounts:Array<accStructure>=[Account1,Account2,Account3,Account4,Account5,Account6,Account7,Account8];


loginbtn.addEventListener('click',function(e){
       e.preventDefault();
        const userName=username.value;
        const pin=password.value;
        
        currentAcc=Accounts.find(acc=> acc.username.toLowerCase() === username.value.toLowerCase());
        
        if(currentAcc?.password===+(pin)){
               disnone.classList.toggle('d-none');
               logged.classList.toggle('d-none');
               Welcome.textContent=`Welcome back ${currentAcc.username}...! to your unfinished Tasks`;  
               updateTasks("all");
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
        taskEnteredDate:dateentered(),
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
        updateTasks("all");
        AllColorChange();
       
})

let AllColorChange=()=>{
    allbtn.classList.add('bg-success')
    personalbtn.classList.remove('bg-success');
    homebtn.classList.remove('bg-success');
    officebtn.classList.remove('bg-success');
    collegebtn.classList.remove('bg-success');
}



allbtn.addEventListener('click',function(){
    updateTasks("all");
    AllColorChange();
})
    
personalbtn.addEventListener('click',function(){
    updateTasks("personal");
    allbtn.classList.remove('bg-success')
    personalbtn.classList.add('bg-success');
    homebtn.classList.remove('bg-success');
    officebtn.classList.remove('bg-success');
    collegebtn.classList.remove('bg-success');
})
homebtn.addEventListener('click',function(){
    updateTasks("home");
    allbtn.classList.remove('bg-success')
    personalbtn.classList.remove('bg-success');
    homebtn.classList.add('bg-success');
    officebtn.classList.remove('bg-success');
    collegebtn.classList.remove('bg-success');
})
officebtn.addEventListener('click',function(){
    updateTasks("office");
    allbtn.classList.remove('bg-success')
    personalbtn.classList.remove('bg-success');
    homebtn.classList.remove('bg-success');
    officebtn.classList.add('bg-success');
    collegebtn.classList.remove('bg-success');
})
collegebtn.addEventListener('click',function(){
    updateTasks("college");
    allbtn.classList.remove('bg-success')
    personalbtn.classList.remove('bg-success');
    homebtn.classList.remove('bg-success');
    officebtn.classList.remove('bg-success');
    collegebtn.classList.add('bg-success');
})

function  deleteTask(card:object | any){
    let title:string=card?.firstChild?.nextSibling?.firstChild?.nextSibling?.firstChild?.nextSibling?.textContent;
    title=title.trim().toLowerCase();
    for (const key in currentAcc) {
        const value = currentAcc[key as keyof accStructure];
        if (Array.isArray(value)) {
          value.forEach((task, index) => {
            const taskName=task.taskName.trim().toLowerCase();
                if(taskName === title) {
                    (currentAcc![key as keyof accStructure] as taskStructure[]).splice(index, 1);
                    localStorage.setItem(currentAcc!.username,JSON.stringify(currentAcc));
                    currentAcc=JSON.parse(localStorage.getItem(currentAcc!.username)!);
                }   
                card.remove();
          });
        }
    }  
}



function dateentered():string{
    const now = new Date();
    const day :String= String(now.getDate());
    const month:string = String(now.getMonth() + 1);
    const year:number = now.getFullYear();
    return `${day}/${month}/${year}`;
}

 type TaskType="all"|"personal"|"home"|"office"|"college"
function updateTasks(taskType:TaskType){
    viewTasks.innerHTML='';
    const details=localStorage.getItem(currentAcc!.username)
    if(details){
        const detail=JSON.parse(details);
        if (detail[`${taskType}Tasks`]){
            detail[`${taskType}Tasks`].forEach((acc: any) =>{
                    const html =`
                    <div class="card col-4 m-3 m-md-3  bg-dark text-white" style="width: 18rem;">
                    <div class="card-body d-flex flex-column justify-content-around">
                    <div class="d-flex justify-content-between ">
                    <h4 class="card-title mb-2 d-flex align-items-center">${acc.taskName}</h4>
                    <button type="button" class="text-bg-dark btn align-items-center delete-btn"  ><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50%" height="70%" viewBox="0 0 48 48"><path fill="#9fa8da" d="M12,13v25c0,2.2,1.8,4,4,4h16c2.2,0,4-1.8,4-4V13H12z"></path><path fill="#7986cb" d="M23,15h2v23h-2V15z M29,15h2v23h-2V15z M17,15h2v23h-2V15z"></path><path fill="#5c6bc0" d="M12,10h24v4H12V10z"></path><path fill="#5c6bc0" d="M10,13h28v4H10V13z M20,12V8h8v4h2V8c0-1.1-0.9-2-2-2h-8c-1.1,0-2,0.9-2,2v4H20z"></path></svg></button>
                    </div>
                    <h6 class="card-subtitle mb-2 ">Task Added on: ${acc.taskEnteredDate}</h6>
                    <p class="card-text m-3 mb-2">${acc.taskDescription}</p>
                    <h6 class=" mb-2 ">Task DeadLine: ${acc.taskDeadline}</h6>
                    </div>
                </div> `
                viewTasks.insertAdjacentHTML('beforeend', html);
           });

           viewTasks.querySelectorAll(".delete-btn").forEach((button) => {
            button.addEventListener("click", (event) => {
                const target = event.target as HTMLElement | null;
                    if (target) {
                        const card = target.closest(".card");
                        if (card) deleteTask(card);
                    }
            });
        }); 
        }
    }
}
