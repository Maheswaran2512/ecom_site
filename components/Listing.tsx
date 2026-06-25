"use client";

type Item = {
    title: string;
}

type Listing = {
    labelName : string;
    selectName: string;
    items: Item[];
    onChange?: (value: string) => void;
}

export default function Listing({labelName, selectName, items, onChange }: Listing) {
    return (
        <div className="flex gap-5 justify-center items-center">
            <label htmlFor={selectName} className="p-5">{labelName}</label>
            <select name={selectName} id={selectName} className="w-full h-full rounded-4xl p-3" required onChange={(e) => onChange?.(e.target.value)}>
                <option value="">Select</option>
                {items.map((item, index) => (
                    <option key={index} value={item.title}>{item.title}</option>
                ))}
            </select>
        </div>
    );
}