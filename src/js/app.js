"use strict";
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const disnone = document.querySelector('.display-none');
const logged = document.querySelector('.logged');
const loginbtn = document.querySelector('#login-submit');
const Welcome = document.querySelector('.welcome');
const tasknamebtn = document.querySelector('#enterTask');
const taskDesbtn = document.querySelector('#enterTaskDes');
const taskdeadbtn = document.querySelector('#enterTaskDate');
const taskSubmit = document.querySelector('#task-submit');
const viewTasks = document.querySelector('.displayhere');
const allbtn = document.querySelector('.all');
const personalbtn = document.querySelector('.personal');
const homebtn = document.querySelector('.home');
const officebtn = document.querySelector('.office');
const collegebtn = document.querySelector('.college');
const Account1 = {
    username: 'Venkat',
    password: 1111,
    allTasks: [],
    personalTasks: [],
    homeTasks: [],
    officeTasks: [],
    collegeTasks: [],
};
const Account2 = {
    username: 'Revanth',
    password: 2222,
    allTasks: [],
    personalTasks: [],
    homeTasks: [],
    officeTasks: [],
    collegeTasks: [],
};
const Account3 = {
    username: 'Akash',
    password: 3333,
    allTasks: [],
    personalTasks: [],
    homeTasks: [],
    officeTasks: [],
    collegeTasks: [],
};
const Account4 = {
    username: 'Shanmukh',
    password: 4444,
    allTasks: [],
    personalTasks: [],
    homeTasks: [],
    officeTasks: [],
    collegeTasks: [],
};
const Account5 = {
    username: 'Nithin',
    password: 5555,
    allTasks: [],
    personalTasks: [],
    homeTasks: [],
    officeTasks: [],
    collegeTasks: [],
};
const Account6 = {
    username: 'Nagendra',
    password: 6666,
    allTasks: [],
    personalTasks: [],
    homeTasks: [],
    officeTasks: [],
    collegeTasks: [],
};
const Account7 = {
    username: 'Sai',
    password: 7777,
    allTasks: [],
    personalTasks: [],
    homeTasks: [],
    officeTasks: [],
    collegeTasks: [],
};
const Account8 = {
    username: 'Prasanth',
    password: 8888,
    allTasks: [],
    personalTasks: [],
    homeTasks: [],
    officeTasks: [],
    collegeTasks: [],
};
let currentAcc;
const Accounts = [Account1, Account2, Account3, Account4, Account5, Account6, Account7, Account8];
loginbtn.addEventListener('click', function (e) {
    var _a;
    e.preventDefault();
    const userName = username.value;
    const pin = password.value;
    currentAcc = Accounts.find(acc => acc.username.toLowerCase() === username.value);
    if ((currentAcc === null || currentAcc === void 0 ? void 0 : currentAcc.password) === +(pin)) {
        disnone.classList.toggle('d-none');
        logged.classList.toggle('d-none');
        Welcome.textContent = `Welcome back ${currentAcc.username}...! to your unfinished Tasks`;
        updateTasks("all");
        currentAcc = (_a = JSON.parse(localStorage.getItem(currentAcc.username))) !== null && _a !== void 0 ? _a : currentAcc;
        allbtn.classList.add('bg-success');
    }
    else {
        username.value = '';
        password.value = '';
        alert("Account Not Found...!  :(");
    }
});
taskSubmit.addEventListener('click', function (e) {
    var _a;
    e.preventDefault();
    if (taskDesbtn.value && taskdeadbtn.value && tasknamebtn.value) {
        const newTask = {
            taskName: tasknamebtn.value,
            taskDescription: taskDesbtn.value,
            taskEnteredDate: dateentered(),
            taskDeadline: taskdeadbtn.value
        };
        const checkboxes = document.querySelectorAll('.form-check-input');
        const selectedValues = [];
        checkboxes.forEach(checkbox => {
            const inputElement = checkbox;
            if (inputElement.checked) {
                selectedValues.push(inputElement.value);
                inputElement.checked = false;
            }
        });
        let c = 0, retrive;
        retrive = (_a = JSON.parse(localStorage.getItem(currentAcc.username))) !== null && _a !== void 0 ? _a : currentAcc;
        selectedValues.forEach(val => {
            if (retrive) {
                if (c == 0)
                    retrive === null || retrive === void 0 ? void 0 : retrive.allTasks.push(newTask);
                if (val === 'personal')
                    retrive === null || retrive === void 0 ? void 0 : retrive.personalTasks.push(newTask);
                if (val === 'home')
                    retrive === null || retrive === void 0 ? void 0 : retrive.homeTasks.push(newTask);
                if (val === 'office')
                    retrive === null || retrive === void 0 ? void 0 : retrive.officeTasks.push(newTask);
                if (val === 'college')
                    retrive === null || retrive === void 0 ? void 0 : retrive.collegeTasks.push(newTask);
            }
            c++;
        });
        localStorage.setItem(currentAcc.username, JSON.stringify(retrive !== null && retrive !== void 0 ? retrive : currentAcc));
        currentAcc = JSON.parse(localStorage.getItem(currentAcc.username));
    }
    else
        alert("Enter all Task Details..!");
    taskDesbtn.value = taskdeadbtn.value = tasknamebtn.value = '';
    updateTasks("all");
    AllColorChange();
});
let AllColorChange = () => {
    allbtn.classList.add('bg-success');
    personalbtn.classList.remove('bg-success');
    homebtn.classList.remove('bg-success');
    officebtn.classList.remove('bg-success');
    collegebtn.classList.remove('bg-success');
};
allbtn.addEventListener('click', function () {
    updateTasks("all");
    AllColorChange();
});
personalbtn.addEventListener('click', function () {
    updateTasks("personal");
    allbtn.classList.remove('bg-success');
    personalbtn.classList.add('bg-success');
    homebtn.classList.remove('bg-success');
    officebtn.classList.remove('bg-success');
    collegebtn.classList.remove('bg-success');
});
homebtn.addEventListener('click', function () {
    updateTasks("home");
    allbtn.classList.remove('bg-success');
    personalbtn.classList.remove('bg-success');
    homebtn.classList.add('bg-success');
    officebtn.classList.remove('bg-success');
    collegebtn.classList.remove('bg-success');
});
officebtn.addEventListener('click', function () {
    updateTasks("office");
    allbtn.classList.remove('bg-success');
    personalbtn.classList.remove('bg-success');
    homebtn.classList.remove('bg-success');
    officebtn.classList.add('bg-success');
    collegebtn.classList.remove('bg-success');
});
collegebtn.addEventListener('click', function () {
    updateTasks("college");
    allbtn.classList.remove('bg-success');
    personalbtn.classList.remove('bg-success');
    homebtn.classList.remove('bg-success');
    officebtn.classList.remove('bg-success');
    collegebtn.classList.add('bg-success');
});
function deleteTask(card) {
    var _a, _b, _c, _d, _e, _f;
    let title = (_f = (_e = (_d = (_c = (_b = (_a = card === null || card === void 0 ? void 0 : card.firstChild) === null || _a === void 0 ? void 0 : _a.nextSibling) === null || _b === void 0 ? void 0 : _b.firstChild) === null || _c === void 0 ? void 0 : _c.nextSibling) === null || _d === void 0 ? void 0 : _d.firstChild) === null || _e === void 0 ? void 0 : _e.nextSibling) === null || _f === void 0 ? void 0 : _f.textContent;
    title = title.trim().toLowerCase();
    for (const key in currentAcc) {
        const value = currentAcc[key];
        if (Array.isArray(value)) {
            value.forEach((task, index) => {
                const taskName = task.taskName.trim().toLowerCase();
                if (taskName === title) {
                    currentAcc[key].splice(index, 1);
                    localStorage.setItem(currentAcc.username, JSON.stringify(currentAcc));
                    currentAcc = JSON.parse(localStorage.getItem(currentAcc.username));
                }
                card.remove();
            });
        }
    }
}
function dateentered() {
    const now = new Date();
    const day = String(now.getDate());
    const month = String(now.getMonth() + 1);
    const year = now.getFullYear();
    return `${day}/${month}/${year}`;
}
function updateTasks(taskType) {
    viewTasks.innerHTML = '';
    const details = localStorage.getItem(currentAcc.username);
    if (details) {
        const detail = JSON.parse(details);
        if (detail[`${taskType}Tasks`]) {
            detail[`${taskType}Tasks`].forEach((acc) => {
                const html = `
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
                </div> `;
                viewTasks.insertAdjacentHTML('beforeend', html);
            });
            viewTasks.querySelectorAll(".delete-btn").forEach((button) => {
                button.addEventListener("click", (event) => {
                    const target = event.target;
                    if (target) {
                        const card = target.closest(".card");
                        if (card)
                            deleteTask(card);
                    }
                });
            });
        }
    }
}
//# sourceMappingURL=app.js.map