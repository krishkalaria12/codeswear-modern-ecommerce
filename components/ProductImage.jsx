import Image from "next/image"

function ProductImage() {
    return (
        <Image
                alt="Hoodie 1"
                className="rounded-lg"
                height="200"
                src="/placeholder.svg"
                style={{
                aspectRatio: "150/200",
                objectFit: "cover",
                }}
                width="150"
            />
    )
}

export default ProductImage