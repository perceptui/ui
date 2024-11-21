import { Radio, RadioGroup } from "./main";

function App() {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <RadioGroup>
        <Radio value="1">Option 1</Radio>
        <Radio value="2">Option 2</Radio>
        <Radio value="3">Option 3</Radio>
      </RadioGroup>{" "}
    </div>
  );
}

export default App;
