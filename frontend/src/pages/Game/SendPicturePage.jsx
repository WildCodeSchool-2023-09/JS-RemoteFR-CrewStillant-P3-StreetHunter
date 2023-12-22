export default function SendPicturePage() {
  return (
    <>
      (
      <form className="flex flex-col items-center justify-center h-screen">
        <div>
          <input
            className="border-solid border-2 border-sky-200 mt-1"
            type="text"
            name="title_street_art"
            placeholder="TITRE DU STREET ART"
          />
          <select
            name=""
            id=""
            className="border-solid border-2 border-sky-200 mt-1"
          >
            <option value={null}>Inconnu</option>
            <option value="Retro">Retro</option>
            <option value="Caligraphy">Caligraphy</option>
            <option value="Abstract">Abstract</option>
            <option value="Realistic">Realistic</option>
          </select>
        </div>
        <input
          className="border-solid border-2 border-sky-200 mt-1 "
          type="text"
          name="adress"
          placeholder="ADRESSE"
        />
        <input
          type="file"
          className="block mt-2 mb-2 text-sm text-slate-500
        file:mr-4 file:py-2 file:px-6 file:rounded-md
        file:border-0 file:text-sm file:font-semibold
        file:bg-blue-300 file:text-white-300
        hover:file:bg-blue-100 ;"
        />
        <button
          type="submit"
          className="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md"
        >
          Download
        </button>
      </form>
      )
    </>
  );
}
