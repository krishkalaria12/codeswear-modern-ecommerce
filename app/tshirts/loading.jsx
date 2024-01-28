import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Loading() {
    return (
        <div className="flex space-x-2 min-h-screen justify-center items-center">
            <img src="/Bean Eater-0.9s-200px.svg" alt="" />
            <h1>Loading</h1>
        </div>
    )
}

export default Loading