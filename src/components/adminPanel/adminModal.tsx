import { getIsEditable } from "@/firebase/firebase.config";

type AdminModalProps = {
  onSave: (data: any) => void;
  isSaving: boolean;
};

export default function AdminModal({ onSave, isSaving }: AdminModalProps) {
  const isEditable = getIsEditable(); // Ottieni il valore di isEditable

  return (
    <>
      {isEditable && (
        <section className="fixed bottom-0 z-50 w-full align-custom-center p-2">
          <div className="block flex-col items-start w-1/2 space-y-2 bg-gray-700 text-white md:flex-row md:space-y-0 md:items-stretch p-2 rounded-md">
            <div className="flex w-full justify-between">
              <div className="text-white focus:outline-none focus:ring-4 font-normal rounded-md py-2.5 text-center p-2">
                <span className="pr-2 text-yellow-500 font-semibold text-md">
                  Attenzione!
                </span>
                Ci sono delle modifiche non salvate!
              </div>
              <hr className="border-transparent" />

              <div className="flex">
                {/* <button
                  className="text-white focus:outline-none focus:ring-4 font-medium rounded-md text-sm y-2.5 text-center mr-2 hover:underline p-2"
                  // onClick={onDiscard}
                >
                  Ripristina
                </button> */}
                <hr className="border-transparent" />
                <button
                  className={`text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm py-2.5 text-center p-2 ${
                    isSaving ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={onSave} // Aggiunto il gestore onClick
                  disabled={isSaving}
                >
                  {isSaving ? "Salvataggio in corso..." : "Salva modifiche"}
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
