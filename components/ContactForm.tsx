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

  const [activeDiagnostic, setActiveDiagnostic] = useState<string | null>(null);
  const handleQuickSelectIssue = (issueId: string, issueText: string) => {
    setActiveDiagnostic(issueId);
    setMessage(`Hi, I am experiencing a ${issueText}. Please help me fix it.`);
  };

  // Helper helper function to trigger your custom Notification component
  const triggerNotification = (message: string, type = "info") => {
    const event = new CustomEvent("notify", {
      detail: {
        message: message,
        type: type, // 'success' | 'error' | 'info'
        duration: 4000
      }
    });
    window.dispatchEvent(event);
  };

  const handleEmailChange = (value: string) => {
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

  const handlePhoneChange = (value: string) => {
    const cleanValue = value.replace(/\D/g, "");
    setNumber(cleanValue);

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!cleanValue) {
      setErrors((prev) => ({ ...prev, number: "Phone is required" }));
    } else if (!phoneRegex.test(cleanValue)) {
      setErrors((prev) => ({ ...prev, number: "Invalid format. Must be 10 digits" }));
    } else {
      setErrors((prev) => ({ ...prev, number: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const hasErrors = !!errors.email || !!errors.number;
    const basicFieldsFilled = !!name && !!email && !!number && !!enquiry && !!message;

    let selectionValid = true;

    if (enquiry === "service" && !selectedService) selectionValid = false;
    if (enquiry === "product" && !selectedProduct) selectionValid = false;

    if (hasErrors) {
      if (errors.email) {
        triggerNotification("Please fill your email correctly.", "error");
        return;
      }

      if (errors.number) {
        triggerNotification("Please fill your mobile number correctly.", "error");
        return;
      }
    }

    if (!basicFieldsFilled || !selectionValid) {
      triggerNotification("Please fill out all required form fields.", "error");
      return;
    }

    const payload = {
      name,
      email,
      number,
      enquiry,
      selectedService: enquiry === "service" ? selectedService : "",
      selectedProduct: enquiry === "product" ? selectedProduct : "",
      message,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        const firstError = data?.errors
          ? Object.values(data.errors as Record<string, string>)[0]
          : data?.message || "Please fill out the required fields.";
        triggerNotification(firstError, "error");
        return;
      }

      triggerNotification(data?.message || "Thanks! Your message has been sent successfully.", "success");

      setName("");
      setEmail("");
      setNumber("");
      setMessage("");
      setEnquiry("");
      setSelectedService("");
      setSelectedProduct("");
    } catch (error) {
      console.error(error);
      triggerNotification("Unable to send the form right now. Please try again.", "error");
    }
  };

  return (
    <div className="w-full max-w-[95%] mx-auto min-h-screen flex wrap items-center justify-center max-tablet:max-w-[100%] ">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-center">
        <div className="lg:col-span-5 flex flex-col gap-6 text-[#1a3b8b] p-2">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full w-max">
            Audio Fix Lab
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-none text-slate-900">
            Don't Replace It. <br />
            <span className="text-indigo-600">Rescue It.</span>
          </h1>
          <p className="text-slate-600 text-base md:text-lg max-w-md">
            Select your primary issue below to quick-fill your message form, or directly type your custom enquiry to our right-side dispatch window.
          </p>
          <div className="grid grid-cols-2 gap-3 mt-2">
            {[
              { id: "audio", label: "🔇 Audio Outage", text: "complete loss of sound in one ear channel" },
              { id: "battery", label: "🔋 Battery Drain", text: "battery depletion issue where it won't hold a charge" },
              { id: "hinge", label: "🛠️ Broken Hinge", text: "snapped structural headband headband snap structural fault" },
              { id: "bluetooth", label: "📶 Pair Failure", text: "wireless pairing issue where Bluetooth disconnects constantly" },
            ].map((issue) => (
              <button
                key={issue.id}
                type="button"
                onClick={() => handleQuickSelectIssue(issue.id, issue.text)}
                className={`p-4 text-left rounded-2xl border text-sm font-semibold transition-all shadow-sm ${activeDiagnostic === issue.id
                  ? "bg-indigo-600 text-white border-indigo-600 scale-[1.02]"
                  : "bg-white text-slate-700 border-slate-200 hover:border-indigo-400 hover:bg-slate-50"
                  }`}
              >
                {issue.label}
              </button>
            ))}
          </div>

          <div className="text-xs text-slate-400 mt-2 font-medium">
            ⚡ Supported Brands: Sony, Bose, Apple , Boat , Zebronics , etc .
          </div>
        </div>
        <div className="lg:col-span-7 w-full max-tablet:max-w-[100%]">
          <form
            onSubmit={handleSubmit}
            className="uppercase flex flex-col gap-5 border-gray-0 rounded-3xl p-5 bg-blue-100 shadow-xl shadow-blue-800"
            noValidate
            method="post"
          >
            {/* Name & Email Row */}
            <div className="flex flex-col gap-5 justify-between items-center lg:flex-row">
              <div className="flex gap-5 justify-center items-center w-full h-full">
                <label htmlFor="name" className="p-5 min-w-[100px]">Name...</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  maxLength={30}
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-full w-full rounded-4xl p-3 shadow-xl outline-none"
                  required
                />
              </div>
              <div className="flex gap-5 justify-center items-center w-full h-full">
                <label htmlFor="email" className="p-5 min-w-[100px] whitespace-nowrap">Email ID</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => handleEmailChange(e.target.value)}
                  required
                  className={`h-full w-full md rounded-4xl p-3 shadow-xl outline-none border transition-colors ${errors.email ? "border-red-500 bg-red-50" : "border-transparent"
                    }`}
                />
                {errors.email && (<span className="absolute text-red-500 mt-15 text-[10px] tracking-normal"> {errors.email}</span>)}
              </div>
            </div>

            {/* Phone & Enquiry Row */}
            <div className="flex gap-5 justify-normal items-center lg:flex-row flex-col">
              <div className="flex gap-5 justify-center items-center w-full h-full">
                <label htmlFor="number" className="p-5 min-w-[100px]">Phone</label>
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={10}
                  name="number"
                  id="number"
                  placeholder="Enter Your Number"
                  value={number}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  required
                  className={`w-full h-full rounded-4xl p-3 shadow-xl outline-none border transition-colors ${errors.number ? "border-red-500 bg-red-50" : "border-transparent"
                    }`}
                />
                {errors.number && (<span className="absolute text-red-500 mt-15 text-[10px] tracking-normal">{errors.number}</span>)}
              </div>
              <div className="flex gap-5 justify-center items-center w-full h-full">
                <label htmlFor="enquiry" className="p-5 min-w-[100px]">Enquiry</label>
                <select
                  name="enquiry"
                  id="enquiry"
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
            <div className="flex gap-5 justify-center items-center w-full h-full">
              <label htmlFor="message" className="p-5 min-w-[100px]">Message</label>
              <textarea
                rows={4}
                cols={50}
                maxLength={300}
                value={message} // Show quick message if available, else show textarea input
                name="message"
                id="message"
                placeholder="Enter Your Message"
                onChange={(e) => setMessage(e.target.value)}
                className="h-full w-full rounded-4xl p-5 shadow-xl outline-none resize-none md-w-full sm:w-full"
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
        </div>
      </div>
      {/* <script src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script> */}
    </div>
  );
}