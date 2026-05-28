import { useState } from "react";
import Servicesjson from "@/lib/Services.json";
import Productsjson from "@/lib/Products.json";
import Listing from "@/components/Listing";



export default function ContactPage() {
	const [enquiry, setEnquiry] = useState("");
	return (
		<div className="flex flex-col flex-1 items-center justify-center bg-zinc-100 font-sans">
			<main className="rounded-lg flex flex-col flex-1 w-full max-w-6xl items-center justify-around text-center py-32 px-16 bg-white gap-20 mt-20 mb-2">
				<h1 className="text-3xl text-black font-bold uppercase mt-10">Contact Page</h1>
				{/* <form className="flex flex-col flex-1 w-full max-w-6xl bg-blue-100 p-8 borntotder-2 border-gray-300 rounded-lg box-shadow-md box-shadow-gray-400">
					<div className="flex flex-row flex-1 gap-5 item-center justify-between">
						<label htmlFor="name" className="item-center text-black font-bold mb-2">Name</label>
						<input type="text" id="name" name="name" placeholder="Enter your Name" className="border border-gray-300 rounded-md p-2 mb-4" />
					</div>
					<div className="flex flex-row flex-1 gap-5 item-center justify-between">
						<label htmlFor="name" className="text-left text-black font-bold mb-2">Email ID</label>
						<input type="text" id="name" name="name" placeholder="Enter your Email ID" className="border border-gray-300 rounded-md p-2 mb-4" />
					</div>
					<div className="flex flex-row flex-1 gap-5 item-center justify-between">
						<label htmlFor="name" className="text-left text-black font-bold mb-2">Phone Number</label>
						<input type="text" id="name" name="name" placeholder="Enter your Phone Numebr" className="border border-gray-300 rounded-md p-2 mb-4" />
					</div>
				</form> */}
				<form>
					<div>
						<label htmlFor="name">Name</label>
						<input type="text" name="name" placeholder="Enter Your Name" />
					</div>
					<div>
						<label htmlFor="email">Email ID</label>
						<input type="email" name="email" placeholder="Enter Your Email" />
					</div>
					<div>
						<label htmlFor="number">Phone Number</label>
						<input type="number" name="number" placeholder="Enter Your Name" />
					</div>
					<div>
						<label htmlFor="enquiry">Enquiry</label>
						<select name="enquiry" onChange={(e) => setEnquiry(e.target.value)}>
							<option>Select</option>
							<option value="service">Service</option>
							<option value="product">Product</option>
							<option value="other">Other</option>
						</select>
					</div>
					<div>{enquiry == "service" && (<Listing labelName="service" selectName="service" items={Servicesjson.list} />)}</div>
					<div>{enquiry == "product" && (<Listing labelName="product" selectName="product" items={Productsjson.list} />)}</div>
					<div>
						<label htmlFor="message">Message</label>
						<textarea name="message" placeholder="Enter Your Message"></textarea>
					</div>
					<button type="submit">Submit</button>

					{/* <div>
						<label htmlFor="message">Message</label>
						<textarea name="message" placeholder="Enter Your Message"></textarea>
					</div>
					<button type="submit">Submit</button> */}



				</form>

			</main>
		</div>
	);
}