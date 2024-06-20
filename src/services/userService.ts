import userModel from '../models/userModel';

const getAllExamples = () => {
  return userModel.findAll();
};

const createExample = (data: any) => {
  return userModel.create(data);
};

export default { getAllExamples, createExample };
