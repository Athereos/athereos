import React, { Fragment, useContext, useEffect } from "react";
import { CarContext } from "../context/CarProvider";
import ItemCheckout from "./ItemCheckOut";
import { collection,addDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { useState } from "react";

const Checkout = () => {

    const { cart,setCart } = useContext(CarContext);

    const [nombre,setNombre]= useState("");
    const [apellido,setApellido]= useState("");
    const [telefono,setTelefono]= useState("");
    const [email,setEmail]= useState("");
    const [confEmail,setConfEmail]= useState("");

    const [total, setTotal]=useState(0)


    const [isDisabled,setIsDisabled]=useState(false);

    const form = {
        buyer:{nombre:nombre,apellido:apellido,telefono:telefono,email:email},
        items:cart,
        total:100
    }; 
    useEffect(() => {
        if(cart.length > 0){

            const totalPrice = cart.reduce((total, item) => total + item.price, 0);
            setTotal(totalPrice);
        }

       
        console.log(cart);

    }, []);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(cart.length > 0){

            if(nombre === "" || apellido === "" || telefono === "" || email === ""){
                alert("Todos los campos son obligatorios");
            }
            else{
                if(email === confEmail){              
                    const col = collection(db,'orders');
                    const order = await addDoc(col,form);
                    alert("Su orden se ha generado de forma exitosa con el id: "+order.id);
                }
                else{
                    alert("Necesitar confirmar el email correctamente.");
                }
                
            }
        }
        else{
            alert("No tienes productos en el carrito");
        }
        
        
        
    }

    const handleClean = async (e) =>{
        setCart([]);
    }

    return (
        <Fragment>
            <div className="App">
                <h1>Checkout</h1>
                <h1>Monto total agregado: ${total}</h1>
                <div className="row fullscreen">
                    <div className="col-md-6 informacion">
                        <form>
                            Nombre:
                            <input type="text" className="form-control" value={nombre} onChange={(event) => setNombre(event.target.value)} required />
                            <br />
                            Apellido:
                            <input type="text" className="form-control" value={apellido} onChange={(event) => setApellido(event.target.value)} required />
                            <br />
                            Teléfono:
                            <input type="text" className="form-control" value={telefono}  onChange={(event) => setTelefono(event.target.value)} required />
                            <br />
                            E-mail:
                            <input type="text" className="form-control" value={email} onChange={(event) => setEmail(event.target.value)} required />
                            <br />
                            Confirmar E-mail:
                            <input type="text" className="form-control" value={confEmail} onChange={(event) => setConfEmail(event.target.value)} required />
                            <br />
                            <input type="submit" disabled={isDisabled} onClick={handleSubmit} className="form-control btn btn-info" value="Ordenar" />
                            <br />
                            <br />
                            <button type="button" onClick={handleClean} className="form-control btn btn-warning" value="Limpiar carrito" >Limpiar carrito</button>
                        </form>
                    </div>
                    <div className="col-md-6 scroll">
                        <div className="listaItems">
                            {
                                cart.length > 0
                                    ?
                                    (
                                        cart.map((item) => (
                                            <ItemCheckout key={item.id}{...item} />
                                        ))
                                    )
                                    :
                                    (
                                        <span>No hay productos en el carrito</span>
                                    )
                            }
                        </div>
                    </div>
                </div>
                <div className="items-checkout"></div>

            </div>
        </Fragment>
    );
}

export default Checkout;