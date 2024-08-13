import Main from "./components/Main";
import { TextColorProvider } from "./context/textColor";
export default function Home() {
  
  return (
    <>
      <TextColorProvider>
       <Main/>
      </TextColorProvider>
    </>
  );
}
