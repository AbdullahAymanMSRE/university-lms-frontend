import Announcement from "../../components/Announcement";
import { useGetAnnouncementsQuery } from "../../api/studentApiSlice";
import { format } from "date-fns";

export default function Announcements() {
    const { data: announcements } = useGetAnnouncementsQuery();

    console.log(announcements);

    return (
        <section className="flex flex-col gap-6">
            {announcements?.map((announcement) => (
                <Announcement
                    author={announcement.instructor_name}
                    subject={announcement.title}
                    content={announcement.content}
                />
            ))}
        </section>
    );
}
