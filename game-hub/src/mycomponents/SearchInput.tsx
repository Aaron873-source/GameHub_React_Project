import { InputGroup } from "@/components/ui/input-group";
import { Input } from "@chakra-ui/react";
import { useRef } from "react";
import { LuSearch } from "react-icons/lu";

interface Props {
    onSearch:(searchText:string)=>void;
}



const SearchInput = ({onSearch}:Props) => {

  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        //Checking when the there is a submission of the search it checks if it is filled
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup width="full" flex="1" startElement={<LuSearch />}>
        <Input
          borderRadius={10}
          placeholder="Search games..."
          variant="subtle"
          ref={ref}
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
