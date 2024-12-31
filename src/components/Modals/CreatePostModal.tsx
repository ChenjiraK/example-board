import React, { useState, useMemo, useEffect } from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import InputTextArea from '../Input/InputTextArea';
import InputText from '../Input/InputText';
import MainButton from '../Button/MainButton';
import MainOutlineButton from '../Button/MainOutlineButton';
import MenuDropdown from '../Input/MenuDropdown';
import { emits } from '../../helper/EmitData';
import { COMMUNITY_LIST } from '../../constants/list';
import { IBlog } from '../../types/IParams';
interface ModalProps {
  isOpen: boolean;
  onConfirm: (value: any) => void;
  onCancel: () => void;
  formData?: IBlog | null;
  titleHeader?: string;
}

const CreatePostModal: React.FC<ModalProps> = ({
  isOpen,
  onConfirm,
  onCancel,
  formData,
  titleHeader = 'Create Post',
}) => {
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');
  const [community, setCommunity] = useState<number | null>(null);
  const communityList = COMMUNITY_LIST;

  const isDisabled = useMemo(() => {
    return Boolean(!message);
  }, [message]);

  const communityText = useMemo(() => {
    const listfilter = COMMUNITY_LIST.find(
      (item: any) => item.value === community
    );
    if (listfilter) {
      return listfilter.text;
    }
    return 'Choose a community';
  }, [community]);

  useEffect(() => {
    if (formData) {
      setTitle(formData?.title ?? '');
      setMessage(formData?.content ?? '');
      setCommunity(formData?.communityId ?? 0);
    } else {
      setTitle('');
      setMessage('');
      setCommunity(null);
    }
  }, [formData]);

  function onClickPost() {
    const params = {
      id: formData?.id,
      title,
      content: message,
      communityId: community,
    };
    emits(onConfirm, params);
  }
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 sm:w-610px p-6 relative mx-4">
        <button className="absolute top-1 right-2" onClick={onCancel}>
          <Icon className="text-black text-20" icon={faXmark} />
        </button>
        <h2 className="text-xl font-semibold text-gray-800">{titleHeader}</h2>
        <div className="my-4 border border-success rounded-md h-10 w-full sm:w-52 flex items-center justify-center">
          <MenuDropdown
            dropdownList={communityList}
            customClass="-left-7 top-9 w-52"
            onChangeItem={(item: any) => setCommunity(item.value)}
            onClickDropdown={(item: any) => console.log(item)}
          >
            <div className="flex">
              <p className="pr-3 text-success">{communityText}</p>
              <Icon
                className="self-center text-12 text-success"
                icon={faChevronDown}
              />
            </div>
          </MenuDropdown>
        </div>
        <div className="my-2">
          <InputText
            onChange={setTitle}
            inputValue={title}
            placeholder="Title"
          />
        </div>
        <div className="mt-2">
          <InputTextArea inputValue={message} onChange={setMessage} />
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
