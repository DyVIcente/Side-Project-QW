export default function Header() {
  return (
    <div className="bg-black shadow-md p-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-6xl flex gap-4 text-[#fafafa]">Side Project</h1>
        <p className="text-2xl md:text-6xl text-[#fafafa] text-end md:text-start">
          koukou
        </p>
      </div>
    </div>
  );
}
