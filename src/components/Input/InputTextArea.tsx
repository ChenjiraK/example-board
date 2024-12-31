import React, { useState, useEffect } from 'react';
import { emits } from '../../helper/EmitData';

type InputTextAreaProps = {
   onChange: (value: string) => void;
   inputValue?: string;
};

const InputTextArea: React.FC<InputTextAreaProps> = ({ onChange, inputValue = '' }) => {
    const [content, setValue] = useState('');

    function onChangeInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
        const value = e.target.value;
        setValue(value);
        emits(onChange, value);
    }

    useEffect(() => {
        setValue(inputValue);
    }, [inputValue]);

    return (
        <div>
            <textarea
                value={content}
                onChange={onChangeInput}
                className='min-h-28 w-full border rounded-md p-2' 
                placeholder='What`s on your mind...' />
        </div>
    );
};

export default InputTextArea;
