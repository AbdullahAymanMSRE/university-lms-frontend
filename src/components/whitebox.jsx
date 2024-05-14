import {BoxIconsSvg2} from "../svgs/box_icons";

export default function WhiteBox({ icon, header, text, showGraph = false}) {
  return (
      <div className="h-24 w-80 rounded-2xl bg-white flex items-center pl-4 gap-5">
        {icon}
        <div className="flex flex-col font-bold">
          <p className="text-text text-base">{header}</p>
          <p className="text-darkenedBlue2 text-sm">{text}</p>
        </div>
        {showGraph ? <div className="relative -left-8">{BoxIconsSvg2()}</div> : null}
      </div>
  );
}
