import { ReactNode } from "react";

type AdminModalProps = {
  onSave: () => void;
  onDiscard: () => void;
};

const AdminModal = ({ onSave, onDiscard }: AdminModalProps) => {
  return (
    <div className="fixed bottom-0 z-50 w-full align-custom-center p-2">
      <div className="block flex-col items-start w-1/2 space-y-2 bg-gray-700 text-white md:flex-row md:space-y-0 md:items-stretch p-2 rounded-md">
        <div className="flex w-full justify-between">
          <div className="text-white focus:outline-none focus:ring-4 font-normal rounded-md py-2.5 text-center p-2">
            <span className="pr-2 text-yellow-500 font-semibold">
              Attenzione!
            </span>
            Ci sono delle modifiche non salvate!
          </div>
          <hr className="border-transparent" />

          <div className="flex">
            <button
              className="text-white focus:outline-none focus:ring-4 font-medium rounded-md text-sm y-2.5 text-center mr-2 hover:underline p-2"
              onClick={onDiscard}
            >
              Ripristina
            </button>
            <hr className="border-transparent" />
            <button
              className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm py-2.5 text-center p-2"
              onClick={onSave}
            >
              Salva modifiche
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminModal;
