import React, { ReactNode } from "react";
type MainOutlineButtonProps = {
    children: ReactNode;
    onClick?: () => void;
    isDisabled?: Boolean;
};

const MainOutlineButton : React.FC<MainOutlineButtonProps> = ({ children, onClick }) => {
  return (
    <button className={`text-success border border-success rounded-md font-semibold py-2 px-4 w-full`}
        onClick={onClick}>
            {children}
    </button>
  );
};

export default MainOutlineButton;