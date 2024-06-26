const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${
        backgroundColor
          ? `${backgroundColor}${borderColor}${textColor}`
          : "bg-coral-red  text-white border-coral-red"
      } rounded-full ${fullWidth && "w-full"}"}`}
    >
      {/* justify-center is used to center the items HORIZONTALLY
      items-center is used to center the items VERTICALLY */}
      {label}
      {/* if there is an icon,only then we will show the icon */}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
