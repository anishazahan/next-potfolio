import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const TagInput = () => {
  const { handleSubmit, control, setValue, watch } = useForm();
  const tags = watch('tags', []);

  const handleInputChange = (event) => {
    setValue('inputValue', event.target.value);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === 'Enter') {
      const inputValue = event.target.value.trim();
      if (inputValue !== '') {
        setValue('tags', [...tags, inputValue]);
        setValue('inputValue', '');
      }
    }
  };

  const handleTagRemove = (tagToRemove) => {
    setValue('tags', tags.filter((tag) => tag !== tagToRemove));
  };

  const onSubmit = (data) => {
    console.log('All tags:', data.tags);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
            <button
              type="button"
              className="tag-remove"
              onClick={() => handleTagRemove(tag)}
            >
              x
            </button>
          </span>
        ))}
      </div>
      <Controller
        name="inputValue"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <input
            {...field}
            type="text"
            onKeyDown={handleInputKeyDown}
            onChange={handleInputChange}
            placeholder="Type and press Enter to add tags"
          />
        )}
      />
      
      <button type="submit">Submit</button>
    </form>
  );
};

export default TagInput;
