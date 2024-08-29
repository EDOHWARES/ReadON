import Features from "../../components/Features/Features"
import Header from "../../components/Header/Header"
import Hero from "../../components/Hero/Hero"
const Home = () => {
  return (
    <div>
      <Header />
      <body className=" mt-14 px-10 md:px-16">
        <Hero />
        <Features />
      </body>
    </div>
  )
}

export default Home
