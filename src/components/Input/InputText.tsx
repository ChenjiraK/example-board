import React, { useState, useEffect } from 'react';
import { emits } from '../../helper/EmitData';

type InputTextProps = {
   placeholder?: string;
   onChange: (value: string) => void;
   inputValue?: string;
};

const InputText: React.FC<InputTextProps> = ({ onChange, placeholder = '', inputValue = '' }) => {
   const [content, setValue] = useState('');

   function onChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
      let value = e.target.value;
      setValue(value);
      emits(onChange, value);
   }

   useEffect(() => {
      setValue(inputValue);
   }, [inputValue]);

   return (
      <div>
         <input
            type='text'
            value={content}
            onChange={onChangeInput}
            placeholder={placeholder}
            className="rounded-lg bg-white border py-2 px-3 w-full placeholder:text-gray-939494" 
         />
      </div>
   );
};

export default InputText;
