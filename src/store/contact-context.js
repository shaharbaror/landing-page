import { createContext } from "react";
import { useState } from "react";

const ContactContext = createContext({
    isShow:true,
    setIsShowFalse:()=>{},
    setIsShowTrue:()=>{},
});


export const ContactProvider = (props) => {

   const [isShowForm, setIsShowForm] = useState(true);

   const setIsShowFalse = () => {
    setIsShowForm(false);
   };
   const setIsShowTrue = () => {
    setIsShowForm(true);
   };

   const contact = {
        isShow: isShowForm,
        setIsShowFalse,
        setIsShowTrue,
   }


    return <ContactContext.Provider value={contact} >{props.children}</ContactContext.Provider>
}



export default ContactContext;