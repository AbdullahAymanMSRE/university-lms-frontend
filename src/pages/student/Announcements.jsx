import Announcement from "../../components/Announcement";

export default function Announcements() {
    return (
        <section className="flex flex-col">
            <Announcement
                author="Amar Wael"
                subject="Quiz 1"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consectetur libero."
                courseName={"Math 101"}
            />
            <Announcement
                author="Amar Wael"
                subject="Quiz 1"
                content="Ana number 1"
                courseName={"Math 102"}
            />
        </section>
    );
}
