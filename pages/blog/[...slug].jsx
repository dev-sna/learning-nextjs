import {useRouter} from "next/router"

const Blog = () => {
    const router = useRouter()
    console.log('router: ', router);

    return (<h1>
        Blog page
    </h1>)
}
export default Blog