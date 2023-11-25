import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searParams, setSearchParams] = useSearchParams();

  const sortBy = searParams.get("sortBy") || "";

  function handleChange(e) {
    searParams.set("sortBy", e.target.value);
    setSearchParams(searParams);
  }

  return (
    <Select
      options={options}
      value={sortBy}
      type="white"
      onChange={handleChange}
    />
  );
}

export default SortBy;
