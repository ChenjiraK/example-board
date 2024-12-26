import React, { useState, useRef } from "react";
import { emits } from '../../helper/EmitData';
import { IDropdownItem } from '../../types/Interface';

type MenuDropdownProps = {
    children: React.ReactNode;
    dropdownList: IDropdownItem[];
    onChangeItem: (item: IDropdownItem) => void;
    onClickDropdown: (isOpen: boolean) => void;
    customClass?: string;
};

const MenuDropdown : React.FC<MenuDropdownProps> = ({ children, dropdownList, onChangeItem, onClickDropdown , customClass = '' }) => {
    const [showList, setShowList] = useState(false);
    const elemDropdownBtn = useRef<HTMLDivElement | null>(null);
    const elemDDLListArea = useRef<HTMLDivElement | null>(null);

    const toggleDropdown = () => {
        if (showList) {
            closeDropdown();
        } else {
            openDropdown();
        }
        
        emits(onClickDropdown, showList);
    }
    const openDropdown = () => {
        setShowList(true);
        document.addEventListener('click', documentClick);
    }
    const closeDropdown = () => {
        setShowList(false)
        document.removeEventListener('click', documentClick);
    }
    const documentClick = (e: MouseEvent) => {
        const target = e.target as Node;
        if (elemDropdownBtn.current &&
            !elemDropdownBtn.current.contains(target)) {
            closeDropdown();
        }
    }
    const clickSelectItem = (item: IDropdownItem) => {
        if(!item) return;
        emits(onChangeItem, item);
        closeDropdown();
    }
    const ListArea = () => {
        return (<>
            {showList && dropdownList &&
                <div ref={elemDDLListArea}
                    className={`absolute rounded-md shadow-md ${ customClass ? customClass : 'left-0 w-40' } bg-white top-7 border overflow-hidden z-10 `}>
                    <div className="min-h-fit overflow-y-auto hide-scroll py-2">
                        {dropdownList.map((item, index) => (
                            <div key={`dropdown_${index}`} className="py-2 px-4 cursor-pointer text-gray-121212 hover:bg-success hover:bg-opacity-20" 
                                onClick={()=>{clickSelectItem(item)}}>
                                <p className="hover:text-black">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </>)
    }
    return(
        <div className="relative inline-block text-left" ref={elemDropdownBtn}>
            <div className="cursor-pointer text-gray-121212" onClick={()=>{toggleDropdown()}}>
                {children}
            </div>
            <ListArea />
        </div>
    )
  }
export default MenuDropdown