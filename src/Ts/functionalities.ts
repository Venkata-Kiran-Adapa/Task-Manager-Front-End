import * as app from './app';
import * as updateInterfaces from './updateInterface';

export let AllColorChange = () => {
    app.allbtn.classList.add('bg-success');
    app.personalbtn.classList.remove('bg-success');
    app.homebtn.classList.remove('bg-success');
    app.officebtn.classList.remove('bg-success');
    app.collegebtn.classList.remove('bg-success');
};

document.addEventListener('DOMContentLoaded', () => {
    // Ensure the DOM elements are initialized
    if (app.allbtn) {
        app.allbtn.addEventListener('click', function () {
            updateInterfaces.updateTasks("all");
            AllColorChange();
        });
    }

    if (app.personalbtn) {
        app.personalbtn.addEventListener('click', function () {
            updateInterfaces.updateTasks("personal");
            app.allbtn.classList.remove('bg-success');
            app.personalbtn.classList.add('bg-success');
            app.homebtn.classList.remove('bg-success');
            app.officebtn.classList.remove('bg-success');
            app.collegebtn.classList.remove('bg-success');
        });
    }

    if (app.homebtn) {
        app.homebtn.addEventListener('click', function () {
            updateInterfaces.updateTasks("home");
            app.allbtn.classList.remove('bg-success');
            app.personalbtn.classList.remove('bg-success');
            app.homebtn.classList.add('bg-success');
            app.officebtn.classList.remove('bg-success');
            app.collegebtn.classList.remove('bg-success');
        });
    }

    if (app.officebtn) {
        app.officebtn.addEventListener('click', function () {
            updateInterfaces.updateTasks("office");
            app.allbtn.classList.remove('bg-success');
            app.personalbtn.classList.remove('bg-success');
            app.homebtn.classList.remove('bg-success');
            app.officebtn.classList.add('bg-success');
            app.collegebtn.classList.remove('bg-success');
        });
    }

    if (app.collegebtn) {
        app.collegebtn.addEventListener('click', function () {
            updateInterfaces.updateTasks("college");
            app.allbtn.classList.remove('bg-success');
            app.personalbtn.classList.remove('bg-success');
            app.homebtn.classList.remove('bg-success');
            app.officebtn.classList.remove('bg-success');
            app.collegebtn.classList.add('bg-success');
        });
    }
});


