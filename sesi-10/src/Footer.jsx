export default function Footer(){
    return(
        <div className="bg-violet-700 text-white mt-16">
            <div className="text-center text-sm text-violet-200 border py-4">
                &copy; {new Date().getFullYear()} Marketplace. All Right Reserved.
            </div>
        </div>
    )
}