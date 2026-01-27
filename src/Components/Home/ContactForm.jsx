import React from "react";
import { useForm } from "react-hook-form";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    alert("Message sent successfully!");
    reset();
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-0">
        {/* Left Side - Contact Info */}
        <div className="md:col-span-2 p-8 md:p-12 ">
          <div className="space-y-12 pt-8">
            {/* Location */}
            <div className="flex gap-4">
              <div className="text-white p-4 rounded-sm  shrink-0 flex items-center justify-center w-12 h-12 bg-amber-700">
                <FiMapPin size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800  text-sm">
                  Location:
                </h3>
                <p className=" text-xs leading-relaxed underline text-[#a67c52]">
                  612-7 Roanoke Rd, <br /> Toronto, ON M3A 1E3, <br /> Canada
                </p>
                <a
                  href="#"
                  className="hover:underline font-medium flex items-center mt-1 "
                >
                  Google Maps <MdArrowOutward />
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="text-white p-4 rounded-sm shrink-0 flex items-center justify-center w-12 h-12 bg-amber-700">
                <FiMail size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 ">Email:</h3>
                <p className="text-gray-700 text-xl font-semibold">
                  contact@emailcom
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="text-white p-4 rounded-sm shrink-0 flex items-center justify-center w-12 h-12 bg-amber-700">
                <FiPhone size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 ">Phone:</h3>
                <div className="text-gray-700 text-xl font-semibold">
                  <p>+1-416-8241228</p>
                  <p>+1-416-8241228</p>
                </div>
              </div>
            </div>

            {/* Read More */}
            <button className="text-amber-800 font-medium cursor-pointer flex items-center border rounded px-4 py-1 ml-15">
              Read More <MdArrowOutward />
            </button>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="md:col-span-3 p-8 md:p-12 shadow-lg bg-[#ebe5de] border-l-2 border-[#be7d60]">
          <div className="mb-12">
            <p className="text-gray-800 text-3xl font-semibold ">
              Fill out the form we will
              <br />
              get in touch shortly
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            {/* First Name & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <input
                  type="text"
                  placeholder="First name.."
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  className={`w-full px-0 py-2 bg-transparent border-0 border-b border-[#be7d60] focus:outline-none focus:border-b focus:border-gray-700 text-sm placeholder-gray-600 ${
                    errors.firstName ? "border-b border-red-500" : ""
                  }`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Last name.."
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                  className={`w-full px-0 py-2 bg-transparent border-0 border-b border-[#be7d60] focus:outline-none focus:border-b focus:border-gray-700 text-sm placeholder-gray-600 ${
                    errors.lastName ? "border-b border-red-500" : ""
                  }`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <input
                  type="email"
                  placeholder="Email.."
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email format",
                    },
                  })}
                  className={`w-full px-0 py-2 bg-transparent border-0 border-b border-[#be7d60] focus:outline-none focus:border-b focus:border-gray-700 text-sm placeholder-gray-600 ${
                    errors.email ? "border-b border-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Phone.."
                  {...register("phone", {
                    required: "Phone is required",
                  })}
                  className={`w-full px-0 py-2 bg-transparent border-0 border-b border-[#be7d60] focus:outline-none focus:border-b focus:border-gray-700 text-sm placeholder-gray-600 ${
                    errors.phone ? "border-b border-red-500" : ""
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            {/* Subject */}
            <div>
              <input
                type="text"
                placeholder="Subject.."
                {...register("subject", {
                  required: "Subject is required",
                })}
                className={`w-full px-0 py-2 bg-transparent border-0 border-b border-[#be7d60] focus:outline-none focus:border-b focus:border-gray-700 text-sm placeholder-gray-600 ${
                  errors.subject ? "border-b border-red-500" : ""
                }`}
              />
              {errors.subject && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.subject.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                placeholder="Message.."
                rows="6"
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters",
                  },
                })}
                className={`w-full px-0 py-2 bg-transparent border-0 border-b border-[#be7d60] focus:outline-none focus:border-b focus:border-gray-700 resize-none text-sm placeholder-gray-600 ${
                  errors.message ? "border-b border-red-500" : ""
                }`}
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex pt-6">
              <button
                type="submit"
                className="bg-black cursor-pointer text-white px-8 py-2 rounded-sm font-medium hover:bg-gray-800 transition duration-300 text-sm"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
