import React, { useState } from 'react';
import { emits } from '../../helper/EmitData';

type InputTextAreaProps = {
   onChange: (value: string) => void;
};

const InputTextArea: React.FC<InputTextAreaProps> = ({ onChange }) => {
    const [inputValue, setValue] = useState('');

    function onChangeInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
        const value = e.target.value;
        setValue(value);
        emits(onChange, value);
    }

    return (
        <div>
            <textarea
                value={inputValue}
                onChange={onChangeInput}
                className='min-h-28 w-full border rounded-md p-2' 
                placeholder='What`s on your mind...' />
        </div>
    );
};

export default InputTextArea;
