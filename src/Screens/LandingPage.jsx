import { VStack, HStack, Center, useMediaQuery } from "@chakra-ui/react";

import ClubCard from "../Components/ClubCard";
import ConstructionCard from "../Components/ConstructionCard";

const LandingPage = () => {
  const [isSmallerThan850] = useMediaQuery("(max-width: 850px)", {
    ssr: true,
    fallback: "false",
  });

  return (
    <Center>
      {!isSmallerThan850 ? (
        <HStack>
          <ClubCard />
          <ConstructionCard />
        </HStack>
      ) : (
        <VStack>
          <ClubCard />
          <ConstructionCard />
        </VStack>
      )}
    </Center>
  );
};

export default LandingPage;
