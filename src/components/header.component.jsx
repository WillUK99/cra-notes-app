export const Header = ({ handleThemeToggle }) => {
  return (
    <header className="header">
      <h1 className="header-text">Notes +</h1>
      <button
        className="save"
        onClick={() => handleThemeToggle((isDarkMode) => !isDarkMode)}
      >
        Toggle Mode
      </button>
    </header>
  );
};
