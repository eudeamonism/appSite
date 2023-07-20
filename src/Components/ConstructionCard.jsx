import { Text, VStack, Image, useMediaQuery } from "@chakra-ui/react";

const ConstructionCard = () => {
  const [isSmallerThan850] = useMediaQuery("(max-width: 850px)", {
    ssr: true,
    fallback: "false",
  });

  return (
    <VStack
      borderRadius="16"
      border="1px"
      borderColor="gray.300"
      pt="4"
      pr="2"
      maxW={isSmallerThan850 ? "350px" : "425px"}
      height={isSmallerThan850 ? "450px" : "425px"}
      pl="2"
      mt="2"
    >
      <Text fontSize="xl">Under Construction</Text>
      <Image boxSize="340px" objectFit="cover" src="/images/constructionPhotoFinal.jpg" />
    </VStack>
  );
};

export default ConstructionCard;
