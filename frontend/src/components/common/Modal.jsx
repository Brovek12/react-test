import { useEffect, useRef } from 'react'

function Modal({
    open,
    onClose,
    title,
    children
}) {
    const dialogRef = useRef(null)

    useEffect(() => {
        if (open) {
            dialogRef.current?.showModal()
        } else {
            dialogRef.current?.close()
        }
    }, [open])

    return (
        <dialog
            ref={dialogRef}
            className="modal"
            onClose={onClose}
        >
            <div className="modal-box">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-lg">
                        {title}
                    </h3>

                    <button
                        className="btn btn-sm btn-circle"
                        onClick={onClose}
                    >
                        ✕
                    </button>
                </div>

                {children}
            </div>

            <form
                method="dialog"
                className="modal-backdrop"
            >
                <button onClick={onClose}>
                    close
                </button>
            </form>
        </dialog>
    )
}

export default Modal