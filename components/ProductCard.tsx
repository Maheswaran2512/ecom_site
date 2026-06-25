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
        <article className="bg-white rounded-lg shadow-sm p-4 flex flex-col flex-between border-0.1 border-transparent [box-shadow:0_10px_15px_-3px_rgba(99,102,241,0.35)] transform-gpu transition-all duration-300 ease-out will-change-transform hover:scale-102 hover:border-blue-200 hover:[box-shadow:0_10px_15px_-3px_rgba(99,102,241,0.5),0_0_20px_rgba(59,130,246,0.8)]">
            <div className="relative w-full h-48 rounded overflow-hidden mb-4">
                <Image src={img} alt={title} fill className="object-cover" />
            </div>

            <h3 className="text-lg text-black font-semibold mb-1">{title}</h3>
            <div className="flex-1">
                <p className="text-sm text-black mb-2 text-justify">{description}</p>
                {specs ? (
                    <div className="text-xs text-gray-700 mb-4 text-justify">
                        <strong className="block text-black mb-1">Specifications:</strong>
                        <p className="whitespace-pre-line">{specs}</p>
                    </div>
                ) : null}
            </div>

            <div className="mt-2 text-right">
                <span className="text-xl text-black font-bold">{price}</span>
            </div>
        </article>
    );
}
