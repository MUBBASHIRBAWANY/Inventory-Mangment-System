import Home from "/src/Pages/Home/Home.jsx?t=1734802839613";
import Login from "/src/Pages/Login/Login.jsx";
import Vendor from "/src/Pages/Vendor/vendor.jsx";
import VendorAdd1 from "../Pages/Vendor/VendorAdd.jsx";
import Signup from "/src/Pages/Signup/Signup.jsx"; // Make sure the correct path is used1
import VendorEdit from "../Pages/Vendor/VendorEdit.jsx";
import Client from "../Pages/Client/Client.jsx";
import ClientAdd from "../Pages/Client/ClientAdd.jsx";
import ClientEdit from "../Pages/Client/ClientEdit.jsx";
import Products from "../Pages/Products/Products.jsx";
import ProductsAdd from "../Pages/Products/ProductsAdd.jsx";
import ProductEdit from "../Pages/Products/ProductEdit.jsx";
import Foc from "../Pages/Foc/Foc.jsx";
import FocAdd from "../Pages/Foc/FocAdd.jsx";
import FocEdit from "../Pages/Foc/FocEdit.jsx";
import PurchaseOrder from "../Pages/PurchaseOrder/PurchaseOrder.jsx";
import PurchaseOrderAdd from "../Pages/PurchaseOrder/PurchaseOrderAdd.jsx";
import PurchaseOrderEdit from "../Pages/PurchaseOrder/PurchaseOrderEdit.jsx";

const routes = [
    {
        path: '/',
        component: <Home />
    },
    {
        path: '/Signup',
        component: <Signup />
    },
    {
        path: '/Login',
        component: <Login />
    },
    {
        path: "/vendor",
        component: <Vendor />
    },
    {
        path: "/Vendor/Add",
        component: <VendorAdd1 />
    },
    {
        path: "/Vendor/Edit/:id",
        component: <VendorEdit />
    },
    {
        path: "/client",
        component: <Client />
    },
    {
        path: "/client/Add",
        component: <ClientAdd />
    },
    {
        path: "/client/Edit/:id",
        component: <ClientEdit />
    },
    {
        path: "/Products",
        component: <Products />
    },
    {
        path: '/Products/Add',
        component: <ProductsAdd />
    },
    {
        path: '/Products/Edit/:id',
        component: <ProductEdit  />
    },
    {
        path: "/foc",
        component: <Foc />
    },
    {
        path: "/foc/add",
        component: <FocAdd />
    },
    {
        path: "/foc/edit/:id",
        component: <FocEdit />
    },
    {
        path : '/PurchaseOrder',
        component : <PurchaseOrder />
    },
    {
        path: '/PurchaseOrder/add',
        component: <PurchaseOrderAdd />
    },
    {
        path: '/PurchaseOrder/Edit/:id',
        component: <PurchaseOrderEdit />

    }

]

export default routes;