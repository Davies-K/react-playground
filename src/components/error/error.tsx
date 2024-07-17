import styles from "./error.module.scss"

export interface Props {
    error: string;
}

export const Error = ({error}: Props) => error ? <div className={styles.error}>{error}</div>: <></>
