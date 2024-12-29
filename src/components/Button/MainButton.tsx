import React, { ReactNode } from "react";
type MainButtonProps = {
    children: ReactNode;
    onClick?: () => void;
    isDisabled?: Boolean;
};

const MainButton : React.FC<MainButtonProps> = ({ children, onClick, isDisabled = false }) => {
  return (
    <button className={`text-white rounded-md font-semibold py-2 px-4 w-full ${isDisabled ? 'bg-gray-BBC2C0' : 'bg-success'}`}
        onClick={onClick}>
          {children}
    </button>
  );
};

export default MainButton;