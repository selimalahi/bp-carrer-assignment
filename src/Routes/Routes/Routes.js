import ContractUs from "../../Component/ContractUs/ContractUs";
const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Home } = require("../../Component/Home/Home/Home");


export const router = createBrowserRouter([
    
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },   
            {
                path: '/contract',
                element: <ContractUs />
            },      
            
        ]
       
      
    },
    { path: '*', element: <div className="text-center mt-10">This Route Not Found</div>}
  

])