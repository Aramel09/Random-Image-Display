import { useRef, useState } from "react";
import Button from "./components/Button";
import Input from "./components/SearchBar";
import Image from "./components/Image";


function App() {

const [terms, setTerms] = useState("")

  const handleClick = (e) => {
    const name = searchBar.current.value
    setTerms(name)
}

  const searchBar = useRef();

  return <>
    <h1 className="my-8 text-center text-3xl font-black">
      Display a Random Image
    </h1>

    <main className="flex flex-col items-center justify-center">
      <form className="mb-8 flex flex-col items-center gap-y-4"
      onSubmit={(e) => e.preventDefault()}>

        <Input inputInfo ={ searchBar } />
        <Button click={ handleClick } inputInfo={searchBar}/>
        <Image data={terms} />          
      </form>
    </main>
  </>;
}

export default App;
