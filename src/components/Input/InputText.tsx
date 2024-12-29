import React, { useState } from 'react';
import { emits } from '../../helper/EmitData';

type InputTextProps = {
   placeholder?: string;
   onChange: (value: string) => void;
};

const InputText: React.FC<InputTextProps> = ({ onChange, placeholder = '' }) => {
   const [inputValue, setValue] = useState('');

   function onChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
      let value = e.target.value;
      setValue(value);
      emits(onChange, value);
   }

   return (
      <div>
         <input
            type='text'
            value={inputValue}
            onChange={onChangeInput}
            placeholder={placeholder}
            className="rounded-lg bg-white border border-white py-2 px-3 w-full placeholder:text-gray-939494" 
         />
      </div>
   );
};

export default InputText;
