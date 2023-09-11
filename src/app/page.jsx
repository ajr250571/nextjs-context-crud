"use client";
import TaskCard from "@/components/TaskCard";
import { useTasks } from "@/context/TasksContex";

function HomePage() {
  const { tasks } = useTasks();
  console.log(tasks);
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default HomePage;
