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

            <h3>{props.title}</h3>
        </div>
    );
}

export default card;