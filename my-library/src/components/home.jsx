import "./css/home.css"
import Card from "./card.jsx"

export default function home(){
    return (
        <section id="home">
            <article className="landingArticles textCenter">
                <h1>My Library</h1>
                <form>
                    <input id="homeSearch" placeholder="Search..." />
                </form>
            </article>
            <article className="landingArticles flex">
                <Card url="https://picsum.photos/200/500"/>
                <Card url="https://picsum.photos/200/400"/>
                <Card url="https://picsum.photos/200/300"/>
                <Card url="https://picsum.photos/200/200"/>
            </article>
        </section>
    )
}