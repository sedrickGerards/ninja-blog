const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1> Ninja blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
                {/* how to set an inline style */}
                
                    {/* <a href="/" style={{
                        color:"blue",
                        backgroundColor:'#f1356d',
                        borderRadius:'8px'
                    }}>New Blog</a>
                */}
            </div>
        </nav>
     );
}
 
export default Navbar;