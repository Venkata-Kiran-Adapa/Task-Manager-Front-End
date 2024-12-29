
# Task Manager

This Task Manager is a simple web application built using TypeScript and Bootstrap. It allows users to manage their tasks by adding new tasks, viewing tasks, and categorizing them into various categories like Personal, Home, Office, and College. The application is fully responsive, ensuring it adapts seamlessly from mobile devices to tablets to desktops.


## Features
1. ***User Authentication***
- **Login:** Users can log in using a unique username and PIN. If the entered credentials match an existing account, the user will be granted access to their task management page.
- **Welcome Message:** Upon successful login, a personalized welcome message is displayed, showing the user’s name and a prompt to view their tasks.

2.***Task Management***:
- **Add Tasks**: Users can easily add tasks by entering.
  - *Task Name*: A brief description of the task (e.g., "Complete Assignment").
   - *Task Description*: Detailed information about the task (e.g., "Complete the math assignment before the deadline").
   - *Due Date*: The target date for completing the task (e.g., "30/12/2024").
- **Task Types**: After adding tasks, users can view them under the selected categories. Tasks are dynamically filtered based on the selected category.
- **Delete Tasks**: Users can delete tasks after they are marked as completed or no longer needed.
3.**Categorize Tasks**:
- Tasks can be categorized into Personal, Home, Office, and College categories.
4.**Responsiveness**:
- The application is fully responsive, ensuring it works seamlessly across devices of all sizes, from mobile phones to desktops and laptops.
4.**Persistence**:
- Tasks are saved in localStorage, so data persists even after the page is refreshed or the browser is closed.
## Techologies Used
- TypeScript for type-safe and structured code.
- Bootstrap for responsive design and UI components.
- HTML and CSS for frontend styling and layout.
- DOM Manipulation for dynamic content and task management.


## How It Works
**Login:**  Users log in using their username and PIN. Successful authentication displays a welcome message and access to their tasks.

**Add Tasks:** Tasks are added with details such as task name, description, and due date.

**View and Categorize Tasks:** Tasks can be viewed and categorized under personal, home, office, or college categories.

**Task Management:** The application supports adding, viewing, and deleting tasks with all relevant details displayed.
## Deployment

1. Clone the repository:

```bash
git clone https://github.com/Venkata-Kiran-Adapa/Task-Manager.git
```
2. Navigate to the project directory:
```bash
  cd src
```
3. Install dependencies:
```bash
  npm install
```
4. Build the Project:
```bash
  npm run build
```
5. Start the development server:
```bash
  npm start
```
6. Open the app in your browser at http://localhost:8080.



## Usernames and pins

The following are the usernames and their corresponding PINs for logging into the application:

- **Venkat**: 1111
- **Revanth**: 2222
- **Akash**: 3333
- **Shanmukh**: 4444
- **Nithin**: 5555
- **Nagendra**: 6666
- **Sai**: 7777
- **Prasanth**: 8888
## Previews


Here is the  preview of the app in different views:

*   **Mobile View**
   [![Watch the video](https://img.shields.io/badge/Watch%20Video-blue)](https://github.com/Venkata-Kiran-Adapa/Task-Manager/blob/master/mobile.mp4)

![image](https://github.com/user-attachments/assets/3add6280-9ce6-427d-8529-d3d548e0832b)

    
*   **Tablet View**
        [![Watch the video](https://img.shields.io/badge/Watch%20Video-blue)](https://github.com/Venkata-Kiran-Adapa/Task-Manager/blob/master/Tablet.mp4)
    
    ![image](https://github.com/user-attachments/assets/38d1e9fc-89d7-4c0b-aeb4-d32d1f2cd022)

    
*   **Desktop View**
   [![Watch the video](https://img.shields.io/badge/Watch%20Video-blue)](https://github.com/Venkata-Kiran-Adapa/Task-Manager/blob/master/laptop.mp4)

![image](https://github.com/user-attachments/assets/818bb62c-c7ef-4d7b-8c35-155bcd905cc8)


