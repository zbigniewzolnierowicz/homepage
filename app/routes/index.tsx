import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"

import { getQuotes } from "~/api/quotes.server"

import {Box, limitWidth, subheading, normalCase, fullWidth, textCenter, Badge} from "~/components/homepage/utils";
import { Header, AvatarBox, AvatarBoxImage, TitleBox } from "~/components/homepage/header";
import { QuoteMachine } from "~/components/homepage/quote-machine";
import {Main, AboutMyself, WhoAmI, InfoList, FriendsList} from "~/components/homepage/main";
import {
  Footer,
  BadgesSection,
  CopyrightSection,
  LicenseSection
} from "~/components/homepage/footer";
import { Heading } from "~/components/homepage/heading";

import anti_NFT from "../assets/img/antinft.webp"
import hate_square_space from "../assets/img/hatesquarespace.jpg"
import non_binary from "../assets/img/nonbinary.jpg"
import right_to_repair from "../assets/img/right_to_repair.jpg"
import this_website_is_gay from "../assets/img/thiswebsiteisgay.webp"
import firefox from "../assets/img/firefox.gif"
import visual_studio_code_button from "../assets/img/vscbutton.gif"
import avatar from "../assets/img/avatar.jpg"
import {randomElementIndex} from "~/utils";

type LoaderData = {
  quote: string
}

export const loader: LoaderFunction = async () => {
  const quotes = await getQuotes();
  const quoteIndex = randomElementIndex(quotes);
  const quote = quotes[quoteIndex];
  const loaderData: LoaderData = { quote };

  return json(loaderData);
}

export default function Index() {
  const data = useLoaderData<LoaderData>();
  return (
    <>
      <Header className={limitWidth()}>
        <AvatarBox>
          <AvatarBoxImage src={avatar} alt="Avatar" />
        </AvatarBox>
        <TitleBox>
          <Heading>
            zed is not dead
            <span className={subheading()}>Repository of stupidity</span>
          </Heading>
        </TitleBox>
      </Header>
      <QuoteMachine quote={data.quote} />
      <Main className={limitWidth()}>
        <AboutMyself>
          <WhoAmI className="flex-left">
            <Heading as="h2" size="h4" textShadow="small" className={[fullWidth(), textCenter()].join(" ")}>Myself</Heading>
            <InfoList>
              <dt>Name</dt>
              <dd>Zed</dd>
              <dt>Pronouns</dt>
              <dd>he/they</dd>
              <dt>GitHub</dt>
              <dd><a rel="me" href="https://github.com/zbigniewzolnierowicz/">link</a></dd>
              <dt>GitLab</dt>
              <dd><a rel="me" href="https://gitlab.com/zzed">link</a></dd>
              <dt>Discord</dt>
              <dd className={normalCase()}>Zed#0990</dd>
              <dt>Twitter</dt>
              <dd><a rel="me" href="https://twitter.com/zed_not_dead">link</a></dd>
              <dt>Mastodon (uwu.social)</dt>
              <dd><a rel="me" href="https://uwu.social/web/@zed">link</a></dd>
              <dt>Tumblr</dt>
              <dd><a rel="me" href="https://0x0000b16b00b5.tumblr.com/">link</a></dd>
            </InfoList>
            <Heading size="h4" as="h2" textShadow="small" className={[fullWidth(), textCenter()].join(" ")}>cool folks</Heading>
            <FriendsList>
              <li><a href="https://selfisekai.rocks">selfisekai</a></li>
              <li><a href="https://sdomi.pl">sdomi</a></li>
              <li><a href="https://pjo.carrd.co">pjo</a></li>
            </FriendsList>
          </WhoAmI>
          <Box className="flex-left">
            <p className={normalCase()}>
              My name is Zbigniew, though most people online know me as Zed, due to the sheer unpronounceability of my real name.
              I'm a non-binary web developer, slightly dabbling in multiple languages, mostly the following:
            </p>
            <ul>
              <li>JavaScript</li>
              <li>Rust</li>
              <li>C#</li>
              <li>Java</li>
            </ul>
            <p className={normalCase()}>
              I also like sysadminning, having set up a server cluster at home.
            </p>
          </Box>
        </AboutMyself>
        <Box className="flex-left">
          <Heading as="h2" className={[textCenter(), fullWidth()].join(" ")}>Projects I'm proud of</Heading>
          <ul>
            <li><a href="https://github.com/zbigniewzolnierowicz/cluster">cluster</a> - Kubernetes and Helm manifests for my personal cluster</li>
            <li><a href="https://gitlab.com/zzed/Kable-Backend">kable</a> - a Rust server for an unspecified purpose</li>
            <li><a href="https://mrdecal.zolnierowi.cz">Mr. Decal</a> - a website for my father's decal business</li>
          </ul>
        </Box>
      </Main>
      <Footer id="footer" className={limitWidth()}>
        <CopyrightSection as="p">
          © zed is not dead 2022
        </CopyrightSection>
        <LicenseSection>
          <p>Licensed under <a rel="license" href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a></p>
          <a rel="license" href="https://creativecommons.org/licenses/by-sa/4.0/"><Badge alt="Creative Commons License" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a>
        </LicenseSection>
        <BadgesSection>
          <Badge src={anti_NFT} alt="anti NFT" />
          <Badge src={hate_square_space} alt="hate squarespace" />
          <Badge src={non_binary} alt="nonbinary" />
          <Badge src={right_to_repair} alt="right to repair" />
          <Badge src={this_website_is_gay} alt="this website is gay" />
          <Badge src={firefox} alt="get firefox" />
          <Badge src={visual_studio_code_button} alt="visual studio code" />
        </BadgesSection>
      </Footer>
    </>
  );
}
