import { InputGroup } from "@/components/ui/input-group";
import useGameQueryStore from "@/store";
import { Input } from "@chakra-ui/react";
import { useRef } from "react";
import { LuSearch } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

/**
 * SearchInput component allows users to input search text and triggers a search action upon form submission.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {function} props.onSearch - Callback function to handle the search action. It receives the search text as an argument.
 *
 * @example
 * <SearchInput onSearch={(searchText) => console.log(searchText)} />
 *
 * @returns {JSX.Element} The rendered SearchInput component.
 */

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((state) => state.setSearchText);

  const navigate = useNavigate();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        //Checking when the there is a submission of the search it checks if it is filled
        if (ref.current) {
          setSearchText(ref.current.value);
          //Navigating the user back to the home page for situations where the user is on the game detail page and they search for a game in the search bar
          navigate("/");
        }
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
