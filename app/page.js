import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p className=' text-center text-3xl text-blue-500'>Welcome to our next page!</p>
      <p >{process.env.name}</p>
      <Link href={'/about'}>Go to about page</Link><br/>
      <Link href={'/posts/1'}>Go to the post 1 </Link><br/>
      <Link href={'/posts/2'}>Go to the post 2 </Link>
    </div>
  );
}
