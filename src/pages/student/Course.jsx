import Accordion from '../../components/Accordion';

export default function Course() {
    return (
        <Accordion
        weekNumber={1}
        items={["Lecture 1", "Lecture 2", "Lecture 3", "Lecture 4"]} />
    );
}