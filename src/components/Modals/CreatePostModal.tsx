import React, { useState, useMemo } from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import InputTextArea from '../Input/InputTextArea';
import InputText from '../Input/InputText';
import MainButton from '../Button/MainButton';
import MainOutlineButton from '../Button/MainOutlineButton';
import MenuDropdown from '../Input/MenuDropdown';
import { emits } from '../../helper/EmitData';
interface ModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const CreatePostModal: React.FC<ModalProps> = ({
  isOpen,
  onConfirm,
  onCancel,
}) => {
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');
  const communityList = [
    {
      text: 'History',
      value: 'history',
    },
    {
      text: 'Food',
      value: 'food',
    },
    {
      text: 'Pets',
      value: 'pets',
    },
    {
      text: 'Health',
      value: 'health',
    },
    {
      text: 'Fashion',
      value: 'fashion',
    },
    {
      text: 'Exercise',
      value: 'exercise',
    },
    {
      text: 'Others',
      value: 'others',
    },
  ];

  const isDisabled = useMemo(() => {
    return Boolean(!message);
  }, [message]);
  function onClickPost() {
    emits(onConfirm, message);
  }
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 sm:w-610px p-6 relative mx-4">
        <button className="absolute top-1 right-2" onClick={onConfirm}>
          <Icon className="text-black text-20" icon={faXmark} />
        </button>
        <h2 className="text-xl font-semibold text-gray-800">Create Post</h2>
        <div className="my-4 border border-success rounded-md h-10 w-full sm:w-52 flex items-center justify-center">
          <MenuDropdown
            dropdownList={communityList}
            customClass="-left-7 top-9 w-52"
            onChangeItem={(item: any) => console.log(item)}
            onClickDropdown={(item: any) => console.log(item)}
          >
            <div className="flex">
              <p className="pr-3 text-success">Choose a community</p>
              <Icon
                className="self-center text-12 text-success"
                icon={faChevronDown}
              />
            </div>
          </MenuDropdown>
        </div>
        <div className="my-2">
          <InputText onChange={setTitle} placeholder="Title" />
        </div>
        <div className="mt-2">
          <InputTextArea onChange={setMessage} />
        </div>
        {/* Actions */}
        <div className="mt-4 space-y-3 sm:flex sm:justify-end sm:space-x-3 sm:space-y-0">
          <div className="sm:w-24">
            <MainOutlineButton onClick={onCancel}>Cancel</MainOutlineButton>
          </div>
          <div className="sm:w-24">
            <MainButton isDisabled={isDisabled} onClick={onClickPost}>
              Post
            </MainButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;
