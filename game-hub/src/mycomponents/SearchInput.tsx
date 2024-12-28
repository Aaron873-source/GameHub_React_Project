import { InputGroup } from "@/components/ui/input-group";
import { Input } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
const SearchInput = () => {
  return (
    <InputGroup flex="1" startElement={<LuSearch />}>
      <Input
        borderRadius={20}
        placeholder="Search games..."
        variant="subtle"
      ></Input>
    </InputGroup>
  );
};

export default SearchInput;
