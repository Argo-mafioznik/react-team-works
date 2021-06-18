import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from "react-router-dom"
import {Container} from 'react-bootstrap'
import classes from './auth.module.css'

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
    <Container className='d-flex align-items-center justify-content-center' style={{minHeight: '100vh'}}>
        <div className='w-100' style={{maxWidth: '400px'}} >

      <div className={classes.card}>
        <div>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <span style={{color: 'red'}} variant="danger">{error}</span>}
          <form onSubmit={handleSubmit}>
            <div id="email">
              <p className={classes.p}>Email</p>
              <input className={classes.inp} type="email" ref={emailRef} required />
            </div>
            <div id="password">
              <p className={classes.p}>Password</p>
              <input className={classes.inp} type="password" ref={passwordRef} required />
            </div>
            <button className={classes.btn} disabled={loading}  type="submit">
              Log In
            </button>
          </form>
          <div className="w-100 text-center mt-3">
            <Link className={classes.login} to="/forgot-password">Forgot Password?</Link>
          </div>
        </div>
      <div className="w-100 text-center mt-2">
       <span style={{color: 'white'}} >Need an account?</span>  <Link to="/signup">Sign Up</Link>
      </div>
      </div>
      </div>
      </Container>
    </>
  )
}