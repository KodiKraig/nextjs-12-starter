import { Layout, Container } from '@components/common';
import { Logo, Text } from '@components/ui';

const Home = () => {
  return (
    <Container>
      <div className="relative w-screen h-96">
        <Logo />
      </div>

      <div className="p-8">
        <Text variant="sectionHeading">Next JS Starter Project</Text>
        <Text>
          This is a starter project with all the basic dependencies and project
          structure to quickly get started on a new NextJS 12 project.
        </Text>
      </div>
    </Container>
  );
};

Home.Layout = Layout;

export default Home;
