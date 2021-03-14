const List = (props) => {
    console.log(props)
    return (
        <section style={{ background: props.bg ? "aqua" : 'none' }} >
            <img src={props.img} alt="" />
            <h3 id="title">{props.listTitle}</h3>
        </section>
    );
}

export default List;