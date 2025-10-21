import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <main className="py-8">
            <div className="container px-4 lg:px-0 lg:mx-auto text-center">
                <div className="flex justify-center mb-8">
                    <Image src="/logo.svg" alt="Logo Samstick" width={200} height={200} />
                </div>
                <h1 className="text-4xl font-bold mb-4">Samstick</h1>
                <p className="text-lg mb-4">
                    Testez vos connaissances sur le hockey en devinant si le joueur est droitier ou gaucher, ou s&apos;il a du tape noir ou blanc.
                    <br />
                    Jeu inspiré par <a href="https://www.instagram.com/montembeault.samuel/">@montembeault.samuel</a> et <a href="https://www.instagram.com/drettesultape/">@drettesultape</a>.
                </p>
            </div>
            <div className="container px-4 lg:px-0 lg:mx-auto text-center mt-8">
                <h2 className="text-3xl font-bold mb-4">Gaucher ou droitier</h2>
                <ul className="grid grid-cols-1 gap-4">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <li key={i} className="">
                            <Link href={`/niveau-${i + 1}`}>
                                <a className="bg-white hover:bg-gray-100 p-4 rounded-lg shadow border border-gray-100 mx-auto inline-block text-center text-lg font-bold">
                                    Niveau {i + 1}
                                </a>
                            </Link>
                        </li>
                    ))}
                    <li className="">
                        <Link href={`/niveau-2005-2015`}>
                            <a className="bg-white hover:bg-gray-100 p-4 rounded-lg shadow border border-gray-100 mx-auto inline-block text-center text-lg font-bold">
                                Saisons 2005-2015
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="container px-4 lg:px-0 lg:mx-auto text-center mt-8">
                <h2 className="text-3xl font-bold mb-4">Tape noir ou blanc</h2>
                <ul className="grid grid-cols-1 gap-4">
                    <li className="">
                        <Link href={`/tape-1`}>
                            <a className="bg-white hover:bg-gray-100 p-4 rounded-lg shadow border border-gray-100 mx-auto inline-block text-center text-lg font-bold">
                                Tape niveau 1
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </main>
    );
}