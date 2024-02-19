'use-client'

import { Link, useLocation } from "react-router-dom";
import Container from "../Container";
import AdminNavItem from "./AdminNavItem";
import { MdDashboard } from "react-icons/md";


const AdminNav = () => {
    const { pathname } = useLocation();    

    return (
        <div className="w-full shadow-sm top-20 border-b-[1px] pt-4">
            <Container>
                <div className="flex flex-row items-center justify-between md:justify-center gap-8 md:gap-12 overflow-x-auto flex-nowrap">
                    <Link to="/admin">
                        <AdminNavItem label="Summary" icon={MdDashboard} selected={pathname === '/admin'} />
                    </Link>
                </div>
                
            </Container>
            
        </div>
    );
};

export default AdminNav;
