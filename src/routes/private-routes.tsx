import { Router, Redirect } from 'react-router-dom'

export default function PrivateRoute({ component, ...rest }: any) {
  const user = localStorage.getItem('coffeland:userData')

  if (!user) {
    return <Redirect to="login" />
  }

  return (
    <>
      <Router component={component} {...rest} />
    </>
  )
}
