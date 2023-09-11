"use client";

import { createContext, useContext } from "react";

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks deberia ser usado dentro de un Provider");
  }
  return context;
};

export const TaskProvider = ({ children }) => {
  const tasks = [
    {
      id: 1,
      title: "Primera Tarea",
      description: "Descripcion Primera Tarea",
    },
    {
      id: 2,
      title: "Segunda Tarea",
      description: "Descripcion Segunda Tarea",
    },
    {
      id: 3,
      title: "Tercera Tarea",
      description: "Descripcion Tercera Tarea",
    },
  ];
  return (
    <TaskContext.Provider value={{ tasks }}>{children}</TaskContext.Provider>
  );
};
