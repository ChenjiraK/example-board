
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchInput : React.FC = ({ }) =>{
   return(
      <div className={"flex gap-4 w-full relative"}>
         <input 
            className="rounded-lg bg-transparent border border-white py-2 pl-8 w-full placeholder:text-gray-4A4A4A" 
            placeholder="Search" />
            <div className="absolute top-10px left-10px">
               <Icon className="text-14" icon={faSearch} />
            </div>   
      </div>
   )
}
export default SearchInput