import { BoxIconsSvg2 } from "../svgs/box_icons";

export default function WhiteBox({ icon, header, text, showGraph = false }) {
    return (
        <div className="flex h-24 w-80 max-w-lg flex-shrink-0 items-center gap-5 rounded-2xl bg-white px-4 shadow-sm max-md:w-full">
            {icon}
            <div className="font-bold">
                <p className="text-base text-text">{header}</p>
                <p className="text-sm text-darkenedBlue2">{text}</p>
            </div>
            {showGraph ? (
                <div className="relative -left-8">{BoxIconsSvg2()}</div>
            ) : null}
        </div>
    );
}
