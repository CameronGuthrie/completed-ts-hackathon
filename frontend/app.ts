import { Task } from './models/Task.js';
import { ApiService } from './services/ApiService.js';
import { LogMethod } from './decorators/LogMethod.js';

class TaskManager {
    private apiService: ApiService<Task>;
    private taskListElement: HTMLElement;
    private taskInput: HTMLInputElement;
    private addTaskButton: HTMLButtonElement;

    constructor() {
        this.apiService = new ApiService<Task>('http://localhost:5000/api/tasks');
        this.taskListElement = document.getElementById('task-list') as HTMLElement;
        this.taskInput = document.getElementById('task-title') as HTMLInputElement;
        this.addTaskButton = document.getElementById('add-task') as HTMLButtonElement;

        this.addTaskButton.addEventListener('click', () => this.addTask());
        this.loadTasks();
    }

    @LogMethod
    async loadTasks() {
        const tasks = await this.apiService.getAll();
        this.renderTasks(tasks);
    }

    @LogMethod
    renderTasks(tasks: Task[]) {
        this.taskListElement.innerHTML = '';
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task.title;
            li.className = task.completed ? 'completed' : '';
            
            // Create buttons for updating and deleting tasks
            const toggleButton = document.createElement('button');
            toggleButton.textContent = task.completed ? 'Mark Incomplete' : 'Mark Complete';
            toggleButton.addEventListener('click', () => this.toggleTaskCompletion(task.id, !task.completed));
            
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => this.deleteTask(task.id));
            
            li.appendChild(toggleButton);
            li.appendChild(deleteButton);
            this.taskListElement.appendChild(li);
        });
    }

    @LogMethod
    async addTask() {
        const title = this.taskInput.value.trim();
        if (title === '') return;

        const newTask: Task = {
            id: 0, // ID will be assigned by the server
            title,
            completed: false
        };

        await this.apiService.create(newTask);
        this.taskInput.value = '';
        this.loadTasks();
    }

    @LogMethod
    async toggleTaskCompletion(taskId: number, completed: boolean) {
        const updatedTask = await this.apiService.update(taskId, { completed });
        this.loadTasks();
    }

    @LogMethod
    async deleteTask(taskId: number) {
        await this.apiService.delete(taskId);
        this.loadTasks();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new TaskManager();
});
