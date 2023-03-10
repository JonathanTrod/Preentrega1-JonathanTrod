import CartWidget from "../../CartWidget/CartWidget";

const Nav = () => {
  return (
    <Nav
      style={{
        display: "flex",
        justifyContent: "space-around",
        alingItems: "center",
      }}
    >
      <h1>El Secreto</h1>
      <section>
        <button>Picadas</button>
        <button>Promos</button>
      </section>
      <CartWidget />
    </Nav>
  );
};

export default Nav;
