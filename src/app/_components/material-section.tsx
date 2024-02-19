import Image from "next/image"
import iconDownload from '/public/icon-download.svg';


function materialSection () {
return (
<section className="flex h-fit flex-col items-center justify-center bg-[#e6fcf5] py-12 md:h-[348px]">
<div className=" flex w-full max-w-[564px] flex-col items-center justify-center gap-6 px-4">
  <h2 className="text-center font-prompt text-[40px] font-bold leading-[48px] text-black">
    Material de divulgação
  </h2>
  <p className="text-center text-black text-[20px] leading-[30px]">
    Este material vai te ajudar apresentar para o indicado o que é o Sacflow e o que é
    possível fazer com ele.
  </p>
  <button className="flex h-12 items-center gap-2 rounded-full bg-black px-6 text-white hover:bg-gray-800 duration-300">
    <p className="text-[14px] font-semibold">Baixar material</p>
    <Image
      className="stroke-white"
      src={iconDownload}
      alt="Baixar"
      width={24}
      height={24}
    />
  </button>
</div>
</section>
)
}

export default materialSection