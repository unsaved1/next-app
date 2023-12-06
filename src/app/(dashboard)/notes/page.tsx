import {Metadata} from "next";
import styles from './notes.module.css';
import Notes from "@/component/Notes";
export const metadata: Metadata = {
    title: 'Notes',
    description: 'Notes page'
};
const NotesPage = () => {
    return (
        <div className={styles.pageWrapper}>
            <h1>notes page</h1>
            <div className={styles.notes}>
                <Notes/>
            </div>
        </div>
    );
};

export default NotesPage;