import List from './List';
const Todolist = () => {
    return (
        <div className="todo">
            <h1><span id="Buchstabe">T</span><span id="text">o do List</span></h1>
            <section id="sec">
                <List
                    img={"https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-check-mark-1.png&r=0&g=0&b=0"}
                    listTitle={"Hit the gym"}
                />
                <List
                    img={"https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-check-mark-1.png&r=0&g=0&b=0"}
                    listTitle={"Pay bills"}
                />
                <List
                    img={"https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2018/png/iconmonstr-construction-1.png&r=0&g=0&b=0"}
                    listTitle={"Meet George"}
                    bg={"background_color:aqua"}
                />
                <List
                    img={"https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2018/png/iconmonstr-construction-1.png&r=0&g=0&b=0"}
                    listTitle={"Buy Eggs"}
                    bg={"background_color:aqua"}
                />
                <List
                    img={"https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-x-mark-1.png&r=0&g=0&b=0"}
                    listTitle={"Read a Book"}
                />
                <List
                    img={"https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-x-mark-1.png&r=0&g=0&b=0"}
                    listTitle={"Organize Office"}
                />
            </section>
        </div >
    );
}

export default Todolist;