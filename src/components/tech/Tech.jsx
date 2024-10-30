import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJs } from "react-icons/fa";
const Tech = () => {
  return (
    <div className="border-b border-neutral-500 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* html  */}
        <div
          className="rounded-2xl border-4 border-neutral-500 p-4 tooltip"
          data-tip="HTML"
        >
          <FaHtml5 className="text-7xl text-amber-600" />
        </div>
        {/* css  */}
        <div
          className="rounded-2xl border-4 border-neutral-500 p-4 tooltip"
          data-tip="CSS"
        >
          <FaCss3Alt className="text-7xl text-blue-500" />
        </div>
        {/* bootstrap  */}
        <div
          className="rounded-2xl border-4 border-neutral-500 p-4 tooltip"
          data-tip="Bootstrap"
        >
          <FaBootstrap className="text-7xl text-purple-600" />
        </div>
        {/* tailwind  */}
        <div
          className="rounded-2xl border-4 border-neutral-500 p-4 tooltip"
          data-tip="Tailwind"
        >
          <RiTailwindCssFill className="text-7xl text-cyan-400" />
        </div>
        {/* js  */}
        <div
          className="rounded-2xl border-4 border-neutral-500 p-4 tooltip"
          data-tip="Javascript"
        >
          <FaJs className="text-7xl text-yellow-400" />
        </div>

        {/* react  */}
        <div
          className="rounded-2xl border-4 border-neutral-500 p-4 tooltip"
          data-tip="React"
        >
          <FaReact className="text-7xl text-cyan-400" />
        </div>
      </div>
    </div>
  );
};

export default Tech;
