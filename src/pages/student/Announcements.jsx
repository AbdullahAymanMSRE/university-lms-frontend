import Announcement from "../../components/Announcement";

export default function Announcements() {
    return (
        <section className="flex flex-col gap-6">
            <Announcement
                author="Amar Wael"
                subject="Quiz 1"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consectetur libero."
            />
            <Announcement
                author="Amar Wael"
                subject="Quiz 1"
                content="Ana number 1"
            />
        </section>
    );
}
