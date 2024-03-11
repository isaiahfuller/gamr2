import { Avatar, Button, Flex, Icon, Spinner, useColorMode } from "@chakra-ui/react";
import { faMoon, faRightToBracket, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OwnedGameList, SteamUser } from "../interfaces";

export interface NavbarProps {
  isAuthenticated: boolean;
  user: SteamUser;
  games: OwnedGameList;
}

export default function Navbar({ isAuthenticated, user, games }: NavbarProps) {
  const { colorMode, toggleColorMode } = useColorMode();

  async function logOut() {
    await fetch("/steam/auth/logout", { method: "delete" });
    localStorage.removeItem("owned games");
    window.location.href = "/";
  }

  return (
    <Flex justifyContent="space-between" padding={2}>
      <div>GAMR</div>
      <div></div>
      <div>
        <Flex alignItems="center">
          {isAuthenticated && games ? (
            <>
              <Avatar
                size="md"
                name={user.personaname}
                src={user.avatarmedium}
                padding={1}
              />
              <Flex flexDir="column">
                <Flex>
                  <p>{user.personaname}</p>
                </Flex>
                <Flex>
                  <p>{games.personal.game_count} games</p>
                </Flex>
              </Flex>
              <Button onClick={logOut} margin={1}>
                <Icon as={FontAwesomeIcon} icon={faRightToBracket} />
              </Button>
            </>
          ) : isAuthenticated && !games ? <Spinner /> : (
            <Button mx={1}>
              <a href="/steam/auth">
                <Icon as={FontAwesomeIcon} icon={faRightToBracket} pr={2} />
                Login
              </a>
            </Button>
          )}
          <Button onClick={toggleColorMode}><Icon as={FontAwesomeIcon} icon={colorMode === "light" ? faMoon : faSun} /></Button>
        </Flex>
      </div>
    </Flex>
  );
}
