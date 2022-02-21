import SearchIcon from '@mui/icons-material/Search';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const Searchproduct = () => {
    return ( 
        <div className='px-64 py-8'>
            <div className='flex bg-zinc-500 p-1 rounded-lg text-white text-xl' style={{width: "600px"}}>
                <div> <SearchIcon /> </div>
                <div className='ml-2 mr-2 w-full '> <input className='outline-none w-full h-14 bg-zinc-500 placeholder:text-white' type="text" name="searchitem" placeholder='Search'/> </div>
                <div> <CloseOutlinedIcon /> </div>
            </div>
        </div>
     );
}
 
export default Searchproduct;