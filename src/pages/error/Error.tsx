export default function Error() {
  return (
    <div className="bg-black h-screen">
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-[#fafafa] text-5xl">404</h1>
        <p className="text-[#fafafa]">Oupsi, mais vous vous êtes perdu ? </p>
        <a
          href="/"
          className="text-black bg-[#fafafa] p-4 rounded-xl font-bold mt-10"
        >
          Revenir sur la page d'accueil
        </a>
      </div>
    </div>
  );
}
