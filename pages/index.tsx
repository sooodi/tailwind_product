import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import styles from "../styles/Home.module.css";
import useProducts from "../hook/products";
type product={
  id:number;
  title:string;
  description:string;
  image:string;
  price:number;
}
const Home: NextPage = () => {
  const { isLoading, data, refetch } = useProducts();
  console.log("data", data);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h4 className={styles.title}>
          Soodabeh Taherpanah{" "}
          <a href="https://sudytaherpanah.netlify.app/">See My Portfolio!</a>
        </h4>

        {(isLoading || !data )? (
          <p className="mt-8 flex  h-full font-bold text-red-300">
            Loading....
          </p>
        ) : (
          <div className="mt-10  grid grid-cols-2 gap-4">
            {(data as product[]).map((product) => (
              <Fragment key={product.id}>
                <a href={`/product/${product.id}`} className={styles.card}>
                <div className="flex flex-col h-full place-content-between ">
                  <div className="flex flex-col-reverse justify-center  h-full">
                    <div className="aspect-w-1 aspect-h-1  ">
                    <img
                        src={product?.image}
                        // alt={product?.image?.alt}
                        className="h-full w-full  object-center sm:rounded-lg"
                    />
                    </div>
                  </div>
                  <div className="flex items-center flex-col justify-center">
                    <h4>{product.title}</h4>
                    <p>{product.price}$</p>
                  </div>
                  </div>
                </a>
              </Fragment>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
