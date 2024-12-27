import * as app from './app';



function  deleteTask(card:object | any){
    let title:string=card?.firstChild?.nextSibling?.firstChild?.nextSibling?.firstChild?.nextSibling?.textContent;
    title=title.trim().toLowerCase();
    for (const key in app.currentAcc) {
        const value = app.currentAcc[key as keyof app.accStructure];
        if (Array.isArray(value)) {
          value.forEach((task, index) => {
            const taskName=task.taskName.trim().toLowerCase();
                if(taskName === title) {
                    (app.currentAcc![key as keyof app.accStructure] as app.taskStructure[]).splice(index, 1);
                    localStorage.setItem(app.currentAcc!.username,JSON.stringify(app.currentAcc));
                    app.currentAcc!=JSON.parse(localStorage.getItem(app.currentAcc!.username)!);
                }   
                card.remove();
          });
        }
    }  
}




export function dateentered():string{
    const now = new Date();
    const day :String= String(now.getDate());
    const month:string = String(now.getMonth() + 1);
    const year:number = now.getFullYear();
    return `${day}/${month}/${year}`;
}

 type TaskType="all"|"personal"|"home"|"office"|"college";

export function updateTasks(taskType:TaskType){
   app.viewTasks.innerHTML='';
    const details=localStorage.getItem(app.currentAcc!.username)
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
                app.viewTasks.insertAdjacentHTML('beforeend', html);
           });

           app.viewTasks.querySelectorAll(".delete-btn").forEach((button) => {
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