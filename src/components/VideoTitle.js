import { HiOutlineInformationCircle, HiPlay } from "react-icons/hi2";

function VideoTitle({ title, overview }) {
  return (
    <div className="w-screen aspect-video pt-5 md:pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="space-x-10 pt-14 md:flex hidden">
        <button className="bg-white px-10 py-2 rounded-md text-lg text-black hover:bg-opacity-80">
          <div className="flex justify-center items-center space-x-1">
            <HiPlay className="h-8 w-8" /> <span>Play</span>
          </div>
        </button>
        <div>
          <button className="bg-gray-500 px-10 py-2 rounded-md text-lg text-white">
            <div className="flex justify-center items-center space-x-1">
              <HiOutlineInformationCircle className="h-8 w-8" />
              <span>More Info</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoTitle;
