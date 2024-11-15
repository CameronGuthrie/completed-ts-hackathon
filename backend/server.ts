import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

// In-memory task list
let tasks: Task[] = [
  { id: 1, title: 'Learn TypeScript', completed: false },
  { id: 2, title: 'Build a CRUD App', completed: false },
];

// GET all tasks
app.get('/api/tasks', (req: Request, res: Response) => {
  res.json(tasks);
});

// GET a task by ID
app.get('/api/tasks/:id', (req: Request, res: Response) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find(t => t.id === taskId);
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

// POST a new task
app.post('/api/tasks', (req: Request, res: Response) => {
  const newTask: Task = {
    id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
    title: req.body.title,
    completed: false,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT to update a task by ID
app.put('/api/tasks/:id', (req: Request, res: Response) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex(t => t.id === taskId);
  if (taskIndex !== -1) {
    tasks[taskIndex] = {
      ...tasks[taskIndex],
      title: req.body.title || tasks[taskIndex].title,
      completed: req.body.completed !== undefined ? req.body.completed : tasks[taskIndex].completed,
    };
    res.json(tasks[taskIndex]);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

// DELETE a task by ID
app.delete('/api/tasks/:id', (req: Request, res: Response) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex(t => t.id === taskId);
  if (taskIndex !== -1) {
    const deletedTask = tasks.splice(taskIndex, 1);
    res.json(deletedTask[0]);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
