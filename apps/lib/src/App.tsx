import { Alert, Button } from "./main";

function App() {
  const changeTheme = (mode: string) => {
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(mode);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen dark:bg-black">
      <div className="flex items-center justify-between w-96">
        <Button
          onClick={() => changeTheme("dark")}
          color="light"
          variant="solid"
        >
          Dark Mode
        </Button>
        <Button
          onClick={() => changeTheme("light")}
          color="light"
          variant="solid"
        >
          Light Mode
        </Button>
      </div>
      <Alert
        type="success"
        message="This is a success alert"
      />
    </div>
  );
}

export default App;
