import type { RouteObject } from "react-router";
import MainLayout from "./components/layouts/MainLayout";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SalesPage from "./pages/SalesPage";
import UsersPage from "./pages/UsersPage";
import ProductsPage from "./pages/ProductsPage";
import NewUserPage from "./pages/NewUserPage";
import EditUserPage from "./pages/EditUserPage";
import EditProductPage from "./pages/EditProductPage";
import { ProductForm } from "./pages/ProductForm";
import MailPage from "./pages/MailPage";
import FeedbackPage from "./pages/FeedbackPage";


export const routes: RouteObject[] = [
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <NotFoundPage />,
        
        children: [
            { index: true, element: <DashboardPage /> },
            {
                path: "analytics",
                element:<AnalyticsPage/>
            },
            {
                path: "sales",
                element:<SalesPage/>  
            },
            {
                path: "users",
                element:<UsersPage/>  
            },
            {
                path: "users/new",
                element:<NewUserPage/>
            },
            {
                path: "users/:userid/edit",
                element:<EditUserPage/>
            },
            {
                path: "products",
                element:<ProductsPage/>  
            },
            {
                path: "products/:productId/edit",
                element:<EditProductPage/>
            },
            {
                path: "products/new",
                element:<ProductForm/>
            },
            {
                path: "mail",
                element:<MailPage/>
            },
            {
                path: "feedback",
                element:<FeedbackPage/>
            },
       
        ]
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
]

