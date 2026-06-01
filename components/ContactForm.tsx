// "use client";

// import { useState } from "react";
// import Servicesjson from "@/lib/Services.json";
// import Productsjson from "@/lib/Products.json";
// import Listing from "@/components/Listing";

// export default function ContactForm() {
//   const [enquiry, setEnquiry] = useState("");
//   const [selectedService, setSelectedService] = useState("");
//   const [selectedProduct, setSelectedProduct] = useState("");

//   return (
//         <form action="#" className="uppercase flex flex-col gap-5 border-gray-0 rounded-3xl p-5 bg-blue-100 shadow-xl shadow-blue-800">
//           <div className="flex gap-5 justify-between items-center">
//             <div className="flex gap-5 items-center">
//               <label htmlFor="name" className="p-5">Name...</label>
//               <input type="text" name="name" placeholder="Enter Your Name" className="h-full rounded-4xl p-3 shadow-xl" required />
//             </div>
//             <div className="flex gap-5 items-center">
//               <label htmlFor="email" className="p-5">Email ID</label>
//               <input type="email" name="email" placeholder="Enter Your Email" required className="h-full rounded-4xl p-3 shadow-xl" />
//             </div>
//           </div>

//           <div className="flex gap-5 justify-normal items-center ">
//             <div className="flex gap-5 items-center ">
//               <label htmlFor="number" className="p-5">Phone</label>
//               <input type="number" name="number" placeholder="Enter Your Number" required className="h-full rounded-4xl p-3 shadow-xl " />
//             </div>
//             <div className="flex gap-5 items-center">
//               <label htmlFor="enquiry" className="p-5">Enquiry</label>
//               <select name="enquiry" value={enquiry} className="w-full h-full rounded-4xl p-3 shadow-xl " required onChange={(e) => setEnquiry(e.target.value)}>
//                 <option value="">Select</option>
//                 <option value="service">Service</option>
//                 <option value="product">Product</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>
//           </div>
//           {enquiry == "service" && (<Listing labelName="service" selectName="service" items={Servicesjson.list} onChange={setSelectedService} />)}
//           {enquiry == "product" && (<Listing labelName="product" selectName="product" items={Productsjson.list} onChange={setSelectedProduct} />)}
//           <div className="flex gap-10 items-center justify-between">
//             <label htmlFor="message" className="p-5">Message</label>
//             <textarea rows={4} cols={50} className="h-full rounded-4xl p-5 shadow-xl" name="message" placeholder="Enter Your Message"></textarea>
//           </div>
//           <div className="flex items-center justify-center">
//             <button type="submit" className="p-3 border-1 font-bold border-blue-100 text-white rounded-2xl bg-indigo-500 shadow-lg shadow-indigo-500/50">Send . . .</button>
//           </div>
//         </form>
//   );
// }

"use client";

import { useState } from "react";
import Servicesjson from "@/lib/Services.json";
import Productsjson from "@/lib/Products.json";
import Listing from "@/components/Listing";

