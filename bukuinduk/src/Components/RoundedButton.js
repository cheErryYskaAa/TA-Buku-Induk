import { useNavigate } from "react-router-dom";
const RoundedButton = () => {
    const navigate = useNavigate()
    return (
        <div className="flex items-center justify-center space-x-4 mt-4">

            <div class="flex flex-col items-center">
                <button onClick={() => navigate('/halamandepan')} className='w-[80px] h-[80px] flex items-center justify-center bg-slate-100 text-black hover:bg-blue-500 hover:text-white rounded-full text-xl'>
                    1
                </button>
                <span class="text-lg mt-1">Biodata</span>
            </div>

            <div class="flex flex-col items-center">
                <button onClick={() => navigate('/alamat')} className='w-[80px] h-[80px] flex items-center justify-center bg-slate-100 text-black hover:bg-blue-500 hover:text-white rounded-full text-xl'>
                    2
                </button>
                <span class="text-lg mt-1">Alamat</span>
            </div>

            <div class="flex flex-col items-center">
                <button onClick={() => navigate('/kesehatanadmin')} className='w-[80px] h-[80px] flex items-center justify-center bg-slate-100 text-black hover:bg-blue-500 hover:text-white rounded-full text-xl'>
                    3
                </button>
                <span class="text-lg mt-1">Kesehatan</span>
            </div>

            <div class="flex flex-col items-center">
                <button onClick={() => navigate('/pendidikan')} className='w-[80px] h-[80px] flex items-center justify-center bg-slate-100 text-black hover:bg-blue-500 hover:text-white rounded-full text-xl'>
                    4
                </button>
                <span class="text-lg mt-1">Pendidikan</span>
            </div>

            <div class="flex flex-col items-center">
                <button onClick={() => navigate('/ketAyah')} className='w-[80px] h-[80px] flex items-center justify-center bg-slate-100 text-black hover:bg-blue-500 hover:text-white rounded-full text-xl'>
                    5
                </button>
                <span class="text-lg mt-1">Ayah</span>
            </div>

            <div class="flex flex-col items-center">
                <button onClick={() => navigate('/ketIbu')} className='w-[80px] h-[80px] flex items-center justify-center bg-slate-100 text-black hover:bg-blue-500 hover:text-white rounded-full text-xl'>
                    6
                </button>
                <span class="text-lg mt-1">Ibu</span>
            </div>

            <div class="flex flex-col items-center">
                <button onClick={() => navigate('/ketWali')} className='w-[80px] h-[80px] flex items-center justify-center bg-slate-100 text-black hover:bg-blue-500 hover:text-white rounded-full text-xl'>
                    7
                </button>
                <span class="text-lg mt-1">Wali</span>
            </div>

            <div class="flex flex-col items-center">
                <button onClick={() => navigate('/perkembangan')} className='w-[80px] h-[80px] flex items-center justify-center bg-slate-100 text-black hover:bg-blue-500 hover:text-white rounded-full text-xl'>
                    8
                </button>
                <span class="text-lg mt-1">Perkembangan</span>
            </div>

            <div class="flex flex-col items-center">
                <button className='w-[80px] h-[80px] flex items-center justify-center bg-slate-100 text-black hover:bg-blue-500 hover:text-white rounded-full text-xl'>
                    9
                </button>
                <span class="text-lg mt-1">Selesai</span>
            </div>

        </div>

    )
}
export default RoundedButton