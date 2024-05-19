import {BoxIconsSvg2} from "../svgs/box_icons";

export default function WhiteBox({ icon, header, text, showGraph = false}) {
  return (
      <div className="h-24 w-80 rounded-2xl bg-white flex items-center px-4 gap-5 flex-shrink-0 max-w-lg max-md:w-full">
        {icon}
        <div className="font-bold">
          <p className="text-text text-base">{header}</p>
          <p className="text-darkenedBlue2 text-sm">{text}</p>
        </div>
        {showGraph ? <div className="relative -left-8">{BoxIconsSvg2()}</div> : null}
      </div>
  );
}
