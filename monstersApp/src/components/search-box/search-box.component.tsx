import "./searchbox.css"

import { ChangeEvent } from "react";
// interface ISearchBoxProps extends IChangeHandlerProps {
//   className: string,
//   placeholder?: string, // ? --> optional
  
// }

// interface IChangeHandlerProps {
//   onChangeHandler: (a: <HTMLINPUTELEMENT>) => void
// }


type SearchBoxProps = {
  className: string,
  placeholder?: string, // ? --> optional
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBox = ({className,placeholder,onChangeHandler}:SearchBoxProps) => 
{
return(
        <input
          className={`search-box ${className}`}
          type="search"
          placeholder={placeholder}
          onChange={(e) => onChangeHandler(e)}
        />
     )
 
}

