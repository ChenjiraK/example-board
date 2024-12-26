import React, { ReactNode } from "react";
import { emits } from "../../helper/EmitData";
type MainButtonProps = {
    children: ReactNode;
    onClick: () => void;
};

const MainButton : React.FC<MainButtonProps> = ({ 
  children, onClick
}) => {
  function onClickBtn() {
    emits(onClick, null)
  }
  return (
    <button className='text-white bg-success rounded-md font-semibold py-1 px-4 w-full max-w-48'
        onClick={() => onClickBtn()}>
            {children}
    </button>
  );
};

export default MainButton;