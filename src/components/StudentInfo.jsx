import Input from "@/utils/Input";
import RadioButton from "@/utils/RadioButton";
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
          <div>
            <div className="flex gap-20 pb-3 mt-5">
              <RadioButton
                label="Live Interactive Online Class"
                id="radioDefault01"
              />
              <RadioButton
                label="Student Should travel to my home"
                id="radioDefault02"
              />
            </div>
            <RadioButton
              label="I can travel to the student home"
              id="radioDefault03"
            />
          </div>
          <div className="mt-6">
            <label className="checkbox style-c border-neutral-300">
              <input type="checkbox" />
              <div className="checkbox__checkmark"></div>
              <div className="">
                I agree to the website <a href="">terms & conditions</a> and{" "}
                <a href="">terms & conditions</a>
              </div>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}
