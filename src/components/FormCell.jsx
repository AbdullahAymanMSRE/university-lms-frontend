export default function FormCell({ label, text }) {
    return (
        <>
            <label
                className="ml-2 block text-base font-bold uppercase"
                for={label}
            >
                {label}
            </label>
            <input
                type="text"
                className="order-0 pointer-events-none w-full rounded bg-white p-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                value={text}
                id={label}
                readOnly
            />
        </>
    );
}
