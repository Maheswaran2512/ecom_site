// 'use client';

// import React, { useState } from 'react';

// export default function ValidatedForm() {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [errors, setErrors] = useState({});
//   const [isSuccess, setIsSuccess] = useState(false);

//   // Validation Logic
//   const validate = () => {
//     let tempErrors = {};
    
//     // Email regex check
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!formData.email) {
//       tempErrors.email = 'Email is required';
//     } else if (!emailRegex.test(formData.email)) {
//       tempErrors.email = 'Please enter a valid email address';
//     }

//     // Password strength check
//     if (!formData.password) {
//       tempErrors.password = 'Password is required';
//     } else if (formData.password.length < 6) {
//       tempErrors.password = 'Password must be at least 6 characters long';
//     }

//     setErrors(tempErrors);
//     // Returns true if the errors object has no keys (meaning 0 errors)
//     return Object.keys(tempErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSuccess(false);

//     if (validate()) {
//       setIsSuccess(true);
//       console.log('Form is valid! Sending data:', formData);
//       // Clear form on success
//       setFormData({ email: '', password: '' }); 
//     }
//   };

//   return (
//     <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
//       <div className="bg-white w-full max-w-sm p-6 rounded-lg shadow-md">
//         <h2 className="text-xl font-semibold mb-4 text-slate-800">Create Account</h2>

//         <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          
//           {/* Email Input */}
//           <div>
//             <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
//             <input
//               type="email"
//               value={formData.email}
//               onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//               className={`w-full p-2.5 border rounded-md outline-none transition-colors ${
//                 errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-300 focus:border-blue-500'
//               }`}
//             />
//             {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//           </div>

//           {/* Password Input */}
//           <div>
//             <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
//             <input
//               type="password"
//               value={formData.password}
//               onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//               className={`w-full p-2.5 border rounded-md outline-none transition-colors ${
//                 errors.password ? 'border-red-500 focus:border-red-500' : 'border-slate-300 focus:border-blue-500'
//               }`}
//             />
//             {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white p-2.5 rounded-md font-medium hover:bg-blue-700 transition-colors"
//           >
//             Sign Up
//           </button>

//           {/* Global Success Message */}
//           {isSuccess && (
//             <div className="bg-green-50 text-green-600 p-2 text-sm rounded text-center font-medium">
//               Account created successfully!
//             </div>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// }