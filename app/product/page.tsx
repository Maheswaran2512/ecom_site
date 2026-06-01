import ProductCard from "../../components/ProductCard";
import Products from "@/lib/Products.json";

export default function ProductPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center">Product Page</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 w-full max-w-6xl px-4">
                {Products.list.map((p) => (
                    <ProductCard
                        key={p.id}
                        title={p.title}
                        description={p.description}
                        specs={p.specs}
                        price={p.price}
                        img={p.img}
                    />
                ))}
            </div>
        </div>
    );
}