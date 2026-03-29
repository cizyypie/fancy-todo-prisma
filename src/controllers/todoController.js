import * as todoService from "../services/todoService.js";

export const getAllTodo = async (req, res) => {
  try {
    const todo = await todoService.getAllTodo();
    res.status(200).json({ data: todo });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTodoById = async (req, res) => {
  try {
    const todo = await todoService.getTodoById(req.params.id); 
    
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    res.status(200).json({ data: todo });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTodo = async (req, res) => {
  try {
    const todo = await todoService.createTodo(req.body);
    res.status(201).json({ data: todo });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const user = await todoService.updateTodo(req.params.id, req.body);
    res.status(200).json({ data: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    await todoService.deleteTodo(req.params.id); 
    res.status(200).json({ message: "todo Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
