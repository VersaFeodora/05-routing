import Link from "next/link"
type Props = {
    params: {
          productId: string
    }
  }
  
  export default function ProductDetails({ params }: Props) {
    return (
          <>
            <h1>Details about product {params.productId}</h1>
            <h2><Link href='./1/reviews'>Review</Link></h2>
          </>
    )
  }
