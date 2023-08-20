import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const techOptions = [
  "Tailwind",
  "Axios",
  "DaisyUI",
  "Strip JS",
  "Node Js",
  "Express Js",
  "MongoDB",
];

const App = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log("Selected technology:", data.technology);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="technology">Select a technology:</label>
      <Controller
        name="technology"
        control={control}
        render={({ field }) => (
          <select {...field}>
            {techOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
