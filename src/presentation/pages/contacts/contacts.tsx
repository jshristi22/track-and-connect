import React, { ChangeEvent, useState } from "react";
import { upsertContact } from "../../../core/slice/contactSlice";
import { ContactStatus } from "../../../core/enum";
import ContactDetailModal from "./components/contact_details_modal";
import { InfoOutlined } from "@mui/icons-material";
import { IContact } from "../../../core/types";
import { useAppDispatch, useAppSelector } from "../../../core/hook";

const initialContactState: {
  contactDetails: IContact;
  isNewContact: boolean;
} = {
  contactDetails: {
    firstName: "",
    lastName: "",
    number: "",
    status: ContactStatus.Inactive,
  },
  isNewContact: true,
};

function Contacts() {
  const [newContact, setNewContact] = useState<{
    contactDetails: IContact;
    isNewContact?: boolean;
  } | null>(null);

  const contactData = useAppSelector((state) => state.contacts.contacts);
  const dispatch = useAppDispatch();

  const updateContactData = ({
    e,
    key,
    value,
  }: {
    key: keyof IContact;
    value?: ContactStatus;
    e?: ChangeEvent<HTMLInputElement>;
  }) => {
    // Updating data
    if (e) {
      setNewContact((prev) => ({
        ...prev,
        contactDetails: {
          ...prev?.contactDetails,
          [key]: e.target.value as string,
        },
      }));
    } else {
      setNewContact((prev) => ({
        ...prev,
        contactDetails: {
          ...prev?.contactDetails,
          [key]: value,
        },
      }));
    }
  };

  // upsert contact
  const onAddContactClick = () => {
    dispatch(upsertContact(newContact?.contactDetails));

    // after storing data in redux
    setNewContact(null);
  };

  return (
    <>
    {/* Add/View contact */}
      {newContact && (
        <ContactDetailModal
          isAddContactView={newContact.isNewContact}
          newContact={newContact.contactDetails}
          updateContactData={(data) => updateContactData({ ...data })}
          onCancelClick={() => {
            setNewContact(null);
          }}
          onAddContactClick={onAddContactClick}
        />
      )}

      {/* Contact list */}
      <div className="flex-1 px-[40px] py-[30px]">
        
        {/* Header */}
        <div className="header flex justify-between align-top border-b-2 mb-[20px]">
          <h1 className="text-md sm:text-3xl font-bold mb-[8px]">
            Contact List
          </h1>
          <button
            className="border-2 bg-cyan-800 px-[6px] sm:px-[10px] rounded mb-[8px]"
            onClick={() => {
              setNewContact(initialContactState);
            }}
          >
            <p className="text-white text-sm sm:text-lg">+</p>
          </button>
        </div>
        
        {/* List */}
        {contactData.length > 0 ? (
          <div className="list flex flex-col gap-[20px]">
            {contactData?.map((contact: IContact) => {
              return (
                <div
                  className="flex items-center justify-between gap-[6px]
                 bg-slate-100 px-[8px] py-[12px] sm:px-[20px] sm:py-[24px] 
                 rounded-md shadow-lg "
                >
                  <h4 className="uppercase text-sm sm:text-lg ">
                    {contact?.firstName} {contact?.lastName}
                  </h4>
                  <div
                    className="sm:hidden text-cyan-800"
                    onClick={() => {
                      setNewContact({
                        contactDetails: contact,
                        isNewContact: false,
                      });
                    }}
                  >
                    <InfoOutlined fontSize="small" />
                  </div>
                  <button
                    className="hidden sm:block px-[6px] py-[3px] sm:px-[14px] 
                    sm:py-[6px] bg-cyan-800 rounded text-white shadow-lg"
                    onClick={() => {
                      setNewContact({
                        contactDetails: contact,
                        isNewContact: false,
                      });
                    }}
                  >
                    View Details
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          
          // Empty state
          <div className="emptyState w-full h-4/5 flex items-center justify-center">
            <h1 className="text-xl text-gray-400 font-bold">No contacts yet</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default Contacts;
