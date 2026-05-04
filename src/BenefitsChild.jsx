function BenefitsChild({ icon, text, rightBorder = false }) {
  const borderR = rightBorder ? "pr-8 border-r-2 mr-8" : "";

  return (
    <div className="flex items-center justify-center">
      <a href="#" className={`flex text-[0.8rem] font-semibold ${borderR} border-[#00000029]`}>
        <img src={icon} alt="returnIcon" className="h-5 w-5 mr-2" />
        <p>{text}</p>
      </a>
    </div>
  );
}

export default BenefitsChild;
