export default function Footer() {
    return (
        <footer className="bg-black text-white py-6 px-4 w-full">
            <div className="max-w-screen-xl w-full mx-auto text-normal px-4 sm:px-10 md:px-14 lg:px-56">
                <nav className="space-x-4 flex justify-start">
                <span>{new Date().getFullYear()}</span>
                <span>© Sajid Reshamwala</span>
                <span>All rights reserved</span>
                </nav>
                  
            </div>

        </footer>

    )

}