export default function ContactForm() {
  // 1. Core Form States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [enquiry, setEnquiry] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");

  // 2. Real-time Error States
  const [errors, setErrors] = useState({
    email: "",
    number: "",
  });

  // Helper helper function to trigger your custom Notification component
  const triggerNotification = (message, type = "info") => {
    const event = new CustomEvent("notify", {
      detail: {
        message: message,
        type: type, // 'success' | 'error' | 'info'
        duration: 4000
      }
    });
    window.dispatchEvent(event);
  };

  // 3. Validation Rules While Typing
  const handleEmailChange = (value) => {
    setEmail(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!value) {
      setErrors((prev) => ({ ...prev, email: "Email is required" }));
    } else if (!emailRegex.test(value)) {
      setErrors((prev) => ({ ...prev, email: "Invalid email format" }));
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  };

  const handlePhoneChange = (value) => {
    // Sanitize input to only allow number characters
    const cleanValue = value.replace(/\D/g, "");
    setNumber(cleanValue);

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!cleanValue) {
      setErrors((prev) => ({ ...prev, number: "Phone is required" }));
    } else if (!phoneRegex.test(cleanValue)) {
      setErrors((prev) => ({ ...prev, number: "Must be exactly 10 digits" }));
    } else {
      setErrors((prev) => ({ ...prev, number: "" }));
    }
  };

  // 4. Submission Guard Check
  const handleSubmit = (e) => {
    e.preventDefault();

    const hasErrors = errors.email || errors.number;
    const basicFieldsFilled = name && email && number && enquiry && message;

    // Validate conditional sub-selections
    let selectionValid = true;
    if (enquiry === "service" && !selectedService) selectionValid = false;
    if (enquiry === "product" && !selectedProduct) selectionValid = false;

    // Trigger alerts using your notification layout system
    if (hasErrors) {
      triggerNotification("Please fix the validation errors before submitting.", "error");
      return;
    }

    if (!basicFieldsFilled || !selectionValid) {
      triggerNotification("Please fill out all required form fields.", "error");
      return;
    }

    // Success code path
    if (!hasErrors && basicFieldsFilled && selectionValid) {
      console.log("Form data is valid! Submitting:", {
        name,
        email,
        number,
        enquiry,
        message,
        selectionDetails: enquiry === "service" ? selectedService : selectedProduct
      });

      triggerNotification("Form submitted successfully!", "success");

      // Reset Form fields safely
      setName(""); setEmail(""); setNumber(""); setMessage(""); setEnquiry("");
      setSelectedService(""); setSelectedProduct("");
    } else {
      triggerNotification("Please fill in all required fields accurately before sending.", "error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="uppercase flex flex-col gap-5 border-gray-0 rounded-3xl p-5 bg-blue-100 shadow-xl shadow-blue-800"
      noValidate
    >
      {/* Name & Email Row */}
      <div className="flex gap-5 justify-between items-center">
        <div className="flex gap-5 items-center w-1/2">
          <label htmlFor="name" className="p-5 min-w-[100px]">Name...</label>
          <input
            type="text"
            name="name"
            maxLength={30}
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-full w-full rounded-4xl p-3 shadow-xl outline-none"
            required
          />
        </div>

        <div className="flex gap-5 items-center w-1/2 relative">
          <label htmlFor="email" className="p-5 min-w-[100px]">Email ID</label>
          <div className="flex flex-col w-full">
            {errors.email && (
              <span className="text-red-600 text-[11px] font-sans lowercase tracking-normal absolute bottom-[1px] left-[260px]">
                {errors.email}
              </span>
            )}
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
              required
              className={`h-full w-full rounded-4xl p-3 shadow-xl outline-none border transition-colors ${errors.email ? "border-red-500 bg-red-50" : "border-transparent"
                }`}
            />

          </div>
        </div>
      </div>

      {/* Phone & Enquiry Row */}
      <div className="flex gap-5 justify-normal items-center">
        <div className="flex gap-5 items-center w-1/2 relative">
          <label htmlFor="number" className="p-5 min-w-[100px]">Phone</label>
          <div className="flex flex-col w-full">
            <input
              type="text"
              inputMode="numeric"
              maxLength={10}
              name="number"
              placeholder="Enter Your Number"
              value={number}
              onChange={(e) => handlePhoneChange(e.target.value)}
              required
              className={`h-full w-full rounded-4xl p-3 shadow-xl outline-none border transition-colors ${errors.number ? "border-red-500 bg-red-50" : "border-transparent"
                }`}
            />
            {errors.number && (
              <span className="text-red-600 text-[11px] font-sans lowercase tracking-normal absolute bottom-[-20px] left-[105px]">
                {errors.number}
              </span>
            )}
          </div>
        </div>

        <div className="flex gap-5 items-center w-1/2">
          <label htmlFor="enquiry" className="p-5 min-w-[100px]">Enquiry</label>
          <select
            name="enquiry"
            value={enquiry}
            className="w-full h-full rounded-4xl p-3 shadow-xl outline-none cursor-pointer"
            required
            onChange={(e) => {
              setEnquiry(e.target.value);
              setSelectedService("");
              setSelectedProduct("");
            }}
          >
            <option value="">Select</option>
            <option value="service">Service</option>
            <option value="product">Product</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      {/* Conditional Sub-menus */}
      {enquiry === "service" && (
        <Listing labelName="service" selectName="service" items={Servicesjson.list} onChange={setSelectedService} />
      )}
      {enquiry === "product" && (
        <Listing labelName="product" selectName="product" items={Productsjson.list} onChange={setSelectedProduct} />
      )}

      {/* Message Textarea Row */}
      <div className="flex gap-10 items-center justify-between">
        <label htmlFor="message" className="p-5 min-w-[100px]">Message</label>
        <textarea
          rows={4}
          cols={50}
          maxLength={300}
          name="message"
          placeholder="Enter Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="h-full w-full rounded-4xl p-5 shadow-xl outline-none resize-none"
          required
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="p-3 px-6 border-1 font-bold border-blue-100 text-white rounded-2xl bg-indigo-500 shadow-lg shadow-indigo-500/50 hover:bg-indigo-600 transition-all active:scale-95"
        >
          Send . . .
        </button>
      </div>
    </form>
  );
}