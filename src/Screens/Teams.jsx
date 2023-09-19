import { VStack, useMediaQuery } from "@chakra-ui/react";

import Large from "../Components/Teams/Large";
import Small from "../Components/Teams/Small";

const Teams = () => {
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

export default Teams;
