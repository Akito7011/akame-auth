const AuthLayout = ({children}:{children:React.ReactNode}) => {
    return ( 
        <div className=" text-white h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-red-300 to-orange-700">
            {children}
        </div>
    );
}
 
export default AuthLayout;