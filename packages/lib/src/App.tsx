import { Alert, Button } from "./main";
import { Flex } from "./layouts/flex";

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
      <div className="mt-10">
        <Flex gap={0}>
          <Alert type="success" variant="solid" message="Success Alert" />
          <Alert type="error" variant="solid" message="Error Alert" />
          <Alert type="warning" variant="solid" message="Warning Alert" />
          <Alert type="info" variant="solid" message="Info Alert" />
        </Flex>
      </div>
    </div>
  );
}

export default App;
