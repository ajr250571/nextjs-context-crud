"use client";
import { useRouter } from "next/navigation";
function TaskCard({ task }) {
  const router = useRouter();
  return (
    <div>
      <div
        className="bg-base-200 m-2 p-2"
        onClick={() => router.push(`/edit/${task.id}`)}
      >
        <h1 className="text-2xl text-primary">
          {task.id}. {task.title}
        </h1>
        <button className="btn btn-primary btn-sm">Delete</button>
        <p className="text-secondary">{task.description}</p>
      </div>
    </div>
  );
}

export default TaskCard;
