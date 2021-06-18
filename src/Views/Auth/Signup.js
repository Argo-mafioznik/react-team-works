import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert, Container } from "react-bootstrap"
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from "react-router-dom"
import classes from './auth.module.css'

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <>
    <Container className='d-flex align-items-center justify-content-center' style={{minHeight: '100vh'}}>
        <div className='w-100' style={{maxWidth: '400px'}} >

      <div className={classes.card}>
        <div>
          <h2 className={classes.h2}>Sign Up</h2>
          {error && <span style={{color: 'red'}}>{error}</span>}
          <form onSubmit={handleSubmit}>
            <div id="email">
              <p className={classes.p}>Email</p>
              <input className={classes.inp} type="email" ref={emailRef} required />
            </div>
            <div id="password">
              <p className={classes.p} >Password</p>
              <input className={classes.inp} type="password" ref={passwordRef} required />
            </div>
            <div id="password-confirm">
              <p className={classes.p} >Password Confirmation</p>
              <input className={classes.inp} type="password" ref={passwordConfirmRef} required />
            </div>
            <button disabled={loading} className={classes.btn} type="submit">
              Sign Up
            </button>
          </form>
        </div>
      <div className="w-100 text-center mt-2">
        <span style={{color: 'white'}}> Already have an account? </span><Link className={classes.login} to="/login">Log In</Link>
      </div>
      </div>
        </div>
    </Container>

    </>
  )
}