import SearchIcon from "@mui/icons-material/Search";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Searchproduct = () => {
  return (
    <div className="px-64 py-8">
      <div
        className="flex bg-zinc-100 border-2 border-zinc-200 px-3 rounded-lg text-xl items-center"
        style={{ width: "600px" }}
      >
        <div>
          <SearchIcon className="text-zinc-500" />
        </div>
        <div className="ml-2 mr-2 w-full ">
          <input
            className="outline-none w-full h-14 focus:outline-none bg-zinc-100 rounded-sm"
            type="text"
            name="searchitem"
            placeholder="Search"
          />
        </div>
        <div>
          <CloseOutlinedIcon className="text-zinc-500" />
        </div>
      </div>
    </div>
  );
};

export default Searchproduct;