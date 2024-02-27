import {
  Text,
  useMediaQuery,
  VStack,
  HStack,
  Center,
  Flex,
  Link,
  UnorderedList,
  ListItem,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";

const Eula = () => {
  const [isLargerThan400] = useMediaQuery("(max-width: 400px)", {
    ssr: true,
    fallback: "false",
  });

  return (
    <Container m={isLargerThan400 ? "4px" : null} maxWidth={isLargerThan400 ? "390px" : "800px"}>
      <Flex mb="2" direction="column">
        <Flex mb="2" direction="column">
          <Text
            fontWeight="md"
            fontSize="larger"
            color={useColorModeValue("orange.500", "blue.200")}
          >
            For Club and Country Software License Agreement
          </Text>
          <Text>
            This End-User License Agreement (this “EULA”) is a legal agreement between you
            (“Licensee”) and Upstate App Development LLC (“Licensor”), the author of For Club and
            Country including all files, technology and programs, both in object code and source
            code (the “Software”), the deliverables provided pursuant to this EULA, which may
            include associated media and “online” or electronic documentation.{" "}
          </Text>
          <Text>
            By installing, copying, or otherwise using the Software, Licensee agrees to be bound by
            the terms and conditions set forth in the EULA. If Licensee does not agree to the terms
            and conditions set forth in this EULA, then Licensee may not download, install or use
            the Software.
          </Text>
        </Flex>
        <Flex mb="2" direction="column">
          <Text
            fontWeight="md"
            fontSize="larger"
            color={useColorModeValue("orange.500", "blue.200")}
          >
            1 Grant of License.
          </Text>
          <Text>
            <b>SCOPE OF LICENSE:</b> &nbsp; Subject to the terms of this EULA, Licensor hereby
            grants to Licensee a royalty-free, non-exclusive license to possess and use a copy of
            the Software.
          </Text>
          <Text>
            <b>INSTALLATION AND USE:</b> &nbsp; Licensee may install and use a maximum of one (1)
            copies of the Software for Licensee’s personal use.
          </Text>
        </Flex>
        <Flex mb="2" direction="column">
          <Text
            fontWeight="md"
            fontSize="larger"
            color={useColorModeValue("orange.500", "blue.200")}
          >
            2 Description of Rights and Limitations.
          </Text>
          <Text>
            Licensee and third parties may not reverse engineer, decompile, or disassemble the
            Software, except and only to the extent that such activity is expressly permitted by
            applicable law notwithstanding the limitation. Licensor shall provide updates and
            maintenance on the Software on an as needed basis. The software is licensed as a single
            product. Its components may not be separated for use on more than one device.
          </Text>
        </Flex>
        <Flex mb="2" direction="column">
          <Text
            fontWeight="md"
            fontSize="larger"
            color={useColorModeValue("orange.500", "blue.200")}
          >
            3 Title to Software.
          </Text>
          <Text>
            Licensor represents and warrants that it has the legal right to enter into and perform
            its obligation under this EULA, and that use by the Licensee of the Software, in
            accordance with the terms of this EULA, will not infringe upon the intellectual property
            rights of any third parties.
          </Text>
        </Flex>
        <Flex mb="2" direction="column">
          <Text
            fontWeight="md"
            fontSize="larger"
            color={useColorModeValue("orange.500", "blue.200")}
          >
            4 Intellectual Property.
          </Text>
          <Text>
            All now known or hereafter known tangible and intangible rights, title, interest,
            copyrights and moral rights in and to the software, including but not limited to all
            images, photographs, animations, video, audio, music, text, data, computer code,
            algorithms and information, are owned by licensor. The Software is protected by all
            applicable copyright laws and international treaties.
          </Text>
        </Flex>
        <Flex mb="2" direction="column">
          <Text
            fontWeight="md"
            fontSize="larger"
            color={useColorModeValue("orange.500", "blue.200")}
          >
            5 No Support.
          </Text>
          <Text>Licensor has no obligation to provide support services for the Software.</Text>
        </Flex>
        <Flex mb="2" direction="column">
          <Text
            fontWeight="md"
            fontSize="larger"
            color={useColorModeValue("orange.500", "blue.200")}
          >
            6 Duration.
          </Text>
          <Text>
            This EULA is effective for 12 months or until: (a) Automatically terminated or suspended
            if Licensee fails to comply with any of the terms and conditions set forth in this EULA;
            or (b) Terminated or suspended by Licensor, with or without cause. In the event this
            EULA is terminated, you must cease use of the Software and destroy all copies of the
            Software.
          </Text>
        </Flex>
        <Flex mb="2" direction="column">
          <Text
            fontWeight="md"
            fontSize="larger"
            color={useColorModeValue("orange.500", "blue.200")}
          >
            7 Jurisdiction.
          </Text>
          <Text>
            This EULA shall be deemed to have been made in, and shall be construed pursuant to the
            laws of the State of New York, without regard to conflicts of laws provisions thereof.
            Any action or proceeding related to this EULA shall be brought exclusively in courts
            located in Schenectady, NY and each party consents to the jurisdiction thereof. The
            prevailing party in any action to enforce this EULA shall be entitled to recover costs
            and expenses including without limitation, attorney’s fees. This EULA is made within the
            exclusive jurisdiction of the United States, and its jurisdiction shall supersede any
            other jurisdiction of either parties election.
          </Text>
        </Flex>
        <Flex mb="2" direction="column">
          <Text
            fontWeight="md"
            fontSize="larger"
            color={useColorModeValue("orange.500", "blue.200")}
          >
            8 Non-Transferable.
          </Text>
          <Text>
            This EULA is not assignable or transferable by Licensee, and any attempt to do so would
            be void.
          </Text>
        </Flex>
        <Flex mb="2" direction="column">
          <Text
            fontWeight="md"
            fontSize="larger"
            color={useColorModeValue("orange.500", "blue.200")}
          >
            9 Severability.
          </Text>
          <Text>
            Too failure to exercise and not delay in exercising, on the part of either part, any
            privilege, any power or any rights hereunder will operate as a waiver thereof, nor will
            any single or partial exercise of any right or power hereunder preclude further exercise
            of any right hereunder. If any provision of this EULA shall be adjudged by any court of
            competent jurisdiction to be unenforceable or invalid, that provision shall be limited
            or eliminated to the minimum extent necessary so that this EULA shall otherwise remain
            in full force and effect and enforceable.
          </Text>
        </Flex>
        <Flex mb="2" direction="column">
          <Text
            fontWeight="md"
            fontSize="larger"
            color={useColorModeValue("orange.500", "blue.200")}
          >
            10 WARRANTY DISCLAIMER
          </Text>
          <Text>
            LICENSOR AND AUTHOR OF THE SOFTWARE, HEREBY EXPRESSLY DISCLAIM ANY WARRANTY FOR THE
            SOFTWARE. THE SOFTWARE AND ANY RELATED DOCUMENTATION IS PROVIDED “AS IS” WITHOUT
            WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, THE
            IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR
            NON-INFRINGEMENT. LICENSEE ACCEPTS ANY AND ALL RISK ARISING OUT OF USE OR PERFORMANCE OF
            THE SOFTWARE.
          </Text>
        </Flex>
        <Flex mb="2" direction="column">
          <Text
            fontWeight="md"
            fontSize="larger"
            color={useColorModeValue("orange.500", "blue.200")}
          >
            11 LIMITATION OF LIABILITY
          </Text>
          <Text>
            LICENSOR SHALL NOT BE LIABLE TO LICENSEE, OR ANY OTHER PERSON OR ENTITY CLAIMING THROUGH
            LICENSEE ANY LOSS OF PROFITS, INCOME, SAVINGS, OR ANY OTHER CONSEQUENTIAL, INCIDENTAL,
            SPECIAL, PUNITIVE, DIRECT OR INDIRECT DAMAGE, WHETHER ARISING IN CONTRACT, TORT,
            WARRANTY, OR OTHERWISE. THESE LIMITATIONS SHALL APPLY REGARDLESS OF THE ESSENTIAL
            PURPOSE OF ANY LIMITED REMEDY. UNDER NO CIRCUMSTANCES SHALL LICENSOR’s AGGREGATE
            LIABILITY TO LICENSEE, OR ANY OTHER PERSON OR ENTITY CLAIMING THROUGH LICENSEE, EXCEED
            THE FINANCIAL AMOUNT ACTUALLY PAID BY THE LICENSEE TO THE LICENSOR FOR THE SOFTWARE.
          </Text>
        </Flex>
        <Flex mb="2" direction="column">
          <Text
            fontWeight="md"
            fontSize="larger"
            color={useColorModeValue("orange.500", "blue.200")}
          >
            12 Entire Agreement.
          </Text>
          <Text>
            This EULA constitutes the entire agreement between Licensor and Licensee and supersedes
            all prior understanding of Licensor and Licensee, including any prior representation,
            statement, condition, or warranty with respect to the subject matter of this EULA.
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Eula;
