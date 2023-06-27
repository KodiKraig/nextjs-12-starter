import { Container } from '@components/common';
import { Button, Text } from '@components/ui';
import { FC } from 'react';

// Leading Content Text

const LeadingContent = () => {
  return (
    <div className="flex flex-col">
      <Text variant="sectionHeading" className="text-white">
        Start your project with NextJS Starter Project today!
      </Text>
      <Text>
        NextJS 12 Starter Project is designed to get you up and running with the bare minimum
        dependencies for an excellent developer experience.
      </Text>
    </div>
  );
};

// Trailing Content Links

interface Link {
  linkTitleText: string;
  onClick: () => void;
}

interface LinkProps {
  title: string;
  links: Link[];
}

const Links: FC<LinkProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col gap-2">
      <Text className="font-bold text-accent-7">{title}</Text>
      {links.map((link, index) => (
        <Button key={index} variant="naked" onClick={link.onClick}>
          {link.linkTitleText}
        </Button>
      ))}
    </div>
  );
};

const TrailingContentLinks = () => {
  return (
    <div className="flex flex-wrap sm:max-xl:flex-nowrap gap-8">
      <ContactLinks />
      <OtherLinks />
      <HelpLinks />
    </div>
  );
};

const ContactLinks = () => {
  return (
    <Links
      title="Contact"
      links={[
        { linkTitleText: 'Call', onClick: () => {} },
        { linkTitleText: 'Text', onClick: () => {} },
        { linkTitleText: 'Email', onClick: () => {} },
        { linkTitleText: 'Facebook', onClick: () => {} },
        { linkTitleText: 'Instagram', onClick: () => {} }
      ]}
    />
  );
};

const OtherLinks = () => {
  return (
    <Links
      title="Links"
      links={[
        { linkTitleText: 'Blog', onClick: () => {} },
        { linkTitleText: 'Medium', onClick: () => {} }
      ]}
    />
  );
};

const HelpLinks = () => {
  return <Links title="Help" links={[{ linkTitleText: 'FAQ', onClick: () => {} }]} />;
};

// Footer

const TopContent = () => {
  return (
    <div className="flex justify-around flex-wrap sm:md:flex-nowrap gap-16 px-12 py-8">
      <LeadingContent />
      <TrailingContentLinks />
    </div>
  );
};

const BottomContent = () => {
  return (
    <div className="self-center flex flex-row p-4 gap-6">
      <Text className="font-bold">Terms and Conditions</Text>
      <Text className="font-bold">Privacy Policy</Text>
      <Text className="text-accent-7">© NextJS Starter</Text>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary mt-32">
      <Container clean className="flex flex-col">
        <TopContent />
        <BottomContent />
      </Container>
    </footer>
  );
};

export default Footer;
