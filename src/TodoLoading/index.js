import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function TodoLoading() {
  return (
    <>
      <Skeleton />
      <p></p>
      <Skeleton count={5} />
    </>
  )
}

export { TodoLoading };
