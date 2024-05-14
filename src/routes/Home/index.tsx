import { Layouts, Hero } from "@/components/index";
import { Movie } from "./sections/index";

function Home() {
  return (
    <Layouts>
      <Hero />
      <Movie />
    </Layouts>
  );
}

export default Home;
