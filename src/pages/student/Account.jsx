import useUserStore from "../../store/userStore";
import FormCell from "../../components/FormCell";

export default function Account() {
    const user = useUserStore((state) => state.user);

    return (
        <section className="min-h-screen w-full text-darkenedBlue max-md:px-4">
            <form>
                <h6 className="mb-6 text-xl font-bold uppercase">
                    User Information
                </h6>
                <div className="flex flex-col gap-5">
                    <FormCell label="Name" text={user.name} />
                    <FormCell label="ID" text={user.id} />
                    <FormCell label="Email Address" text={user.email} />
                </div>
            </form>
        </section>
    );
}
