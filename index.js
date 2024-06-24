const example = () => {
  return "Hello World";
};

const asyncExample = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Finished");
    }, 10);
  });
};

const asyncExampleRejects = async () => {
  return new Promise((resolve, reject) => {
    reject("Example rejected promise");
  });
};

const asyncExampleThrows = () => {
  throw new Error("Failed");
};

const mockExample = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await response.json();
  return json;
};

export {
  example,
  asyncExample,
  asyncExampleRejects,
  asyncExampleThrows,
  mockExample,
};
