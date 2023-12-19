import Input from "@/utils/Input";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function StudentInfo() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [notes, setNotes] = useState("");

  console.log(notes);

  return (
    <div>
      <div className="text-2xl font-semibold relative after:absolute after:bg-secondary after:h-[2px] after:w-40 after:-bottom-[6px] after:left-0">
        Student Info
      </div>
      <form className="mt-8 flex flex-col gap-6" action="">
        <Input
          className="flex flex-col gap-3"
          inputClass="w-full border py-3 rounded-md px-5 outline-none border-neutral-400 focus:shadow-md fucus:shadow-lime-200 ease-in-out duration-200"
          labelClass="text-xl font-medium text-neutral-700"
          label="Firstname"
          placeholder="Enter Your Firstname"
          asterisk={true}
          type="text"
          initialValue={setFirstname}
          value={firstname}
          id="firstname"
        />

        <Input
          className="flex flex-col gap-3"
          inputClass="w-full border py-3 rounded-md px-5 outline-none border-neutral-400 focus:shadow-md fucus:shadow-lime-200 ease-in-out duration-200"
          labelClass="text-xl font-medium text-neutral-700"
          label="Last Name"
          placeholder="Enter Your lastname"
          asterisk={true}
          type="text"
          initialValue={setLastname}
          value={lastname}
          id="lastname"
        />
        <Input
          className="flex flex-col gap-3"
          inputClass="w-full border py-3 rounded-md px-5 outline-none border-neutral-400 focus:shadow-md fucus:shadow-lime-200 ease-in-out duration-200"
          labelClass="text-xl font-medium text-neutral-700"
          label="Email Address"
          placeholder="Enter Your EmailAddress"
          asterisk={true}
          type="text"
          initialValue={setEmail}
          value={email}
          id="email"
        />
        <div className="flex flex-col gap-3">
          <label
            className="text-xl font-medium text-neutral-700"
            htmlFor="phone"
          >
            Phone Number
            <span className="text-red-500">*</span>
          </label>
          <PhoneInput
            inputClass="outline-none focus:shadow-md fucus:shadow-lime-200 ease-in-out duration-200"
            country={"bd"}
            value={phone}
            autoFormat={true}
            regions={"asia"}
            containerClass="border border-neutral-300 rounded-md"
            inputStyle={{ width: "100%", height: "50px" }}
            onChange={(phone) => setPhone(phone)}
            id="phone"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label
            className="text-xl font-medium text-neutral-700"
            htmlFor="textarea"
          >
            Note
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full border py-3 rounded-md px-5 outline-none border-neutral-400 focus:shadow-md fucus:shadow-lime-200 ease-in-out duration-200"
            name="textarea"
            placeholder="Inter notes details "
            id="textarea"
            cols="30"
            rows="4"
          ></textarea>
        </div>
      </form>
    </div>
  );
}
