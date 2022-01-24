function BranchCard({ data }) {
  return (
    <section className="h-[100%] mw-[500px] card-container">
      <div className="">
        <img
          src={data?.branchImage}
          alt=""
          className="max-w-full w-[100%] object-cover rounded-lg"
        />
      </div>
      <div className="card-description py-2">
        <h3 className="text-xl font-bold my-3">{data?.branchName}</h3>
        <button className="text-xs px-4 py-2 self-start relative rounded sm:px-8 sm:py-2.5 sm:text-sm md:text-base lg:text-lg overflow-hidden group bg-[#4ade80] hover:bg-gradient-to-r hover:from-[#22c55e] hover:to-[#4ade80] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#4ade80] transition-all ease-out duration-300">
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-[#4ade80] opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">Enroll Now!</span>
        </button>
      </div>
    </section>
  );
}
export default BranchCard;
