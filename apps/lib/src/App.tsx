import { Avatar, AvatarFallback, AvatarImage } from "./main";

function App() {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <Avatar className="h-64 w-64" variant="outline" radius="full">
        <AvatarImage className="" src="https://images.pexels.com/photos/27269560/pexels-photo-27269560/free-photo-of-marti.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
        <AvatarFallback>A</AvatarFallback>
      </Avatar>
    </div>
  );
}

export default App;
