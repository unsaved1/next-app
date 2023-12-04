import Spinner from "@/component/base/Spinner";
import styles from './loading.module.css';

const Loading = () => {
    return <Spinner className={styles.loading}/>
};

export default Loading;