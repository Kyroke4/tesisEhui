import { cn } from "@/lib/utils";
import logo from '../../images/ehui_logo.svg';
import { Link } from "react-router-dom";
import { SidebarItem } from "./sidebar-item";

type Props = {
    className?: string;
};
export const Sidebar = ({ className }: Props) =>{
    return(
        <div className={cn("flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className,
        )}>
            <Link to="/learn">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <img src={logo} height={60} width={60} alt="Ehui"/>
                    <h1 className=" text-2xl font-extrabold text-amber-400 tracking-wide">Ehui</h1>
                </div> 
            </Link>
            <div className="flex flex-col gap-y-2 flex-1">
                <SidebarItem label="Aprender" href="/learn" iconSrc="/../../images/icon_learn.svg"></SidebarItem>
                <SidebarItem label="Escuchar" href="/escuchar" iconSrc="/../../images/icon_escuchar.svg"></SidebarItem>
                <SidebarItem label="Leer" href="/leer" iconSrc="/../../images/icon_leer.svg"></SidebarItem>
                <SidebarItem label="juramento" href="/juramento" iconSrc="/../../images/icon_juramento.svg"></SidebarItem>
            </div>
               
        </div>
    );
};