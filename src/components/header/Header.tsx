export default function Header() {
  return (
    <div className="shadow-xl shadow-cyan-500 p-4 bg-[#0F0F1A] relative">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="font-extrabold text-4xl leading-[30px] text-white press-start">
          Netrunner.QW
        </h1>
        <p className="text-white">search bar</p>
      </div>
      <div className="absolute w-[50%] inset-0 gradient-01"></div>
    </div>
  );
}
