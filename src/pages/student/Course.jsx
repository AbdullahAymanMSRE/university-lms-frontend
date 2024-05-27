import Accordion from "../../components/Accordion";

export default function Course({ weeks, items }) {
    return (
        <div>
            {weeks?.map((week) => (
            <Accordion
                week={week}
                items={items}
            />
            ))}
        </div>
    );
}
