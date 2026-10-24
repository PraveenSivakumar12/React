import router from "./Routes/route";
import { RouterProvider } from "react-router-dom";


export default function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}
