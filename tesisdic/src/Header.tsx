import logo from '../images/ehui_logo.svg';

function Header(){
    return(
        <div>
            <header className="h-20 w-full border-b-2 border-slate-200 px-4">
                <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
                    <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                        <img src={logo} height={60} width={60} alt="Ehui"/>
                        <h1 className=" text-2xl font-extrabold text-amber-400 tracking-wide">Ehui</h1>
                    </div>
                    
                </div>
            </header>
        </div>
    )
}
export default Header;