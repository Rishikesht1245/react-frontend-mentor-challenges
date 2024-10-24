import loadingIcon from "../assets/Iphone-spinner-2.gif";
const Loader = () => {
  return (
    <div className="w-100 h-100 flex-center mt-20">
      <div className="flex-col-center gap-5">
        <img src={loadingIcon} alt="Loader" width={60} height={60} />
        <span className="mt-20">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
