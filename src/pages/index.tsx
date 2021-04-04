import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Table from "../components/table"
import LoginButton from "../components/login-button"
import UserProfile from "../components/user-profile"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <LoginButton />
    <Table />
    <UserProfile />
  </Layout >
)

export default IndexPage
