import { useState } from "react";
import colors from "tailwindcss/colors";
import { List } from "phosphor-react";

interface IconListProps{
  className?: string;
  size: number
}

export default function IconLIst(props: IconListProps){
  
  const [iconWeight, setIconWeigth] = useState(false)
  const [showOptions, setShowOptions] = useState(false)
  
  return(
    <button 
      className={`relative rounded-full focus:outline-none ${props.className}`}
      onFocus={e => setIconWeigth(!iconWeight)}
      onClick={e => (setIconWeigth(!iconWeight), setShowOptions(!showOptions))}
      onBlur={e => (setIconWeigth(false), setShowOptions(false))}
    >
      <List size={props.size} color={colors.white} weight={iconWeight ? 'regular' : 'thin' }/>
        <div className={`
          absolute -right-4 top-14 z-50
          ${showOptions ? 'visible' : 'invisible hidden'}`}
        >
          <div className={`
            flex flex-col p-1 
            gap-1 bg-white 
            border border-gray-300 rounded-lg`}
          >
            <span className="truncate">ação 1</span>
            <span className="truncate">ação 2</span>
            <span className="truncate">ação 3</span>
        </div>
      </div>
    </button>
  );
}