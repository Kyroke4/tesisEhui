import { Progress } from "@/components/ui/progress";
import { X } from "lucide-react";
import { useExitModal } from "../../store/use-exit-modal";

const Header = () => {
    const { open } = useExitModal();
    return(
        <div>
            <header className="lg:pt-[50px] pt-[20px] px-10 flex gap-x-7 items-center justify-between max-w-[1140px] mx-auto w-full pb-[20px]">
                <X onClick={open} //AGREGAR EXIT
                className="text-slate-500 hover:opacity-75 transition cursor-pointer">
                    
                    
                </X>
                <Progress value={20}></Progress>
            </header>
        </div>
    )
}
export default Header;