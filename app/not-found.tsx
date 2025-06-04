import Image from "next/image"
import NotFoundImage from './assets/not-found.webp'

export default function NotFound() {
    return (
        <main className="not-found">
            <Image src={NotFoundImage} width={600} height={450} alt="Not found" />
            <h1>404 - Not Found</h1>
        </main>
    )
}