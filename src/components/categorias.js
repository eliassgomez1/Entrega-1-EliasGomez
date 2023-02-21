import Categorias from "./Categorias";


import camperas from "../imagenes/R.jpeg";
import zapas from "../imagenes/original.jpg";




export default function Botones() {



    const categorias = [{ nombre: "Zapatillas", img: zapas }, { nombre: "Camperas", img: camperas }, { nombre: "Buzos", img: buzo }]


    return (

        <ul className="ropa">
            {categorias.map((categoria, idx) => <Categoria key={idx} nombre={categoria.nombre} imgSrc={categoria.img} />)}

        </ul>

    )



}