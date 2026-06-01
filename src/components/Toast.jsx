function Toast({
    mensagem,
    visivel
}) {
    if (!visivel) {
        return null;
    }

    return (
        <div
            className="toast"
            role="alert"
        >
            <p>{mensagem}</p>
        </div>
    );
}

export default Toast;