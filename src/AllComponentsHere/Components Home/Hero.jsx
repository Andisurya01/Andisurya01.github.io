const Hero = () => {

    return (
        <div className=" max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 mt-60">
            <div className="">
                <h1 className="font-bebas text-8xl text-stone-950">Hai!,Nama gua Andi, orang yang suka dengan fisual</h1>
                <hr className="my-6 sm:mx-auto border-stone-700 lg:my-8 mt-20" /><div></div>
                <p className="text-stone-900">Menjadi desainer adalah cita cita gua, karena gua suka menggambar, tapi karena masuk jurusan informatika, jadi ngambil
                front-end deh suapaya agak nyambung dikit dengan jurusan yang lagi gua tempuh</p>
            </div>
            <div className="mx-auto">
                <img className="border-none w-80 " src="https://i.pinimg.com/736x/73/4a/9c/734a9cb47c5e91bc3ce6d25a76cee54b.jpg"/>
            </div>
        </div>
    )
}

export default Hero;