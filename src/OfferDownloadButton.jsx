function OfferDownloadButton({ className }) {
  return (
    <button
      className={`${className} py-4 px-8 bg-white rounded-lg text-3xl font-semibold tracking-wider text-[#570d48] shadow-md cursor-pointer max-xl:text-2xl max-xl:py-3 max-xl:px-6 max-lg:text-[1rem] `}
    >
      Download Now
    </button>
  );
}

export default OfferDownloadButton;
