import styles from "../styles/cartao.module.css"

interface CartaoProps {
    bgcolor?: string
}

export default function Cartao(props) {
    return (
        <div className={styles.cartao}
            style={{
                backgroundColor: props.bgcolor ?? "#fff"
            }}>
            {props.children}
        </div>
    )
}