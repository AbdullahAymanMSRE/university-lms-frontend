import { id } from "date-fns/locale";
import Announcement from "../../components/Announcement";
import { useGetAnnouncementsQuery } from "../../api/studentApiSlice";
import { format } from "date-fns";
import LoadingSpinner from "../../components/LoadingSpinner";

export default function Announcements() {
    const { data: announcements, isLoading } = useGetAnnouncementsQuery();

    return (
        <section className="flex h-full flex-col">
            {isLoading ? <LoadingSpinner /> : null}
            {announcements?.map((announcement) => (
                <Announcement
                    author={announcement.instructor_name}
                    subject={announcement.title}
                    content={announcement.content}
                    course={{
                        id: announcement.course_id,
                        title: announcement.course_title,
                    }}
                />
            ))}
        </section>
    );
}
