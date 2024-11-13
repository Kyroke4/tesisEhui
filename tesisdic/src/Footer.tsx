const currentYear = new Date().getFullYear()
function Footer(){
    return(
        <div>
            <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
                <p className="text-center">© {currentYear} Christopher Serrano</p>
            </footer>
        </div>
    )
}
export default Footer;