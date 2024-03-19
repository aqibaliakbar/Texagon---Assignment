import { useEffect, useRef, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./languageselector.css";

const LanguageSelector = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setShowOptions(false);
  };

  const handleClickOutside = (event) => {
    if (
      buttonRef.current &&
      dropdownRef.current &&
      !buttonRef.current.contains(event.target) &&
      !dropdownRef.current.contains(event.target)
    ) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <button
        ref={buttonRef}
        className={`language-selector-button ${showOptions ? "active" : ""}`}
        onClick={toggleOptions}
      >
        <span>{selectedLanguage}</span>
        <span>
          <RiArrowDropDownLine size={20} />
        </span>
      </button>
      {showOptions && (
        <div
          className={`language-selector-box ${showOptions ? "active" : ""} `}
          ref={dropdownRef}
        >
          <a href="#" onClick={() => handleLanguageChange("English")}>
            English
          </a>

          <a href="#" onClick={() => handleLanguageChange("Spanish")}>
            Spanish
          </a>

          <a href="#" onClick={() => handleLanguageChange("French")}>
            French
          </a>
          <a href="#" onClick={() => handleLanguageChange("German")}>
            German
          </a>
          <a href="#" onClick={() => handleLanguageChange("Italian")}>
            Italian
          </a>
          <a href="#" onClick={() => handleLanguageChange("Russian")}>
            Russian
          </a>
          <a href="#" onClick={() => handleLanguageChange("Portuguese")}>
            Portuguese
          </a>
          <a href="#" onClick={() => handleLanguageChange("Swedish")}>
            Swedish
          </a>
          <a href="#" onClick={() => handleLanguageChange("Turkish")}>
            Turkish
          </a>
          <a href="#" onClick={() => handleLanguageChange("Danish")}>
            Danish
          </a>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
