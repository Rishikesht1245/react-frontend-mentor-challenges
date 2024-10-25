import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useCountryStore } from "../zustand";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const { isDark, toggleTheme } = useCountryStore();

  return (
    <div className="header-container flex-center">
      <div className="header-content flex-between">
        <h5>{title}</h5>
        {/* theme button */}
        <button
          className="btn-outline-none flex-center gap-5 fs-16"
          onClick={() => toggleTheme()}
        >
          {isDark ? (
            <>
              <MdOutlineLightMode size={24} /><span className="sm-hide">Light Mode</span>
            </>
          ) : (
            <>
              <MdDarkMode size={24} /><span className="sm-hide">Dark Mode</span> 
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
