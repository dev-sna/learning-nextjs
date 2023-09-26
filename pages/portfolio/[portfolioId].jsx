import { useRouter } from "next/router"

const SinglePortfolio = () => {
    const router = useRouter()
    console.log('router: ', router);


    return <h1>Portfolio page for id {router.query.portfolioId}</h1>
}

export default SinglePortfolio