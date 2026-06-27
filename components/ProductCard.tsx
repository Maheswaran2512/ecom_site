import Image from "next/image";

type Props = {
    title: string;
    description: string;
    specs?: string;
    price: string;
    img: string;
};


export default function ProductCard({ title, description, specs, price, img }: Props) {
    return (
        // <article className="bg-white rounded-lg shadow-sm p-4 flex flex-col flex-between border-0.1  border-transparent [box-shadow:0_10px_15px_-3px_rgba(99,102,241,0.35)] transform-gpu transition-all duration-300 ease-out will-change-transform hover:scale-102 hover:border-blue-200 hover:[box-shadow:0_10px_15px_-3px_rgba(99,102,241,0.5),0_0_20px_rgba(59,130,246,0.8)]">
        //     <div className="relative w-full h-48 rounded overflow-hidden mb-4">
        //         <Image src={img} alt={title} fill className="object-cover" />
        //     </div>

        //     <h3 className="text-lg text-black font-semibold mb-1 text-left">{title}</h3>
        //     <div className="flex-1">
        //         <p className="text-sm text-black mb-2 text-justify">{description}</p>
        //         {specs ? (
        //             <div className="text-xs text-gray-700 mb-4 text-justify">
        //                 <strong className="block text-black mb-1">Specifications:</strong>
        //                 <p className="whitespace-pre-line">{specs}</p>
        //             </div>
        //         ) : null}
        //     </div>

        //     <div className="mt-2 text-right">
        //         <span className="text-xl text-black font-bold">{price}</span>
        //     </div>
        // </article>
        <article className="relative overflow-hidden rounded-2xl bg-white p-4 flex flex-col justify-between border border-indigo-100 shadow-md transition-all duration-300 hover:scale-102 hover:border-indigo-300 hover:shadow-[0_15px_30px_rgba(99,102,241,0.35)]">
            {/* Curved Left Accent */}
            <div className="absolute left-0 top-0 bottom-0 w-3 rounded-l-full bg-gradient-to-b from-indigo-500 via-indigo-600 to-violet-600"></div>

            <div className="pl-4">

                <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
                    <Image
                        src={img}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {title}
                </h3>

                <div className="flex-1">

                    <p className="text-sm text-slate-600 text-justify leading-7">
                        {description}
                    </p>

                    {specs && (

                        <div className="mt-4 rounded-xl bg-indigo-50 p-3">

                            <h4 className="text-sm font-semibold text-indigo-700 mb-2">
                                Specifications
                            </h4>

                            <p className="text-xs text-slate-600 whitespace-pre-line leading-6">
                                {specs}
                            </p>

                        </div>

                    )}

                </div>

                <div className="mt-6 flex items-center justify-between">

                    <span className="text-2xl font-bold text-indigo-600">
                        {price}
                    </span>

                    <button className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700">
                        View Details
                    </button>

                </div>

            </div>

        </article>
    );
}
