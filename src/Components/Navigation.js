    import './navbar.css'
    
        // I needed to import the stylings of the css file connected to
        // this file so that when I you looked at it would not look like 
        // highlighted and underlined words
    
    function Navigation() {
        return (      
            // I needed parentheses since it was more than one line
        
            <div className='navbar'>
                <a href='/'>LOGO</a>
                <a href="/">LOGO</a>
                <a href='/'>LOGO</a>
            </div>
        )
    };
        // Once I am done with the function I just need to export so the 
        // information can leave go wherever it is imported.
    export default Navigation

    // Add more to make sure the navbar makes sense then 
    // add the css to make it dropdown and be responsive