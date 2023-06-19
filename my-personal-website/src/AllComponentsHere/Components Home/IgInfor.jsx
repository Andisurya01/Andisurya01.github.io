import AOS from 'aos';
import 'aos/dist/aos.css';

const Postingan = () => {
    return (
        <div>
            <div className="container max-w-screen-xl mx-auto grid grid-cols-1 gap-4 md:grid-cols-4">
                <div className="md:col-span-2">
                    <p className="text-5xl font-bebas text-gray-900 dark:text-white">INSTAGRAM JURUSAN INFORMATIKA SULTAN AGENG TIRTAYASA<br /></p>
                    <div className="mt-5 flex flex-row">
                        <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink">
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -7439.000000)" fill="#000000">
                                    <g id="icons" transform="translate(56.000000, 160.000000)">
                                        <path d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792" id="instagram-[#167]">

                                        </path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <a href='https://www.instagram.com/informatika_untirta/' className="pl-2">instagram</a>
                    </div>
                </div>
                <div className=" text-lg mx-auto">
                    Dimulai dari menetapkan konten apa yang akan dibuat, mencari referensi, dan sampai pembuatan konten menggunakan tools yang tersedia,
                    semua diciptakan untuk menghasilkan konten yang bermanfaat dan menarik untuk warga mahasiswa khususnya Informatika Unitrta
                </div>
                <div className="text_lg mx-auto">
                    Tools yang digunakan :
                    <ul className="list-none">
                        <li>
                            Adobe photoshop
                        </li>
                        <li>
                            Adobe Illustrator
                        </li>
                    </ul>
                </div>
            </div>
            <div className='m-5 h-96  bg-cover rounded-2xl overflow-auto max-w-screen-xl mx-auto' >
                <div className='w-full h-full rounded-2xl justify-center scrollba overflow-y-scroll'>
                    <img className='mx-auto content-center' src='./src/assets/Postinganig.png' />
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
}
export default Postingan;