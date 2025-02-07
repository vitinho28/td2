import CartForm from "../forms/CartForm";

interface ModalCartProps {
    closeCart: () => void;
}

const ModalCart: React.FC<ModalCartProps> = ({closeCart}) => {
    return (
        <div className="modal-backdrop-blur">
            <div className="modal fade show d-block" tabIndex={-1} role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-info">Carrinho</h5>
                            <button type="button" className="close" onClick={closeCart}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <CartForm closeCart={closeCart}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-info" onClick={closeCart}>Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalCart;