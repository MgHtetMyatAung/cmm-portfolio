import { FaCodeBranch, FaLaravel } from "react-icons/fa";
import { FiCode } from "react-icons/fi";
function HeroSection() {
  return (
    <section>
      <div className="container mx-auto relative">
        <div className=" text-center py-[150px]">
          <h2 className=" text-lg md:text-3xl font-semibold text-gray-300 mb-5 md:mb-8">
            👋 Hello ,{" "}
            <span className=" text-[#17b5c3]">{`I'm Backend Developer`}</span>
          </h2>
          <h1 className=" text-4xl md:text-5xl font-bold text-gray-200 mb-5 md:mb-8">
            Chan Myat Min
          </h1>
          <p className=" max-w-[500px] mx-auto mb-8 text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
            obcaecati vero aspernatur velit corporis.
          </p>
          <div className="flex justify-center items-center gap-8">
            <a
              href=""
              className=" block w-[110px] md:w-[150px] font-medium py-2 bg-[#047d88] rounded-md"
            >
              Hire me
            </a>
            <a
              href=""
              className=" block w-[110px] md:w-[150px] font-medium py-2 border-[1px] border-gray-400 text-gray-200 rounded-md"
            >
              Hire me
            </a>
          </div>
        </div>
        <div className=" hidden lg:block">
          <FaCodeBranch className=" text-5xl text-gray-600 absolute top-[200px] left-[200px]" />
          <FaLaravel className=" text-6xl text-gray-500 absolute top-[350px] right-[250px]" />
          <FiCode className="text-7xl text-gray-600 absolute bottom-[0px] left-[30%]" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
