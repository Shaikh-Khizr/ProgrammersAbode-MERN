import React from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "../../Components/Shared/Button/Button";
import Card from "../../Components/Shared/Card/Card";
import styles from "./Home.module.css";

export const Home = () => {

  const history = useHistory();
  const startRegister = () => {
    history.push('/register');
  }

  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to ProgrammersAbode!" icon="PALogo">
      <p className={styles.text}>
          We’re working hard to get ProgrammersAbode ready for everyone! While
          we wrap up the finishing youches, we’re adding people gradually to
          make sure nothing breaks
        </p>
        <div>
          <Button onClick={startRegister} text="Get your username" />
        </div>
        <div className={styles.signInWrapper}>
          <span className={styles.hasInvite}>Have an invite text?</span>
          <Link className={styles.signInLink} to="/login">Sign in</Link>
        </div>
      </Card>
    </div>
  );
};
