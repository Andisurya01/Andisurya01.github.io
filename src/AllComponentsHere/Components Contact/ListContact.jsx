const ListContact = () => {

    return (
        <div className="container grid grid-cols-1 md:grid-cols-3 md:max-w-screen-xl mx-auto mt-60">
            <div className="md:col-span-2">

                <hr className="my-6 sm:mx-auto border-stone-700 lg:my-8 mt-20" /><div>
                    <h1 className="font-normal text-xl md:mb-5">Ini Email gua</h1>
                    <a href="andi.suryakerja@gmail.com" className="mt-auto">@andi.suryakerja@gmail.com</a>
                </div>
                <hr className="my-6 sm:mx-auto border-stone-700 lg:my-8 mt-20" /><div>
                    <h1 className="font-normal text-xl md:mb-5">Ini Instagram gua</h1>
                    <a href="https://www.instagram.com/andiiiii.sp/" className="mt-auto">@andiiiii.sp</a>
                </div>
                <hr className="my-6 sm:mx-auto border-stone-700 lg:my-8 mt-20" /><div>
                    <h1 className="font-normal text-xl md:mb-5">Ini Github gua</h1>
                    <a href="https://github.com/Andisurya01" className="mt-auto">Andisurya01</a>
                </div>
                <hr className="my-6 sm:mx-auto border-stone-700 lg:my-8 mt-20" /><div>
                    <h1 className="font-normal text-xl md:mb-5">Ini LinkedIn gua</h1>
                    <a href="https://www.linkedin.com/in/andisurya1/" className="mt-auto">Andi Surya Priyadi</a>
                </div>
                
            </div>
            <div className="px-10 mx-auto">
                <h1>Notes</h1>
                <ul>
                    <il>
                        eee kalian boleh aja ko langsung tanya tanya ke kontak yang tersedia, tanpa terkecuali
                    </il>
                </ul>
            </div>
        </div>
    )
}

export default ListContact;