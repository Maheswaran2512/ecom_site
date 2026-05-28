type Item = {
    title: string;
}

type Listing = {
    labelName : string;
    selectName: string;
    items: Item[];
}

export default function Listing({labelName, selectName, items }: Listing) {
    return (
        <div>
            <label htmlFor={selectName}>{labelName}</label>
            <select name={selectName}>
                <option value="">Select</option>
                {items.map((item, index) => (
                    <option key={index} value={item.title}>{item.title}</option>
                ))}
            </select>
        </div>
    );
}