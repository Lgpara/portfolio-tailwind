export default function PageContainer({children}){
    return(
        <div className=" min-h-screen w-full flex justify-center">
            <div className="w-4/5 h-full">{children}</div>
        </div>
    )
}