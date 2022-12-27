import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: String;
  email: String;
  subject: String;
  message: String;
};

type Props = {};

function ContactMe({}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:savinaykumar@outlook.com?subject=${data.subject}&body=Hi, My Name is ${data.name}(${data.email}). ${data.message}`
  };

  return (
    <div className="h-screen relative flex flex-col text-center md:flex-row md:text-left max-w-7xl px-10 mx-auto justify-evenly items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-3xl font-semibold text-center">
          I have got just what you need{" "}
          <span className="underline decoration-[#F7AB0A]">Lets talk.</span>
        </h4>

        <div className="space-y-7">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-6 w-6 text-[#F7AB0A] animate-pulse" />
            <p className="text-xl">+1234567890</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="h-6 w-6 text-[#F7AB0A] animate-pulse" />
            <p className="text-xl">Bangalore, India</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-6 w-6 text-[#F7AB0A] animate-pulse" />
            <p className="text-xl">savinaykumar@outlook.com</p>
          </div>
        </div>

        <form 
          onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input
              {...register("name")}
              className="contactInput"
              placeholder="Name"
              type="text"
            />
            <input
              {...register("email")}
              className="contactInput"
              placeholder="Email"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            className="contactInput"
            placeholder="How are you?"
            type="text"
          />
          <textarea
            {...register("message")}
            className="contactInput"
            placeholder="Descibed Here..."
          />
          <button className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
