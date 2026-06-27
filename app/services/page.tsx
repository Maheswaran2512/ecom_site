import ProductCard from "../../components/ServiceCard";
import Services from "@/lib/Services.json";

export default function ServicePage() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center">Service Page</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10 w-full max-w-6xl">
                {Services.list.map((s) => (
                    <ProductCard
                        key={s.id}
                        title={s.title}
                        description={s.description}
                        price={s.price}
                        img={s.img}
                    />
                ))}
            </div >
        </div>
    );
}
