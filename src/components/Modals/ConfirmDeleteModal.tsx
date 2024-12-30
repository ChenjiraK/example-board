import React from 'react';

interface ModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmDeleteModel: React.FC<ModalProps> = ({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null; // Don't render if not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        {/* Title */}
        <h2 className="text-gray-800 text-center">{title}</h2>

        {/* Message */}
        <p className="mt-2 text-gray-600 text-center">{message}</p>

        {/* Actions */}
        <div className="mt-4 space-y-3 sm:flex sm:space-x-3 sm:space-y-0">
          <button
            className="px-4 py-1 bg-red-600 text-white rounded-md w-full"
            onClick={onConfirm}
          >
            Delete
          </button>
          <button
            className="px-4 py-1 text-gray-600 border rounded-md w-full"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModel;
