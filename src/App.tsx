import { useEffect, useState } from "react";
import "./App.css";
import { Container, Flex, Spacer, Spinner } from "@chakra-ui/react";
import { SteamUser, AuthValidResponse, OwnedGameList } from "./interfaces";
import Navbar from "./components/Navbar";
import TopTags from "./components/TopTags";

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<SteamUser>();
  const [games, setGames] = useState<OwnedGameList>();

  useEffect(() => {
    fetch("/steam/auth/valid", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((res: AuthValidResponse) => {
        // console.log(res);
        if (res.isAuthenticated && localStorage.getItem("owned games")) {
          setGames(JSON.parse(localStorage.getItem("owned games")!));
        } else if (res.isAuthenticated) {
          fetch("/steam/owned", {
            credentials: "include",
          })
            .then((res) => res.json())
            .then((games) => {
              // console.log(games);
              setGames(games);
              localStorage.setItem("owned games", JSON.stringify(games));
              setLoading(false);
              setAuthenticated(res.isAuthenticated);
            });
        }
        setUser(res.user);
        setLoading(false);
        setAuthenticated(res.isAuthenticated);
      });
  }, []);

  if (loading)
    return (
      <Container height="max-content" centerContent={true}>
        <Flex
          flexDirection="column"
          justifyContent="space-between"
          align="center"
          h="container.sm"
        >
          <Spacer />
          <Spinner size="xl" />
          <Spacer />
        </Flex>
      </Container>
    );
  if (isAuthenticated)
    return (
      <>
        <Navbar isAuthenticated={isAuthenticated} user={user!} games={games!} />
        <Container maxWidth="60%">
          <TopTags games={games!} />
        </Container>
      </>
    );
  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} user={user!} games={games!} />
    </>
  );
}

export default App;
