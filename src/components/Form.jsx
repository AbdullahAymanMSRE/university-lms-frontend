import FormCell from "./FormCell";

export default function Form({ title }) {
  return (
    <form>
      <h6 className="text-xl mb-6 font-bold uppercase">{title}</h6>
      <div className="flex flex-col gap-5">
        <FormCell label="First Name" text="Amar" />
        <FormCell label="Last Name" text="AlAzizy" />
        <FormCell label="ID" text="21-101152" />
        <FormCell label="Email Address" text="21-101152@students.eui.edu.eg" />
      </div>
    </form>
  );
}
