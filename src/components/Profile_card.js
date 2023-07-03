export default function Profile_card() {
  return (
    <div className="rounded-md overflow-hidden mt-8 mb-4">
      <div className="bg-white py-4">
        <img
          src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
          class="h-auto w-2/3 rounded-full mb-5 mx-auto"
          alt=""
        />
        <div className="px-6">
          <div className="font-bold text-xl tracking-wide">Krunal Patel</div>
          <div className="text-gray-500 text-sm mb-3">Backend Developer</div>
          <p className="text-gray-700 text-base">DAIICT - Gandhinagar</p>
        </div>
        <div className="mx-4 mt-2 mb-4">
          <button
            className="tracking-wider uppercase font-bold bg-blue-500 hover:bg-blue-400 rounded p-2 inline-block  mx-2 text-white"
            href="#"
          >
            Follow
          </button>
          <button
            className="tracking-wider uppercase font-bold text-blue-500 hover:bg-blue-100 rounded p-2 inline-block mx-2"
            href="#"
          >
            Message
          </button>
        </div>
      </div>
    </div>
  );
}
