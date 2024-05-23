export default function FormCell({ label, text }) {
  return (
    <>
      <label
        className="block uppercase text-base font-bold ml-2"
        for={label}
      >
        {label}
      </label>
      <input
        type="text"
        className="w-full order-0 p-3 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
        value={text}
        id={label}
        readOnly
      />
    </>
  );
}
