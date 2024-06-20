import { Request, Response } from 'express';
import userService from '../services/userService';

const getExample = (req: Request, res: Response) => {
  const examples = userService.getAllExamples();
  res.json(examples);
};

const createExample = (req: Request, res: Response) => {
  const example = userService.createExample(req.body);
  res.status(201).json(example);
};

export default { getExample, createExample };
