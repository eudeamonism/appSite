import { VStack, useMediaQuery, Center, Flex } from "@chakra-ui/react";

import Large from "../Components/Music/Large";
import Small from "../Components/Music/Small";

const Music = () => {
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

export default Music;