import ProductCard from "../../components/ServiceCard";
import Services from "@/lib/Services.json";

export default function ServicePage() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-100 font-sans">
            <main className="rounded-lg flex flex-col flex-1 w-full max-w-6xl items-center justify-around text-center py-10 px-5 bg-white gap-evenly mt-20 mb-2">
                <h1 className="text-3xl font-bold text-center">Service Page</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10 w-full max-w-6xl px-4">
                    {Services.list.map((s) => (
                        <ProductCard
                            key={s.id}
                            title={s.title}
                            description={s.description}
                            price={s.price}
                            img={s.img}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}
