import Input from "@/utils/Input";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function StudentInfo({ formData, setFormData, inputError }) {
  const [phone, setPhone] = useState("");

  // Update form data on input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      phone: phone,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform additional actions here, such as sending the data to a server
    // For this example, we'll just log the form data
    console.log("Submitted Data:", formData);
  };

  return (
    <div>
      <div className="text-2xl font-semibold relative after:absolute after:bg-secondary after:h-[2px] after:w-40 after:-bottom-[6px] after:left-0">
        Student Info
      </div>
      <form className="mt-8 flex flex-col gap-6" onSubmit={handleSubmit}>
        <Input
          className="flex flex-col gap-3"
          inputClass="w-full border py-3 rounded-md px-5 outline-none border-neutral-400 focus:shadow-md fucus:shadow-lime-200 ease-in-out duration-200"
          labelClass="text-xl font-medium text-neutral-700"
          value={formData.firstname}
          initialValue={handleInputChange}
          label="Firstname"
          placeholder="Enter Your Firstname"
          type="text"
          name="firstname"
          id="firstname"
          asterisk={true}
          inputError={inputError}
        />

        <Input
          className="flex flex-col gap-3"
          inputClass="w-full border py-3 rounded-md px-5 outline-none border-neutral-400 focus:shadow-md fucus:shadow-lime-200 ease-in-out duration-200"
          labelClass="text-xl font-medium text-neutral-700"
          label="Last Name"
          placeholder="Enter Your lastname"
          asterisk={true}
          type="text"
          name="lastname"
          value={formData.lastname}
          initialValue={handleInputChange}
          id="lastname"
          inputError={inputError}
        />
        <Input
          className="flex flex-col gap-3"
          inputClass="w-full border py-3 rounded-md px-5 outline-none border-neutral-400 focus:shadow-md fucus:shadow-lime-200 ease-in-out duration-200"
          labelClass="text-xl font-medium text-neutral-700"
          label="Email Address"
          placeholder="Enter Your EmailAddress"
          asterisk={true}
          type="text"
          value={formData.email}
          initialValue={handleInputChange}
          id="email"
          name="email"
          inputError={inputError}
        />
        <div className="flex flex-col gap-3">
          <label
            className="text-xl font-medium text-neutral-700"
            htmlFor="phone"
          >
            Phone Number
          </label>
          <PhoneInput
            inputClass="outline-none focus:shadow-md fucus:shadow-lime-200 ease-in-out duration-200"
            country={"bd"}
            autoFormat={true}
            regions={"asia"}
            containerClass="border border-neutral-300 rounded-md"
            inputStyle={{ width: "100%", height: "50px" }}
            value={formData.phone}
            onChange={(num) => setPhone(num)}
            id="phone"
            name="phone"
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
            value={formData.message}
            onChange={handleInputChange}
            className="w-full border py-3 rounded-md px-5 outline-none border-neutral-400 focus:shadow-md fucus:shadow-lime-200 ease-in-out duration-200"
            name="message"
            placeholder="Inter notes details "
            id="textarea"
            cols="30"
            rows="4"
          ></textarea>
        </div>

        <div className="">
          <h6>How Would you like to attend your Class ?</h6>

          <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
            <input
              className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100"
              type="radio"
              name="flexRadioDefault"
              id="radioDefault01"
            />
            <label
              className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
              htmlFor="radioDefault01"
            >
              Default radio
            </label>
          </div>
          <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
            <input
              className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100"
              type="radio"
              name="flexRadioDefault"
              id="radioDefault02"
              defaultChecked
            />
            <label
              className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
              htmlFor="radioDefault02"
            >
              Default checked radio
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}
