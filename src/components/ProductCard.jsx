import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ post }) {
  return (
    <Link
      href={`/camisetas/${post.slug}`}
      key={post.slug}
      className="max-w-sm max-sm:w-full shadow-2xl"
    >
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
        <div className=" shine-container">
          {" "}
          {post.thumb ? (
            <img src={post.thumb} className="rounded-t-lg  shine-image" />
          ) : (
            <Image src={post.imagen} className="rounded-t-lg  shine-image" />
          )}
        </div>

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 tittleCard">
            {post.title}
          </h5>

          <p className="mb-3 font-normal text-gray-700 descriptionCard">
            {post.description}
          </p>

          <div className="container-BuyButton-priceText">
            <p className="priceText">{post.price}</p>

            <div className="buttons-Container">
              <p className="Buttons-Product-Card Button-Add-To-Card">
                Add to card
              </p>

              <p className="Buttons-Product-Card Button-Buy">Comprar</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
