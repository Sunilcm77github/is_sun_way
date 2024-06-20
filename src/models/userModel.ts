// This is a placeholder. Replace with actual model logic, e.g., Mongoose schema for MongoDB.

const examples: any[] = [];

const findAll = () => {
  return examples;
};

const create = (data: any) => {
  const newExample = { id: examples.length + 1, ...data };
  examples.push(newExample);
  return newExample;
};

export default { findAll, create };
