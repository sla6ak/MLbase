import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

function PrivateRoute({ children }) {
  const router = useRouter()
  const token = useSelector((state) => state.token)
  if (token.length < 1) {
    router.push('/')
  }
  return children
}
export default PrivateRoute
