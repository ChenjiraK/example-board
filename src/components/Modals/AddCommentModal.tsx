import React, { useState, useMemo } from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import InputTextArea from '../Input/InputTextArea';
import MainButton from '../Button/MainButton';
import MainOutlineButton from '../Button/MainOutlineButton';
import { emits } from '../../helper/EmitData';
interface ModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const AddCommentModal: React.FC<ModalProps> = ({
  isOpen,
  onConfirm,
  onCancel,
}) => {
  const [message, setMessage] = useState('');
  const isDisabled = useMemo(() => {
    return Boolean(!message);
  }, [message]);
  function onClickPost() {
    emits(onConfirm, message);
  }
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
        <button className="absolute top-1 right-2" onClick={onConfirm}>
          <Icon className="text-black text-20" icon={faXmark} />
        </button>
        <h2 className="text-xl font-semibold text-gray-800">Add Comments</h2>
        <div className="mt-2">
          <InputTextArea onChange={setMessage} />
        </div>
        {/* Actions */}
        <div className="mt-4 space-y-3">
          <MainOutlineButton onClick={onCancel}>Cancel</MainOutlineButton>
          <MainButton isDisabled={isDisabled} onClick={onClickPost}>
            Post
          </MainButton>
        </div>
      </div>
    </div>
  );
};

export default AddCommentModal;
