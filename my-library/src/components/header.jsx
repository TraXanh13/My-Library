import './css/header.css'

function header(props) {
    return (
        <header>
            <div id="topNav">
                <img src="https://picsum.photos/50/25" alt="logo"></img>
                {props.search? <input id="topNavSearch" type="search" placeholder='Search for a book'></input> : ""}
                <section id="profileSection">
                    <p>Name</p>
                    <img id="profilePic"src="https://picsum.photos/25/25" alt="Users profile pic"></img>
                </section>
            </div>
            <div id="hr"></div>
            <div id="nav">
                <p>Home</p>
                <p>Categories</p>
                <p>Top Trending</p>
            </div>
        </header>
        
    );
}

export default header;