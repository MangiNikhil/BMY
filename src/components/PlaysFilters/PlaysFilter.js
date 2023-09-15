import { Disclosure } from "@headlessui/react";

import { BiChevronDown, BiChevronUp } from "react-icons/bi";
//import { icons } from 'react-icons'
export const MyDisclosure = (props) => {
  return (
   <div className="bg-white mb-3 p-3 rounded-lg ">
   <Disclosure>
   {({ open }) => (
     <div className="">
       <Disclosure.Button className="flex items-center gap-3">
         {open ? <BiChevronUp /> : <BiChevronDown />}

         <span className={open ? "text-red-600 pb-2" : "text-gray-700"}>
           {props.title}
         </span>
       </Disclosure.Button>
   
<div className="">

<Disclosure.Panel className="text-gray-200  flex flex-wrap gap-4">
{props.Filters.map((tag) => (
  <div>
    <div className="border-2 border-gray-200 p-2 cursor-pointer	 rounded-md ">
      <span className="text-red-600">{tag}</span>
    </div>
  </div>
))}
</Disclosure.Panel> 
</div>
     </div>
   )}
 </Disclosure>
   </div>
  );
};
