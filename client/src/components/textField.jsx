import { IoIosSend } from "react-icons/io";
import styles from './TextField.module.css';

export default function TextField({ setMessage, message, sendMessage }) {
  const handleSend = (e) => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <div className={styles.textFieldWrapper}>
      <form onSubmit={handleSend} className={styles.form}>
        <textarea
          className={styles.textarea}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendMessage();
            }
          }}
          placeholder="Type your message here..."
        />
        <button type="submit" className={styles.sendButton}>
          <IoIosSend size={28} />
        </button>
      </form>
    </div>
  );
}
