import { VStack, useMediaQuery } from "@chakra-ui/react";

import Large from "../Components/LandingPage/Large";
import Small from "../Components/LandingPage/Small";

const LandingPage = () => {
  const [isSmallerThan850] = useMediaQuery("(max-width: 850px)", {
    ssr: true,
    fallback: "false",
  });

  return (
    <>
      {!isSmallerThan850 ? (
        <Large />
      ) : (
        <VStack>
          <Small />
        </VStack>
      )}
    </>
  );
};

export default LandingPage;
