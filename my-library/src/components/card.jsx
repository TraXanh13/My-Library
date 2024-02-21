import './css/card.css'

function card(props) {
    return (
        <div className="card" style={{
            backgroundImage: `url("${props.url}")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            boxShadow: "5px 5px 20px black"
        }}>

            <article className="cardInfo">
                <h3>{props.title}</h3>
                <p>{props.author}</p>
            </article>
        </div>
    );
}

card.defaultProps = {
    title: "No title to display",
    author: "no author to display"
}

export default card;