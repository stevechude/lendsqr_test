"use client";
import Image from "next/image";
import styles from "../styles/home.module.scss";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function Home() {
  const router = useRouter();

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    router.push("/users");
  };

  return (
    <>
      <div>
        <div className={styles.container}>
          <div className={styles.left}>
            <Image src={"/lendsqr.svg"} width={150} height={36} alt="logo" />
            <Image
              src={"/images/login/sign-in.png"}
              width={500}
              height={300}
              alt="Sign In"
            />
          </div>

          <div className={styles.right}>
            <div className={styles.wel}>
              <p className={styles.welcome}>Welcome!</p>
              <p className={styles.enter}>Enter details to login.</p>
            </div>

            <form onSubmit={handleLogin} className={styles.form}>
              <div>
                <input type="email" placeholder="Email" id="email" />
              </div>
              <div>
                <input type="password" placeholder="Password" id="password" />
              </div>
              <p className={styles.forgot}>Forgot PASSWORD?</p>

              <button type="submit" className={styles.btn}>
                LOG IN
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
