import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./languageselector.css";

const LanguageSelector = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setShowOptions(false);
  };

  return (
    <div>
      <button className="language-selector-button" onClick={toggleOptions}>
        <span>{selectedLanguage}</span>
        <span>
          <RiArrowDropDownLine />
        </span>
      </button>
      {showOptions && (
        <div className="language-selector-box">
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
