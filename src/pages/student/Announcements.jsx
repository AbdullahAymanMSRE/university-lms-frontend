import { id } from "date-fns/locale";
import Announcement from "../../components/Announcement";

export default function Announcements() {
    return (
        <section className="flex flex-col">
            <Announcement
                author="Amar Wael"
                subject="Quiz 1"
                content="Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit. Nulla nec purus feugiat,
                  molestie ipsum et, consectetur libero. Lorem ipsum dolor sit amet,
                   consectetur adipiscing elit. Nulla nec purus feugiat,
                    molestie ipsum et, consectetur libero.Lorem ipsum dolor sit amet,
                     consectetur adipiscing elit. Nulla nec purus feugiat,
                      molestie ipsum et, consectetur libero.Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Nulla nec purus feugiat,
                       molestie ipsum et, consectetur libero.Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Nulla nec purus feugiat,
                         molestie ipsum et, consectetur libero.Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit. Nulla nec purus feugiat,
                           molestie ipsum et, consectetur libero.Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Nulla nec purus feugiat,
                             molestie ipsum et, consectetur libero."
                course={{ title: "Math 101", id: "1022" }}
            />
            <Announcement
                author="Amar Wael"
                subject="Quiz 1"
                content="Ana number 1"
                course={{ title: "Math 102", id: "1022" }}
            />
        </section>
    );
}
