import { ChangeEvent, useState } from "react";
import { deleteContact } from "../../../../core/slice/contactSlice";
import { ContactStatus } from "../../../../core/enum";
import { IContact } from "../../../../core/types";
import { useAppDispatch } from "../../../../core/hook";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
function ContactDetailModal({
  newContact,
  updateContactData,
  onAddContactClick,
  onCancelClick,
  isAddContactView = false,
}: {
  newContact: IContact;
  updateContactData: ({
    e,
    key,
    value,
  }: {
    key: keyof IContact;
    value?: ContactStatus;
    e?: ChangeEvent<HTMLInputElement>;
  }) => void;
  onCancelClick: () => void;
  onAddContactClick: () => void;
  isAddContactView?: boolean;
}) {
  const [isEditView, setIsEditView] = useState(isAddContactView);
  const [errors, setErrors] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const updateData = ({
    e,
    key,
    value,
  }: {
    key: keyof IContact;
    value?: ContactStatus;
    e?: ChangeEvent<HTMLInputElement>;
  }) => {
    // Handling Errors
    if (key === "number") {
      if (e?.target.value.length !== 10) {
        setErrors("Please enter valid number");
      } else setErrors(null);
    }
    updateContactData({ e, key, value });
  };

  // delete contact
  const deleteData = () => {
    dispatch(deleteContact(newContact.id));
    // close modal
    onCancelClick();
  };

  return (
    <div className="w-full h-screen flex fixed items-center justify-center bg-black/50 z-10">
      <div className="addContactModal h-min w-[350px] sm:w-[400px] bg-white flex flex-col rounded-md shadow-lg ">
        
        {/* Header */}
        <div
          className="header bg-cyan-900 text-white px-[20px] py-[18px] rounded-tr-md
           rounded-tl-md flex justify-between items-center"
        >
          <h1 className="text-xl font-bold">Contact details</h1>

          <CancelOutlinedIcon
            onClick={onCancelClick}
            className="cursor-pointer text-white"
          />
        </div>
        
        {/* Form */}
        <div className="px-[20px] py-[24px] flex flex-col gap-3">
          <div>
            <h4 className="font-semibold">First Name</h4>
            <input
              disabled={!isEditView}
              className="border-b-2 w-full"
              placeholder="Enter first name"
              value={newContact?.firstName}
              onChange={(e) => updateData({ e, key: "firstName" })}
            />
          </div>
          <div>
            <h4 className="font-semibold">Last Name</h4>
            <input
              disabled={!isEditView}
              className="border-b-2 w-full"
              value={newContact?.lastName}
              placeholder="Enter first name"
              onChange={(e) => updateData({ e, key: "lastName" })}
            />
          </div>
          <div>
            <p className="font-semibold">Contact number</p>
            <input
              disabled={!isEditView}
              className="border-b-2 w-full"
              value={newContact?.number}
              placeholder="Enter contact number"
              type="number"
              onChange={(e) => updateData({ e, key: "number" })}
            />
            {/* Error text */}
            {errors && <p className="text-red-700">{errors}</p>}
          </div>

          <div className="status">
            <p className="font-semibold">Status</p>
            <div className="w-full flex items-center gap-[20px]">
              {Object.keys(ContactStatus).map((key) => {
                const k = key as keyof typeof ContactStatus;
                return (
                  <div className="active flex gap-[3px]">
                    <input
                      disabled={!isEditView}
                      type="radio"
                      className="cursor-pointer"
                      checked={newContact?.status === ContactStatus[k]}
                      onChange={() =>
                        updateData({
                          key: "status",
                          value: ContactStatus[k],
                        })
                      }
                    />
                    <h5>{k}</h5>
                  </div>
                );
              })}
            </div>
          </div>
         
          {/* CTAs */}
          {isEditView ? (
            <div className="addContact w-full flex items-center justify-end gap-[10px] mt-[20px]">
              <button className="text-sm" onClick={onCancelClick}>
                Cancel
              </button>
              <button
                className="px-[16px] py-[10px] bg-cyan-800 rounded text-white shadow-lg"
                onClick={onAddContactClick}
              >
                <p className="text-sm ">Add contact</p>
              </button>
            </div>
          ) : (
            <div className="addContact w-full flex items-center justify-end gap-[10px] mt-[20px]">
              <button className="text-sm" onClick={deleteData}>
                Delete
              </button>
              <button
                className="px-[16px] py-[10px] bg-cyan-800 rounded text-white shadow-lg"
                onClick={() => setIsEditView(true)}
              >
                <p className="text-sm">Edit contact</p>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactDetailModal;
