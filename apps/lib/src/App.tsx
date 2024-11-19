import { Alert } from "./main";

function App() {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <Alert message={"This is a alert."} type={"error"} />
    </div>
  );
}

export default App;
