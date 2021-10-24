import './Details.css';

const Details = () => {
    return(
        <main>
        <article className="details">

            <div className="detail-images">
                <div className="details-image-container">
                    <img src="../../pictures/162957160_305983534196226_8975806114948278934_n.jpg"/>
                </div>
                <div className="details-image-container">
                    <img src="../../pictures/162957160_305983534196226_8975806114948278934_n.jpg"/>
                </div>
                <div className="details-image-container">
                    <img src="../../pictures/162957160_305983534196226_8975806114948278934_n.jpg"/>
                </div>
                <div className="details-image-container">
                    <img src="../../pictures/162957160_305983534196226_8975806114948278934_n.jpg"/>
                </div>
            </div>
            <h2 className="description-title main-subtittle">Some title</h2>

            <div className="details-description">
                <div className="price-art-number">
                    <p> <strong>Цена: </strong>50 лв</p>
                    <p>№ 12345678</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque facilis sint repellendus omnis
                    perferendis
                    alias, quos est consequatur sunt quaerat excepturi saepe animi laboriosam natus exercitationem? Amet
                    aliquam
                    aperiam non atque at nesciunt sit facilis, corporis in, aut, fugiat deleniti quos ipsa quidem.
                    Maxime
                    corporis, esse culpa doloremque rem ut recusandae. Tempora vel dolor quibusdam, quis amet,
                    doloremque
                    enim
                    voluptatibus non inventore recusandae totam molestias dignissimos nulla repellat consequatur libero
                    omnis
                    eum a, laborum quidem consequuntur. Optio, quidem. Quis laboriosam suscipit numquam vel quos at sunt
                    cum
                    quibusdam consequatur facilis velit ratione magni sit vitae quas, eaque debitis molestias.
                    Voluptatem
                    obcaecati ducimus vitae cum corporis, perspiciatis minima, ipsam fugiat placeat esse necessitatibus,
                    fuga
                    iusto! Dolore exercitationem dignissimos sint corrupti veritatis, saepe hic odio recusandae voluptas
                    eos
                    illo maxime alias optio voluptatum aperiam accusamus repellendus sed sit qui, fugiat asperiores
                    beatae
                    eveniet deleniti explicabo. Maiores consequatur quae aut iure libero rem!</p>

                    <button className="button order-button" type="submit">Поръчай</button>
                </div>
        </article>

    </main>
    )
};

export default Details;