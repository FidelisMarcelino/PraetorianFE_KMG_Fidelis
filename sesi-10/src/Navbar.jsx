export default function Navbar(){
    return(
        <div className="fixed top-0 w-full bg-white shadow px-6 py-4 flex justify-between">
            <p className="font-bold text-xl">MyMarket</p>
            <button className="cursor-pointer">🛒 Cart</button>
        </div>
    )
}